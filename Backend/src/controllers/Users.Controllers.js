import {User} from '../Models/User.Models.js';
import {Experience} from '../Models/Experiance.Models.js';
import {APiError} from '../utils/ApiError.js';
import {AsyncHandler} from '../utils/AsyncHandler.js'
import {Skill} from '../Models/Skills.Models.js'
import {awards} from '../Models/Awards.Models.js'
import {Education} from '../Models/Education.Models.js'
import {Achivements} from '../Models/Achivements.Models.js'
import {Tags} from '../Models/Tags.Models.js'
import {uploadoncloudinary} from '../utils/Cloudinary.js';
import {Project} from '../Models/Projects.Models.js';
import {SocialMedia} from '../Models/SocialMedia.Models.js';
import {CodingProfiles} from '../Models/CodingProfile.Models.js';
import { createDocument } from '../utils/createDocument.js';
import jwt from 'jsonwebtoken';
import { Comments } from '../Models/Comments.Models.js';
import mongoose from 'mongoose';
import { Rating } from '../Models/Rating.Models.js';
import ApiResponse from '../utils/ApiResponse.js'
import { Likes } from '../Models/Likes.Models.js';
import { UuidToString } from '../utils/UuidToString.js';

const generateaccessandrefershtokens =async(UserId)=>{
    
    try{
        
        const user =await User.findById(UserId)
        const accessToken=user.generateAccessToken()
        const refreshToken=user.generateRefreshToken()
        console.log("accessToken in accessToken ",accessToken);
        
        user.refreshtoken=refreshToken
       // console.log("UserId1",user.refreshtoken);
        const check=await user.save({validatebeforesave:false})
        //console.log(check);
        return {accessToken,refreshToken}
    }
    catch(error){
        console.log("UserId2",error);

        throw new ApiError(500, "Something went wrong while generating referesh and access token");
        
    }

}
const Details =AsyncHandler(async(req,res)=>{
    
    try{
        console.log("inside the details");
        const hi="hi";
        res.status(201).json({ message: "Comment added successfully", data: hi });
    }
    catch(error){
        console.log("UserId2",error);

        
        
    }

});


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
        username,email,password,fullName,summary,introVideo,skills ,experiences ,achievements, Awards,projects ,resume ,codingProfiles ,feed ,profilePicture,educations,socialMedia
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
    const experiencid=await Promise.all(experiences.map(async(experiance)=>{
        const exp=new Experience(experiance);        
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
        const singleProject=new Project(project)
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
    console.log("request",req.files);
    
    const profilephotolocalurloath=req.files?.profilePicture?.profilePicture[0].path;
    //console.log("profilephotolocalurloath",req.files,profilePicture);
    let profilephotourl='';
    if(profilephotolocalurloath){
         profilephotourl=await uploadoncloudinary(profilephotolocalurloath);

    }
    //console.log("profilephotourl",profilephotourl,profilephotourl.url);

    //console.log("resume ",req.files?.resume[0].path ," Introvideo ",req.files?.introVideo[0].path);
    // Introvideo
    let Introvideourl='';
    if(req.files!=undefined){
        console.log("saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",req.files);
        
        const Introvideolocalurloath=req.files?.introVideo?.introVideo[0]?.path;
        
        if(Introvideolocalurloath){
            Introvideourl=await uploadoncloudinary(Introvideolocalurloath);
    
        }
    } 
    
    //Resume
    const Resumelocalurloath=req.files?.resume?.resume[0]?.path;
    let Resumeurl='';
    if(Resumelocalurloath){
        Resumeurl=await uploadoncloudinary(Resumelocalurloath);

    }
    

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
        educations:educationid,
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
// 
const LoginUser=AsyncHandler(async(req,res)=>{
    //todos
    //import username password email
    //check in database that user is presnt or not
    //if yes -> then check password (access & refresh token -> to user),send secure cookies
    //if no then show error 
    //console.log("req ",req.body);
    const {email,username,password}=req.body;
    if(!email){
        throw new APiError(400,"email is not present");
    }
    const findUser=await User.findOne({ email });
    //console.log("findUser",findUser);
    if(!findUser){
        throw new APiError(400,"User  is not present");
    }
    const IsPasswordCorrect=await findUser.isPasswordCorrect(password)
    
    if(!IsPasswordCorrect){
        throw new APiError(401,"password  is not correct");
        //create access and refresh tokens 
        
    }    
    console.log("AccessToken ",findUser._id)
    const {accessToken,refreshToken} = await generateaccessandrefershtokens(findUser._id);

    console.log("AccessToken ",accessToken)
    const loggedInUser=await User.findById(findUser._id).select("-password -refreshtoken")
    const options={
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                findUser:loggedInUser,accessToken,refreshToken
            },
            "User Logged In suceesfully"
        )
    )
    
})
const logout=AsyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {   
            $set:{
                refreshtoken:undefined
            }
        },
        {
        new:true
        }
    ) 
    const options={
        httpOnly:true,
        secure:true
    }
    return res 
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200),{},"User logout")
})

