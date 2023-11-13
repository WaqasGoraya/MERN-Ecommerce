import mongoose from "mongoose";
const connectDB = async (url, name) => {
  try {
    const options = {
      dbName: name,
    };
    await mongoose.connect(url, options);
    console.log(`Database Connected`);
  } catch (error) {
    console.log(`Error in Database ${error}`.red);
  }
};

export default connectDB;
