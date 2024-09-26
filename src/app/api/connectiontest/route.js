import clientPromise from "../../../lib/mongodb";

export async function GET(request) {
  try {
    const client = await clientPromise; // This line establishes the connection
    return new Response(
      JSON.stringify({ message: "MongoDB connected successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return new Response(
      JSON.stringify({
        message: "MongoDB connection error",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
