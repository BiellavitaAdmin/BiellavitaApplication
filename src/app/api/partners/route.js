import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const partners = await db.collection("partners").find({}).toArray();
    return new Response(JSON.stringify(partners), { status: 200 });
  } catch (error) {
    console.error("Error fetching partners:", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching partners",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const memberData = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db.collection("partners").insertOne(memberData);
    return new Response(
      JSON.stringify({ message: "Partner added successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding partner:", error);
    return new Response(
      JSON.stringify({ message: "Error adding partner", error: error.message }),
      { status: 500 }
    );
  }
}

// Edit Member API
export async function PUT(request) {
  const { id, ...updateData } = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("partners")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No partner found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Partner updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating partner:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating partner",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

// Delete Member API
export async function DELETE(request) {
  const { id } = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("partners")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No partner found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Partner deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting partner:", error);
    return new Response(
      JSON.stringify({
        message: "Error deleting partner",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
