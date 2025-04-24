import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "../../../lib/mongodb";

export async function POST(request) {
  const { email, password } = await request.json();

  const client = await clientPromise;
  const db = client.db();

  const member = await db.collection("members").findOne({ email });

  if (!member) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const hashedPassword = member.password;

  const validPassword = await bcrypt.compare(password, hashedPassword);
  if (!validPassword) {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
    });
  }

  const token = jwt.sign(
    { id: member._id, email: member.email, role: member.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return new Response(JSON.stringify({ token }), { status: 200 });
}
