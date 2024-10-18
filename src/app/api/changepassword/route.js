import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { username, defaultPassword, newPassword } = await request.json(); // Get the form data
  const client = await clientPromise;
  const db = client.db();

  try {
    // Fetch the user by username
    const user = await db.collection("members").findOne({ username });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Validate the default password
    const isMatch = await bcrypt.compare(defaultPassword, user.password);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ message: "Incorrect default password" }),
        { status: 400 }
      );
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password in the database
    await db
      .collection("members")
      .updateOne(
        { _id: new ObjectId(user._id) },
        { $set: { password: hashedNewPassword } }
      );

    // Email confirmation after password change
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const emailTemplate = `
      <div style="width: 100%; background-color: #effaf6; padding: 20px;">
        <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: white; border-collapse: collapse; border-radius: 10px;">
          <tr><td style="padding: 2rem;">Hello ${user.firstname},<br/>Your password has been successfully updated.</td></tr>
        </table>
      </div>
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: user.email,
      subject: "Your Password has been Changed",
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: "Password changed successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error changing password:", error);
    return new Response(
      JSON.stringify({
        message: "Error changing password",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
