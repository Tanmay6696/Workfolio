// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import app from './App.js'
const port = process.env.PORT || 8000;

dotenv.config({
    
})
import connectDB from './db/Indexnew.js'
connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Example app listening on port ${port}`)
    })
})
.catch((err)=>{ 
    console.log("MONGO DB FAILED",err);
})