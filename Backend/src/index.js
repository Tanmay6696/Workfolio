// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import app from './App.js'

dotenv.config({
    path:'./env'
})
import connectDB from './db/Indexnew.js'
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("server is running " ,process.env.PORT);
    })
})
.catch((err)=>{
    console.log("MONGO DB FAILED",err);
})