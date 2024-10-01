import clientPromise from "../../../../lib/mongodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Email query parameter is required." }),
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db();

  try {
    const member = await db.collection("members").findOne({ email });

    if (member) {
      return new Response(JSON.stringify({ exists: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ exists: false }), { status: 200 });
    }
  } catch (error) {
    console.error("Error checking email:", error);
    return new Response(
      JSON.stringify({ message: "Error checking email", error: error.message }),
      { status: 500 }
    );
  }
}
