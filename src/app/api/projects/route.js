import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const projects = await db.collection("projects").find({}).toArray();
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response(
      JSON.stringify({
        message: "Error fetching projects",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const projectData = await request.json();
  const client = await clientPromise;
  const db = client.db();

  try {
    const result = await db.collection("projects").insertOne(projectData);
    return new Response(
      JSON.stringify({ message: "Project added successfully!" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding project:", error);
    return new Response(
      JSON.stringify({ message: "Error adding project", error: error.message }),
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
      .collection("projects")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No project found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "project updated successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return new Response(
      JSON.stringify({
        message: "Error updating project",
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
      .collection("projects")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ message: "No project found with that ID" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "project deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return new Response(
      JSON.stringify({
        message: "Error deleting project",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
