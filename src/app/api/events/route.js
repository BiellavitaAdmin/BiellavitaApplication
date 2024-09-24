import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  try {
    const events = await db.collection("events").find({}).toArray();
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching events",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const eventData = await req.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db.collection("events").insertOne(eventData);
    return new Response(
      JSON.stringify({ message: "event added successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding event:", error);
    return new Response(
      JSON.stringify({ message: "Error adding event", error: error.message }),
      { status: 500 }
    );
  }
}

// Edit Member API
export async function PUT(req) {
  const { id, ...updateData } = await req.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("events")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No event found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "event updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating event:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating event",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

// Delete Member API
export async function DELETE(req) {
  const { id } = await req.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No event found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "event deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return new Response(
      JSON.stringify({
        message: "Error deleting event",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
