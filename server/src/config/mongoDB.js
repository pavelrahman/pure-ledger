//* External Imports *//
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // কানেকশন ফেল করলে সার্ভার বন্ধ করবে
  }
};

export default connectMongo;
