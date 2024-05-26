import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectMongo = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.mongoLink}/${process.env.dbName}`
    );
    console.log("MongoDB is connect on " + connectionInstance.connection.host);
  } catch (error) {
    console.log("Database connection Faild: " + error);
    process.exit(1);
  }
};

export default connectMongo;
