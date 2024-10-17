import clientPromise from "../../../lib/mongodb";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const members = await db.collection("members").find({}).toArray();
    return new Response(JSON.stringify(members), { status: 200 });
  } catch (error) {
    console.error("Error fetching members:", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching members",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

// export async function POST(request) {
//   const memberData = await request.json();
//   const client = await clientPromise;
//   const db = client.db();

//   try {
//     const result = await db.collection("members").insertOne(memberData);
//     return new Response(
//       JSON.stringify({ message: "Member added successfully!" }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error adding member:", error);
//     return new Response(
//       JSON.stringify({ message: "Error adding member", error: error.message }),
//       { status: 500 }
//     );
//   }
// }

// Edit Member API

export async function POST(request) {
  const memberData = await request.json(); // This already contains all the member info
  const client = await clientPromise;
  const db = client.db();

  try {
    // Generate a default temporary password
    const defaultPassword = "defaultPassword123";

    // Hash the default password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(defaultPassword, salt);

    // Add the hashed password to the member data
    const updatedMemberData = {
      ...memberData,
      password: hashedPassword, // Save hashed password in DB
    };

    // Insert the new member into the database
    const result = await db.collection("members").insertOne(updatedMemberData);

    // Email transporter configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Extract relevant data from memberData for email
    const { firstname, lastname, email } = memberData;

    // Email HTML template with a change password link
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #4CAF50;">Welcome to Our Platform, ${firstname}!</h2>
        <p>Dear ${firstname} ${lastname},</p>
        <p>We're excited to have you on board! Below are your login details:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Temporary Password:</strong> ${defaultPassword}</p>
        <p>Please <a href="https://yourwebsite.com/change-password?email=${email}" style="color: #4CAF50;">click here</a> to change your password.</p>
        <br>
        <p>Best regards,<br>Your Company Team</p>
      </div>
    `;

    // Send the email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Welcome, ${firstname} ${lastname}!`,
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Member added and email sent successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding member and sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error adding member", error: error.message }),
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const { id, ...updateData } = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("members")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No member found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Member updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating member:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating member",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

// Delete Member API
export async function DELETE(request) {
  const { id } = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("members")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No member found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Member deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting member:", error);
    return new Response(
      JSON.stringify({
        message: "Error deleting member",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
