import nodemailer from "nodemailer";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const buildThankYouEmail = (firstname, message) => {
  const serif = "font-family: 'Playfair Display', serif; font-style: italic; color: black; text-align: center;";
  return `
<div style="width: 100%; background-color: #effaf6; padding: 20px;">
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: white; border-collapse: collapse; border-radius: 50px;">
    <tr>
      <td style="padding: 2rem;">
        <table width="100%">
          <tr>
            <td style="width: 50%; vertical-align: top;">
              <img src="https://i.imgur.com/5sQQ2bY.png" alt="Company Logo" style="width: 90px; height: auto; display: block;" />
            </td>
            <td style="text-align: right; width: 50%; vertical-align: top;">
              <table style="display: inline-block;">
                <tr>
                  <td style="padding: 0 5px;"><img src="https://i.imgur.com/BxIK1ya.png" alt="Social Icon" style="width: 20px; height: 20px;" /></td>
                  <td style="padding: 0 5px;"><img src="https://i.imgur.com/px6RVRc.png" alt="Social Icon" style="width: 23px; height: 23px;" /></td>
                </tr>
              </table>
              <p style="font-size: 12px; color: #333; font-weight: 700; margin-top: 5px; text-align: right;">Follow Us</p>
              <strong style="font-family: 'Playfair Display', serif; font-style: italic; font-size: 25px; text-align: right; display: block;">Biellavita</strong>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f5f3f3; padding: 20px; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;">
        <p style="${serif} font-weight: 700; font-size: 30px;">Thank you, ${escapeHtml(firstname)},</p>
        <p style="${serif} font-size: 25px;">We have received your message and a member of our team will get back to you as soon as possible.</p>
        <br />
        <p style="${serif} font-size: 20px;">Your message:</p>
        <p style="font-family: 'Helvetica', sans-serif; color: #333; font-size: 16px; text-align: center; white-space: pre-wrap;">${escapeHtml(message)}</p>
        <br />
        <p style="${serif} font-size: 25px;">If you have any questions, please feel free to contact us at <span style="font-weight: 600;">help@Biellavita.com</span></p>
      </td>
    </tr>
  </table>
</div>`;
};

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
        html: buildThankYouEmail(firstname, message),
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
