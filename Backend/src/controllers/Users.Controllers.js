import {User} from '../Models/User.Models.js';
import {Experiance} from '../Models/Experiance.Models.js';
import {APiError} from '../utils/ApiError.js'
import {AsyncHandler} from '../utils/AsyncHandler.js'
import {Skill} from '../Models/Skills.Models.js'
import {awards} from '../Models/Awards.Models.js'
import {Education} from '../Models/Education.Models.js'
import {Achivements} from '../Models/Achivements.Models.js'
import {Tags} from '../Models/Tags.Models.js'
import {uploadoncloudinary} from '../utils/Cloudinary.js';
import {Projects} from '../Models/Projects.Models.js';
import {SocialMedia} from '../Models/SocialMedia.Models.js';
import {CodingProfiles} from '../Models/CodingProfile.Models.js';

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
    
    const {
        username,email,password,fullName,summary,introVideo,skills ,experience ,achievements, Awards,projects ,resume ,codingProfiles ,feed ,profilePicture,educations,socialMedia
    }=req.body
    //console.log("req",req.files);
    //console.log("profilePicture  ",req.files);
    if([username,email,password,fullName].some((fields)=>
        fields.trim===""
        )){
            throw new APiError(400,"all fields are required")
        }
    //console.log("profilePicture  ",req.body);
    //console.log("profilePicture  ",req.body);
    const experiencid=await Promise.all(experience.map(async(experiance)=>{
        const exp=new Experiance(experiance);        
        await exp.save();
        return exp._id;
    }))

   
    //awards
    const awardsid=await Promise.all(Awards.map(async(award)=>{
        const newaward=new awards(award)
        await newaward.save();
        return newaward._id;
    }))
    //education
    //console.log("experience 2");
    const educationid=await Promise.all(educations.map(async(education)=>{
        const educationdetails=new Education(education)
        await educationdetails.save();
        return educationdetails._id;
    }))
    //achiements
    const achievementsdetailsid=await Promise.all(achievements.map(async(achievement)=>{
        const achievementsdetails=new Achivements(achievement)
        await achievementsdetails.save();
        return achievementsdetails._id;
    }))
    //tags
    const skillsId=await Promise.all(skills.map(async(skill)=>{
        const skillstore=new Skill(skill)
        await skillstore.save();
        return skillstore._id;
    }))
    //projects
    const projectId=await Promise.all(projects.map(async(project)=>{
        const singleProject=new Projects(project)
        await singleProject.save();
        return singleProject._id;
    }))
    //SocialMedia
    const SocialMediaId=await Promise.all(socialMedia.map(async(socialmedia)=>{
        const singlesocialMedia=new SocialMedia(socialmedia)
        await singlesocialMedia.save();
        return singlesocialMedia._id;
    }))
    //codingprofiles
    const codingprofilesId=await Promise.all(codingProfiles.map(async(codingProfile)=>{
        const codingprofile=new CodingProfiles(codingProfiles)
        await codingprofile.save();
        return codingprofile._id;
    }))
    //file uploads
    //coberimage
    
    const profilephotolocalurloath=req.files?.profilePicture[0].path;
    //console.log("profilephotolocalurloath",req.files,profilePicture);
    const profilephotourl=await uploadoncloudinary(profilephotolocalurloath);
    //console.log("profilephotourl",profilephotourl,profilephotourl.url);

    console.log("resume ",req.files?.resume[0].path ," Introvideo ",req.files?.introVideo[0].path);
    // Introvideo
    const Introvideolocalurloath=req.files?.introVideo[0].path;
    const Introvideourl=await uploadoncloudinary(Introvideolocalurloath);
    //Resume
    const Resumelocalurloath=req.files?.resume[0].path;
    const Resumeurl=await uploadoncloudinary(Resumelocalurloath);


    const user=await User.create({
        
        username,
        email,
        password,
        fullName,
        summary:summary|| "ee",
        profilePicture:profilephotourl.url||" " ,
        introVideo:Introvideourl.url||" ",
        skills:skillsId,
        achievements:achievementsdetailsid,
        projects:projectId,
        codingProfiles:codingprofilesId,
        experiences:experiencid,
        awards:awardsid,
        feed:feed||" " ,
        resume:Resumeurl.url||" " ,
        education:educationid,
        socialMediaProfiles:SocialMediaId


    })
    const Createduser=await User.findOne({
        $or:[{username},{email}]
    })
    //console.log("experience ",Createduser.experiences);
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