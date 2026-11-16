import mongoose from "mongoose";
import connectDB from "../config/db.js";

export const executeWithDB = async (task) => {
  try {
    await connectDB();
    await task();
  } catch (err) {
    console.error("Database Task Error:", err);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log("Database Connection Closed");
    process.exit();
  }
};
