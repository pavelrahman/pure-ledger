//* External Imports *//
import mongoose from "mongoose";

const connectDB = async () => {
  const dbType = process.env.DB_TYPE || "mongo";

  try {
    if (dbType === "mongo") {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } else if (dbType === "mysql") {
      console.log("MySQL Connected successfully!");
    } else {
      throw new Error(`Unsupported DB_TYPE: ${dbType}`);
    }
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
