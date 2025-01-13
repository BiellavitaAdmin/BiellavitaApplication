import { MongoClient } from "mongodb";

const uri = process.env.MONGO_DB_URI; // Replace with your connection string

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    // console.log("MongoDB URI:", uri);
    client = new MongoClient(uri);
    global._mongoClientPromise = client
      .connect()
      .then(() => {
        console.log("MongoDB connected successfully!");
        return client;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client
    .connect()
    .then(() => {
      console.log("MongoDB connected successfully!");
      return client;
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

export default clientPromise;
