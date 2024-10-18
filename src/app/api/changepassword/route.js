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
    const user = await db.collection("members").findOne({ email: username });

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
       <div
   style="
     width: 100%;
     background-color: #effaf6;
     padding: 20px;
   "
 >
   <!-- Template Content Container -->
   <table
     align="center"
     cellpadding="0"
     cellspacing="0"
     width="100%"
     style="
       max-width: 600px;
       background-color: white;
       border-collapse: collapse;
       border-top-left-radius: 50px;
       border-top-right-radius: 50px;
       border-bottom-left-radius: 50px;
       border-bottom-right-radius: 50px;
     "
   >
     <!-- Template Header -->
     <tr>
       <td style="padding: 2rem;">
         <!-- Header Table -->
         <table width="100%">
           <tr>
             <!-- Logo on the Left -->
             <td style="width: 50%; vertical-align: top;">
               <a
                 href="https://yourcompanywebsite.com"
                 style="text-decoration: none;"
               >
                 <img
                   src="https://i.imgur.com/5sQQ2bY.png"
                   alt="Company Logo"
                   style="
                     width: 90px;
                     height: auto;
                     display: block;
                   "
                 />
               </a>
             </td>
             <!-- Social Icons, Follow Us, and Biellavita on the Right -->
             <td style="text-align: right; width: 50%; vertical-align: top;">
               <!-- Social Icons Container -->
               <table style="display: inline-block;">
                 <tr>
                   <td style="padding: 0 5px;">
                     <img
                       src="https://i.imgur.com/BxIK1ya.png"
                       alt="Social Icon"
                       style="width: 20px; height: 20px;"
                     />
                   </td>
                   <td style="padding: 0 5px;">
                     <img
                       src="https://i.imgur.com/px6RVRc.png"
                       alt="Social Icon"
                       style="width: 23px; height: 23px;"
                     />
                   </td>
                 </tr>
               </table>
               <!-- Follow Us and Biellavita -->
               <p
                 style="
                   font-size: 12px;
                   color: #333;
                   font-weight: 700;
                   margin-top: 5px;
                   text-align: right;
                 "
               >
                 Follow Us
               </p>
               <strong
                 style="
                   font-family: 'Playfair Display', serif;
                   font-style: italic;
                   font-size: 25px;
                   text-align: right;
                   display: block;
                 "
               >
                 Biellavita
               </strong>
             </td>
           </tr>
         </table>
       </td>
     </tr>
 
     <!-- Template Content -->
     <tr>
       <td
         style="
           background-color: #f5f3f3;
           padding: 20px;
           border-bottom-left-radius: 50px;
           border-bottom-right-radius: 50px;
         "
       >
         <img
           src="https://i.imgur.com/oGARD5c.png"
           alt="Padlock Icon"
           style="
             width: 70px;
             height: 70px;
             display: block;
             margin: 0 auto 20px auto;
           "
         />
         <p
           style="
             color: black;
             font-family: 'Playfair Display', serif;
             font-style: italic;
             font-weight: 700;
             font-size: 30px;
             text-align: center;
           "
         >
           Congradulations,
         </p>
         <p
           style="
             color: black;
             font-family: 'Playfair Display', serif;
             font-style: italic;
             font-size: 25px;
             text-align: center;
           "
         >
           your password was changed successfully!!!
         </p>
        
        
         
         <br />
         <p
           style="
             color: black;
             font-family: 'Playfair Display', serif;
             font-style: italic;
             font-size: 25px;
             text-align: center;
           "
         >
           If you have any questions, please feel free to contact us at
           <span
             style="
               font-family: 'Playfair Display', serif;
               font-style: italic;
               font-weight: 600;
               font-size: 25px;
             "
             >help@Biellavita.com</span
           >
         </p>
         <br />
         <p
           style="
             color: black;
             font-family: 'Playfair Display', serif;
             font-style: italic;
             font-size: 25px;
             text-align: center;
           "
         >
           By using the Biellavita account, you agree to our
           <span
             style="
               font-family: 'Playfair Display', serif;
               font-weight: 600;
               font-size: 25px;
             "
             >terms & conditions & privacy policy</span
           >.
         </p>
       </td>
     </tr>
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
