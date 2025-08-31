import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function  connectDB() {
    try {
        let URL = process.env.MONGO_URL;
        await mongoose.connect(URL)
        console.log("DB connected")
    } catch (error) {
        console.log(error);
    }
}
connectDB()