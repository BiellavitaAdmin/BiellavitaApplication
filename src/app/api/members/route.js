import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const members = await db.collection("members").find({}).toArray();
    return new Response(JSON.stringify(members), { status: 200 });
  } catch (error) {
    console.error("Error fetching members:", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching members",
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
    const result = await db.collection("members").insertOne(memberData);
    return new Response(
      JSON.stringify({ message: "Member added successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding member:", error);
    return new Response(
      JSON.stringify({ message: "Error adding member", error: error.message }),
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
      .collection("members")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No member found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Member updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating member:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating member",
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
      .collection("members")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No member found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Member deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting member:", error);
    return new Response(
      JSON.stringify({
        message: "Error deleting member",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
