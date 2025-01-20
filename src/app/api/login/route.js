import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "../../../lib/mongodb"; // Use the same MongoDB connection

export async function POST(request) {
  const { email, password } = await request.json();

  // Connect to the database
  const client = await clientPromise;
  const db = client.db();

  // Fetch the member by email
  const member = await db.collection("members").findOne({ email });

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
    process.env.JWT_SECRET, // Make sure this is set in your environment variables
    { expiresIn: "1h" }
  );

  return new Response(JSON.stringify({ token }), { status: 200 });
}
