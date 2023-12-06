import mongoose from "mongoose";
const connectDB = async (url) => {
  try {
    const options = {
      dbName: process.env.MONGO_DB,
    };
    await mongoose.connect(url, options);
    console.log(`Database Connected`);
  } catch (error) {
    console.log(`Error in Database ${error}`.red);
  }
};

export default connectDB;
