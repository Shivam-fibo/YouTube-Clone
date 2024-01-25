import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// kc2fSQpWueI6wm7q
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://sg641818:kc2fSQpWueI6wm7q@cluster0.toeb2.mongodb.net/")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB