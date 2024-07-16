import mongoose from "mongoose";
import { DB_NAME } from "../Constant.js";

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("mongodbhost connected",connectionInstance.connection.host);
    }
    catch(e)
    {
        console.log("errors     ",e);
        process.exit(1);
    }
}
export default connectDB
