"use server";
import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const events = await db.collection("events").find({}).toArray();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      {
        message: "Error fetching events",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const eventData = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db.collection("events").insertOne(eventData);
    return NextResponse.json(
      { message: "Event added successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding event:", error);
    return NextResponse.json(
      { message: "Error adding event", error: error.message },
      { status: 500 }
    );
  }
}

// Edit Event API
export async function PUT(request) {
  const { id, ...updateData } = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("events")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "No event found with that ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Event updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json(
      {
        message: "Error updating event",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Delete Event API
export async function DELETE(request) {
  const { id } = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db
      .collection("events")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No event found with that ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Event deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      {
        message: "Error deleting event",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
