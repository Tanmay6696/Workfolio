import {User} from '../Models/User.Models.js';
import {Experiance} from '../Models/Experiance.Models.js';
import {APiError} from '../utils/ApiError.js'
import {AsyncHandler} from '../utils/AsyncHandler.js'
import ApiResponse from '../utils/ApiResponse.js'


const RegisteredUser=AsyncHandler(async(req,res)=>{
    //get data from Users
    //checked for the mandatory data
        //Username email password createdAt
    //checked user is preesent in our database or not from email/username
        //if yes -> then throw error
    //checked url for resume , introvideo,profilephoto is uploadon cloudinary
        //if yes then upload url on mongodb
    //create user object to send the mongodb
    //assigned the refereshtokens
    //return response to client
    //console.log("req",req.query,req.body);
    const {
        username,email,password,fullName,summary,introVideo,skills ,experience ,achievements, projects ,resume ,codingProfiles ,feed ,profilePicture
    }=req.body
    
    if([username,email,password,fullName].some((fields)=>
        fields.trim===""
        )){
            throw new APiError(400,"all fields are required")
        }
        
    const existedUser=await User.findOne({
        $or:[{username},{email}]
    })
    
    if(existedUser===true){
        throw new APiError(400,"User is Alerady Present")
    }
    const experiencid=await Promise.all(experience.map(async(experiance)=>{
        const exp=new Experiance(experiance)
        await exp.save();
        return exp._id;
    }))
    console.log("experience 2",experiencid);
    const user=await User.create({
        
        username,
        email,
        password,
        fullName,
        summary:summary|| "ee",
        profilePicture:profilePicture||" " ,
        introVideo:introVideo||" ",
        skills:skills,
        achievements:achievements,
        projects:projects,
        codingProfiles:codingProfiles,
        experiences:experiencid,
        feed:feed||" " ,
        resume:resume||" " 


    })
    const Createduser=await User.findOne({
        $or:[{username},{email}]
    })
    console.log("experience ",Createduser.experiences);
    if(Createduser!=null)
    {
        return res.status(201).json(
            new ApiResponse(200,Createduser,"user is created" ,200)
        )
    }else{
        throw new APiError(500,"something went wrong")
    }
    

})
const LoginUser=AsyncHandler(async(req,res)=>{
    //import username and password
    //checked is userpresnt or not
        //if yes then compare password (access & refresh token -> to user),send secure cookies
        //else return no user presnt
    
    
})
const LogoutUser=AsyncHandler(async(req,res)=>{
    
})
export {RegisteredUser,LogoutUser,LoginUser}