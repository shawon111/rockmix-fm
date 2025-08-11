import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    }).catch((error) => {
      console.error("MongoDB connection error:", error);
      throw new Error("Failed to connect to MongoDB");
    }).finally(() => {
      console.log("MongoDB connection established");
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}