import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MERN");
    console.log("Database Connected!");
  } catch (error) {
    console.log({ err: error.message });
  }
};
