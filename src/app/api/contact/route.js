import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Log the email recipients
  console.log("Sending email to:", process.env.RECEIVING_EMAIL.split(","));

  const mailOptions = {
    from: email,
    to: process.env.RECEIVING_EMAIL.split(","), // Splits the emails into an array
    subject: `New message from ${firstname} ${lastname} please reply at ${email}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    // Log email send confirmation
    console.log("Email sent successfully:", info);
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send message" }), {
      status: 500,
    });
  }
}
