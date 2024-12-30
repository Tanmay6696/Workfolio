// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import app from './App.js'
const port = process.env.PORT || 8000;

dotenv.config({
    path:'./env'
})
import connectDB from './db/Indexnew.js'
connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log("server is running " ,process.env.PORT);
    })
})
.catch((err)=>{ 
    console.log("MONGO DB FAILED",err);
})