import mongoose from "mongoose";
import env from "./utils/validateEnv";


const connect = async (): Promise<boolean> => {
  try {
    mongoose.connect(env.DATABASE_URI);
    console.log("Database connected");
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An error occurred");
    }
    return false;
  }
};

export default connect;
