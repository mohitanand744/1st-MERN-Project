import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectedRes = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log("connectedRes");
  } catch (error) {
    console.log("Error ..." + error);
    process.exit(1);
  }
};

export default connectDB;
