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
import clientPromise from "../../../lib/mongodb";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = email.trim().toLowerCase();
    console.log("🔍 Email received:", normalizedEmail);

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    console.log("✅ MongoDB connected");

    // Find user with case-insensitive email
    const member = await db.collection("members").findOne({
      email: { $regex: `^${normalizedEmail}$`, $options: "i" },
    });

    if (!member) {
      console.log("❌ User not found in DB");
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    console.log("✅ User found:", member.email);

    const validPassword = await bcrypt.compare(password, member.password);
    if (!validPassword) {
      console.log("❌ Invalid password attempt");
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    const token = jwt.sign(
      { id: member._id, email: member.email, role: member.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("✅ Login successful, token generated");

    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("🔥 Login route error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
