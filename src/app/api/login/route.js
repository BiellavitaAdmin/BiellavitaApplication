// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import clientPromise from "../../../lib/mongodb";

// export async function POST(request) {
//   const { email, password } = await request.json();

//   const client = await clientPromise;
//   const db = client.db();

//   const member = await db.collection("members").findOne({ email });

//   if (!member) {
//     return new Response(JSON.stringify({ message: "User not found" }), {
//       status: 404,
//     });
//   }

//   const hashedPassword = member.password;

//   const validPassword = await bcrypt.compare(password, hashedPassword);
//   if (!validPassword) {
//     return new Response(JSON.stringify({ message: "Invalid credentials" }), {
//       status: 401,
//     });
//   }

//   const token = jwt.sign(
//     { id: member._id, email: member.email, role: member.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" }
//   );

//   return new Response(JSON.stringify({ token }), { status: 200 });
// }

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "../../../lib/mongodb"; // Use the same MongoDB connection

export async function POST(request) {
  const { email, password } = await request.json();

  // Normalize the email before querying
  const normalizedEmail = email.trim().toLowerCase();

  // Connect to the database
  const client = await clientPromise;
  const db = client.db();

  // Fetch the member by normalized email
  const member = await db
    .collection("members")
    .findOne({ email: normalizedEmail });

  if (!member) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  // The hashed password fetched from the database
  const hashedPassword = member.password;

  // Check if the entered password matches the hashed password
  const validPassword = await bcrypt.compare(password, hashedPassword);
  if (!validPassword) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: member._id, email: member.email, role: member.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return new Response(JSON.stringify({ token }), { status: 200 });
}