const updateUserSummary = async (req, res) => {
    const { email } = req.params;
    const { summary } = req.body;
//   console.log("hi1 ");
    try {
      // Validate user input
      if (!summary) {
        return res.status(400).send({ message: 'Summary is required' });
      }
  
      // Find user by ID
      const user = await User.findOne(email);
      if (!user) {
        return res.status(404).send({ message: 'User not found ' });
      }

      // Update summary
      user.summary = summary;
      await user.save();
  
      res.status(200).send({
        message: 'Summary updated successfully',
        user
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  const updateRating = async (req, res) => {
    const { email } = req.params;
    const { anotheruserid, ratenumber } = req.body;
    const myid=req.user?._id;
    
    const hex = await UuidToString(myid);
    
    const userobjectid= new mongoose.Types.ObjectId(hex);
    
    
    const hexanother = await UuidToString(anotheruserid);

    const userobjectids= new mongoose.Types.ObjectId(hexanother);

    try {
        
        const newRating = await createDocument(Rating, {
            RateById:userobjectid,
            RateOnId:userobjectids,
            score:ratenumber
        });
        return res.status(201).json({ message: "Rating added successfully", ratings: newRating });
      
    } catch (error) {
        return res.status(500).send({ message: "Server error", error: error.message });
    }
  };
  const updateComment = async (req, res) => {
    const { email } = req.params;
    const { anotheruserid, commentmsg } = req.body;
    const myid=req.user?._id;
    //console.log("anotheruserid",anotheruserid ,myid);
    const hex = await UuidToString(myid);
    
    const userobjectid= new mongoose.Types.ObjectId(hex);
    
    
    const hexanother = await UuidToString(anotheruserid);

    const userobjectids= new mongoose.Types.ObjectId(hexanother);

    //console.log("anotheruserid",userobjectids ,userobjectid);
    try {
        
        const newComment = await createDocument(Comments, {
            commentbyId:userobjectid,
            commentonId:userobjectids,
            content:commentmsg
        });

        return res.status(201).json({ message: "Comment added successfully", comment: newComment });
      
    } catch (error) {
        return res.status(500).send({ message: "Server error", error: error.message });
    }
  };
const updateLike = async (req, res) => {
    const { email } = req.params;
    const { anotheruserid } = req.body;
    const myid=req.user?._id;
    //console.log("anotheruserid",anotheruserid ,myid);
    const hex = await UuidToString(myid);
    
    const userobjectid= new mongoose.Types.ObjectId(hex);
    
    
    const hexanother = await UuidToString(anotheruserid);

    const userobjectids= new mongoose.Types.ObjectId(hexanother);

    //console.log("anotheruserid",userobjectids ,userobjectid);
    try {
        
        const newLike = await createDocument(Likes, {
            likedBy:userobjectid,
            likedUserId:userobjectids
        });

        return res.status(201).json({ message: "Like added successfully", like: newLike });
      
    } catch (error) {
        return res.status(500).send({ message: "Server error", error: error.message });
    }
  };
  const unlikeUser = async (req, res) => {
    const {likeId} = req.body;
    try {
        // Check if the like exists
        const like = await Likes.findById(likeId);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }

        // Delete the like
        const result = await Likes.findByIdAndDelete(likeId);
        if(!result){
            return res.status(500).json({ message: 'Like not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Like deleted successfully' });
    } catch (error) {
        console.error('Error deleting Like:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

  const deleteUserSummary = async (req, res) => {
    const userId = req.user?._id
    
    try {
        
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).send({ message: 'User not found ' });
        }
        const clearsummary = ""
        // Update the skill
        const result = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    'summary': clearsummary
                }
            },
            {
                new: true,  // Return the updated document
                runValidators: true  // Validate the update against schema
            }
        );

        if (!result) {
            return res.status(404).json({ message: "Summary delete failed" });
        }

        // Send the final success response
        return res.status(200).json({ message: "Summary deleted successfully", result });

    } catch (error) {
        console.error('Error deleting summary:', error);
        // Ensure headers are not sent before this catch block runs
        if (!res.headersSent) {
            return res.status(500).json({ message: "Server error", error: error.message });
        }
    }
};

const addUserExperience = async (req, res) => {
    const { companyName, role, description, DurationFrom, DurationTo } = req.body;

    try {
        const newExperience = await createDocument(Experience, {
            companyName, 
            role, 
            description, 
            DurationFrom, 
            DurationTo
        });

        return res.status(201).json({ message: "Experience added successfully", experience: newExperience });
    } catch (error) {
        console.error('Error adding Experience:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

  const updateUserExperience = async (req, res) => {
    
    const { companyName,role,description,DurationFrom,DurationTo } = req.body;
    
    try {
      // Validate user input
      const experiencid=req.user?.experiences[0]?._id.toString();
     console.log("hfhfh hfhf",experiencid);
      const result=await Experience.findByIdAndUpdate(
        experiencid,{
            $set:{
                'companyName':companyName,
                'role':role,
                'description':description,
                'DurationFrom':DurationFrom,
                'DurationTo':DurationTo
            }
        }
      )
      if(!result){
        return res.status(404).json({ message: "Experience update failed" });
      }
      return res.status(200).json({ message: "experience update" });
     
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  const deleteUserExperience = async (req, res) => {
    const {experienceId} = req.body;
    try {
        // Check if the Experience exists
        const exp = await Experience.findById(experienceId);
        if (!exp) {
            return res.status(404).json({ message: 'Experience not found' });
        }

        // Delete the Experience
        const result = await Experience.findByIdAndDelete(experienceId);
        if(!result){
            return res.status(500).json({ message: 'Experience not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Experience deleted successfully' });
    } catch (error) {
        console.error('Error deleting Experience:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserAwards = async (req, res) => {
    const { awardName, issuingOrganization, issueDate, description } = req.body;

    try {
        const newAward = await createDocument(awards, {
            awardName, 
            issuingOrganization, 
            issueDate, 
            description
        });

        return res.status(201).json({ message: "Award added successfully", award: newAward });
    } catch (error) {
        console.error('Error adding Award:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

  const updateUserAwards = async (req, res) => {
    
    const { awardName,issuingOrganization,issueDate,description,awardidfromuser } = req.body;
    try {
        let editawardidindex;
        let allawards=req.user?.awards;
        for(let i=0;i<allawards.length;i++)
        {
            const currawardid=req.user?.awards[0]?._id.toString();
            if(currawardid==awardidfromuser){
                editawardidindex=i;
                break;
            }
        }
        console.log("editawardidindex",editawardidindex);
        const awardid=req.user?.awards[editawardidindex]?._id.toString();
        const result=await awards.findByIdAndUpdate(
            awardid,{
                $set:{
                    awardName:awardName,
                    issuingOrganization:issuingOrganization,
                    issueDate:issueDate,
                    description:description
                }
            }
        )
        console.log("result   ",result);
        if(!result){
            return res.status(400).json({ message: "awards not  update" });
        }
        return res.status(200).json({ message: "awards update" });
     
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  const deleteUserAwards = async (req, res) => {
    const {awardId} = req.body;
    try {
        // Check if the award exists
        const award = await awards.findById(awardId);
        if (!award) {
            return res.status(404).json({ message: 'Award not found' });
        }

        // Delete the award
        const result = await awards.findByIdAndDelete(awardId);
        if(!result){
            return res.status(500).json({ message: 'Award not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Award deleted successfully' });
    } catch (error) {
        console.error('Error deleting Award:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserEducation = async (req, res) => {
    const { instituteName, education, course, specialization, courseDuration, gradingSystem} = req.body;

    try {
        const newEducation = await createDocument(Education, {
            instituteName, 
            education, 
            course, 
            specialization, 
            courseDuration, 
            gradingSystem
        });

        return res.status(201).json({ message: "Education added successfully", education: newEducation });
    } catch (error) {
        console.error('Error adding Education:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

  const updateUserEducation = async (req, res) => {
    const { educationId, instituteName, education, course, specialization, courseDuration, gradingSystem } = req.body;
    //console.log("req",req.user);
    try {
        let editEducationIndex;
        let allEducations = req.user?.educations; // Assuming user's educations are stored in req.user.educations
        
        for (let i = 0; i < allEducations.length; i++) {
            const currEducationId = req.user?.educations[i]?._id.toString();
            if (currEducationId == educationId) {
                editEducationIndex = i;
                break;
            }
        }
        
        if (editEducationIndex === undefined) {
            return res.status(400).json({ message: "Education not found" });
        }
        
        const educationToUpdateId = req.user?.educations[editEducationIndex]?._id.toString();
        const result = await Education.findByIdAndUpdate(
            educationToUpdateId,
            {
                $set: {
                    instituteName: instituteName,
                    education: education,
                    course: course,
                    specialization: specialization,
                    courseDuration: courseDuration,
                    gradingSystem: gradingSystem
                }
            },
            { new: true } // Return the updated document
        );
        
        console.log("result in education  ", result);
        if (!result) {
            return res.status(400).json({ message: "Education not updated" });
        }
        return res.status(200).json({ message: "Education updated", updatedEducation: result });
     
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
  };

  const deleteUserEducation = async (req, res) => {
    const {educationId} = req.body;
    try {
        // Check if the Education exists
        const education = await Education.findById(educationId);
        if (!education) {
            return res.status(404).json({ message: 'Education not found' });
        }

        // Delete the Education
        const result = await Education.findByIdAndDelete(educationId);
        if(!result){
            return res.status(500).json({ message: 'Education not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Education deleted successfully' });
    } catch (error) {
        console.error('Error deleting Education:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserAchievements = async (req, res) => {
    const { description, title, date_awarded, category, issuer, certificate_url, level, public_visibility } = req.body;

    try {
        const newAchievement = await createDocument(Achivements, {
            description, 
            title, 
            date_awarded, 
            category, 
            issuer, 
            certificate_url, 
            level, 
            public_visibility
        });

        return res.status(201).json({ message: "Achievements added successfully", achievement: newAchievement });
    } catch (error) {
        console.error('Error adding Achievement:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

  const updateUserAchievements = async (req, res) => {
    const { achievementId, title, description, date_awarded, category, issuer, certificate_url, level, tags, public_visibility } = req.body;
    //console.log(req.user);
    try {
        let editAchievementIndex;
        let allAchievements = req.user?.achievements; // Assuming user's achievements are stored in req.user.achievements
        
        for (let i = 0; i < allAchievements.length; i++) {
            const currAchievementId = req.user?.achievements[i]?._id.toString();
            if (currAchievementId == achievementId) {
                editAchievementIndex = i;
                break;
            }
        }
        //console.log("result  " ,editAchievementIndex);
        if (editAchievementIndex === undefined) {
            return res.status(400).json({ message: "Achievement not found" });
        }
        
        const achievementToUpdateId = req.user?.achievements[editAchievementIndex]?._id.toString();
        const result = await Achivements.findByIdAndUpdate(
            achievementToUpdateId,
            {
                $set: {
                    title: title,
                    description: description,
                    date_awarded: date_awarded,
                    category: category,
                    issuer: issuer,
                    certificate_url: certificate_url,
                    level: level,
                    tags: tags,
                    public_visibility: public_visibility
                }
            },
            { new: true } // Return the updated document
        );
        
        console.log("result in achievements  ", result);
        if (!result) {
            return res.status(400).json({ message: "Achievement not updated" });
        }
        return res.status(200).json({ message: "Achievement updated", updatedAchievement: result });
     
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteUserAchievements = async (req, res) => {
    const {achievementId} = req.body;
    try {
        // Check if the achievement exists
        const achievement = await Achivements.findById(achievementId);
        if (!achievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }

        // Delete the achievement
        const result = await Achivements.findByIdAndDelete(achievementId);
        if(!result){
            return res.status(500).json({ message: 'Aachievement not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Achievement deleted successfully' });
    } catch (error) {
        console.error('Error deleting Achievement:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserSocialMedia = async (req, res) => {
    const { profileName, profileUrl } = req.body;

    try {
        const newSocialMedia = await createDocument(SocialMedia, {
            profileName, 
            profileUrl
        });

        return res.status(201).json({ message: "SocialMedia added successfully", socialmedia: newSocialMedia });
    } catch (error) {
        console.error('Error adding SocialMedia:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

const updateUserSocialMedia = async (req, res) => {
    const { socialmediaProfileId, profileName, profileUrl } = req.body;
    try {
        let editSocialMediaIndex;
        let allSocialMediaProfiles = req.user?.socialMediaProfiles; // Assuming user's social media profiles are stored in req.user.socialMediaProfiles
        
        for (let i = 0; i < allSocialMediaProfiles.length; i++) {
            const currSocialMediaProfileId = req.user?.socialMediaProfiles[i]?._id.toString();
            if (currSocialMediaProfileId == socialmediaProfileId) {
                editSocialMediaIndex = i;
                break;
            }
        }

        if (editSocialMediaIndex === undefined) {
            return res.status(400).json({ message: "Social Media Profile not found" });
        }
        
        const socialMediaProfileToUpdateId = req.user?.socialMediaProfiles[editSocialMediaIndex]?._id.toString();
        const result = await SocialMedia.findByIdAndUpdate(
            socialMediaProfileToUpdateId,
            {
                $set: {
                    profileName: profileName,
                    profileUrl: profileUrl
                }
            },
            { new: true } // Return the updated document
        );
        
        console.log("result in social media profiles  ", result);
        if (!result) {
            return res.status(400).json({ message: "Social Media Profile not updated" });
        }
        return res.status(200).json({ message: "Social Media Profile updated", updatedSocialMediaProfile: result });
     
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteUserSocialMedia = async (req, res) => {
    const {socialmediaId} = req.body;
    try {
        // Check if the socialmedia exists
        const socialmedia = await SocialMedia.findById(socialmediaId);
        if (!socialmedia) {
            return res.status(404).json({ message: 'Social Media not found' });
        }

        // Delete the socialmedia
        const result = await SocialMedia.findByIdAndDelete(socialmediaId);
        if(!result){
            return res.status(500).json({ message: 'Social Media not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Social Media deleted successfully' });
    } catch (error) {
        console.error('Error deleting socialmedia:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserProject = async (req, res) => {
    const { title, description, url, durationFrom, durationTo } = req.body;

    try {
        const newProject = await createDocument(Project, {
            title, 
            description, 
            url, 
            durationFrom, 
            durationTo
        });

        return res.status(201).json({ message: "Project added successfully", project: newProject });
    } catch (error) {
        console.error('Error adding Project:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

const updateUserProjects = async (req, res) => {
    const { projectId, title, description, url, durationFrom, durationTo } = req.body;
    try {
        let editProjectIndex;
        let allProjects = req.user?.projects; // Assuming user's projects are stored in req.user.projects
        
        for (let i = 0; i < allProjects.length; i++) {
            const currProjectId = req.user?.projects[i]?._id.toString();
            console.log(currProjectId ," ",projectId);
            if (currProjectId == projectId) {
                editProjectIndex = i;
                break;
            }
        }
        console.log("result",editProjectIndex);
        if (editProjectIndex === undefined) {
            return res.status(400).json({ message: "Project not found" });
        }
        
        const projectToUpdateId = req.user?.projects[editProjectIndex]?._id.toString();
        const result = await Project.findByIdAndUpdate(
            projectToUpdateId,
            {
                $set: {
                    title: title,
                    description: description,
                    url: url,
                    durationFrom: durationFrom,
                    durationTo: durationTo
                }
            },
            { new: true } // Return the updated document
        );
        
        console.log("result in projects  ", result);
        if (!result) {
            return res.status(400).json({ message: "Project not updated" });
        }
        return res.status(200).json({ message: "Project updated", updatedProject: result });
     
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteUserProjects = async (req, res) => {
    const {projectId} = req.body;
    try {
        // Check if the project exists
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Delete the project
        const result = await Project.findByIdAndDelete(projectId);
        if(!result){
            return res.status(500).json({ message: 'Project not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserCodingProfiles = async (req, res) => {
    const { profileName, profileUrl } = req.body;

    try {
        const newCodingProfile = await createDocument(CodingProfiles, {
            profileName, 
            profileUrl
        });

        return res.status(201).json({ message: "Coding Profile added successfully", codingprofile: newCodingProfile });
    } catch (error) {
        console.error('Error adding Coding Profile:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

const updateUserCodingprofiles = async (req, res) => {
    const { codingProfileId, profileName, profileUrl } = req.body;
    try {
        let editCodingProfileIndex;
        let allCodingProfiles = req.user?.codingProfiles; // Assuming user's coding profiles are stored in req.user.codingProfiles

        for (let i = 0; i < allCodingProfiles.length; i++) {
            const currCodingProfileId = req.user?.codingProfiles[i]?._id.toString();
            if (currCodingProfileId == codingProfileId) {
                editCodingProfileIndex = i;
                break;
            }
        }

        if (editCodingProfileIndex === undefined) {
            return res.status(400).json({ message: "Coding Profile not found" });
        }

        const codingProfileToUpdateId = req.user?.codingProfiles[editCodingProfileIndex]?._id.toString();
        const result = await CodingProfiles.findByIdAndUpdate(
            codingProfileToUpdateId,
            {
                $set: {
                    profileName: profileName,
                    profileUrl: profileUrl
                }
            },
            { new: true } // Return the updated document
        );

        console.log("result in coding profiles  ", result);
        if (!result) {
            return res.status(400).json({ message: "Coding Profile not updated" });
        }
        return res.status(200).json({ message: "Coding Profile updated", updatedCodingProfile: result });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteUserCodingprofiles = async (req, res) => {
    const { codingprofileId } = req.body; // Assuming the skill ID is provided in the request body

    try {
        // Check if the skill exists
        const codingprofile = await CodingProfiles.findById(codingprofileId);
        if (!codingprofile) {
            return res.status(404).json({ message: 'CodingProfile not found' });
        }

        // Delete the skill
        const result = await CodingProfiles.findByIdAndDelete(codingprofileId);
        if(!result){
            return res.status(500).json({ message: 'CodingProfile not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'CodingProfile deleted successfully' });
    } catch (error) {
        console.error('Error deleting CodingProfile:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addUserSkills = async (req, res) => {
    const { SkillName, proficiency } = req.body;

    try {
        const newSkill = await createDocument(Skill, {
            SkillName,
            proficiency
        });

        return res.status(201).json({ message: "Skill added successfully", skill: newSkill });
    } catch (error) {
        console.error('Error adding skill:', error);
        return res.status(500).send({ message: "Server error", error: error.message });
    }
};

  const updateUserSkills = async (req, res) => {
    const { skillName, proficiency, skillId } = req.body;
    

    try {
        let editSkillIndex;
        let allSkills = req.user?.skills; 

        for (let i = 0; i < allSkills.length; i++) {
            const currSkillId = req.user?.skills[i]?._id.toString();
            if (currSkillId == skillId) {
                editSkillIndex = i;
                break;
            }
        }

        if (editSkillIndex === undefined) {
            return res.status(400).json({ message: "Skill not found" });
        }

        const SkillToUpdateId = req.user?.skills[editSkillIndex]?._id.toString();

        // Update the skill
        const result = await Skill.findByIdAndUpdate(
            SkillToUpdateId,
            {
                $set: {
                    'SkillName': skillName,
                    'proficiency': proficiency
                }
            },
            {
                new: true,  // Return the updated document
                runValidators: true  // Validate the update against schema
            }
        );

        if (!result) {
            return res.status(404).json({ message: "Skill update failed" });
        }

        // Send the final success response
        return res.status(200).json({ message: "Skill updated successfully", result });

    } catch (error) {
        console.error('Error updating skill:', error);
        // Ensure headers are not sent before this catch block runs
        if (!res.headersSent) {
            return res.status(500).json({ message: "Server error", error: error.message });
        }
    }
};

const deleteUserSkills = async (req, res) => {
    const { skillId } = req.body; // Assuming the skill ID is provided in the request body

    try {
        // Check if the skill exists
        const skill = await Skill.findById(skillId);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        // Delete the skill
        const result = await Skill.findByIdAndDelete(skillId);
        if(!result){
            return res.status(500).json({ message: 'Skill not deleted' });
        }
        // Send success response
        return res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        console.error('Error deleting skill:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export {RegisteredUser,logout,LoginUser,addUserCodingProfiles,updateUserSummary,updateRating,updateComment,updateUserExperience,unlikeUser,addUserSkills,addUserAchievements,updateUserSkills,addUserAwards,updateUserAwards,deleteUserAchievements,addUserSocialMedia,deleteUserProjects,deleteUserAwards,addUserEducation,updateUserEducation,updateUserAchievements,updateUserSocialMedia,deleteUserSocialMedia,addUserProject,updateUserProjects,deleteUserCodingprofiles,updateUserCodingprofiles,deleteUserSkills,deleteUserSummary,Details,deleteUserEducation,addUserExperience,deleteUserExperience,updateLike}