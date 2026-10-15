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
    from: process.env.GMAIL_USER, // Gmail overrides any other sender address
    replyTo: email,
    to: process.env.RECEIVING_EMAIL.split(","), // Splits the emails into an array
    subject: `New message from ${firstname} ${lastname} please reply at ${email}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    // Log email send confirmation
    console.log("Email sent successfully:", info);

    // A failed acknowledgement must not fail the already-delivered message
    try {
      const ack = await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Thank you for contacting us",
        text: `Dear ${firstname},\n\nThank you for getting in touch. We have received your message and will reply as soon as possible.\n\nYour message:\n${message}\n\nKind regards,\nBiellavita`,
      });
      console.log("Thank-you email result:", ack.accepted, ack.rejected);
    } catch (ackError) {
      console.error("Thank-you email failed:", ackError.message);
    }

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
