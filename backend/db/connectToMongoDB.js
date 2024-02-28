import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error.message);
  }
};

export default connectToMongoDB;
