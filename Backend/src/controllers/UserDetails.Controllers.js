
import {User} from '../Models/User.Models.js';
import {AsyncHandler} from '../utils/AsyncHandler.js'
import {Likes} from '../Models/Likes.Models.js'
import {Comments} from '../Models/Comments.Models.js';
import { Rating } from '../Models/Rating.Models.js';
import mongoose from 'mongoose';
import { UuidToString } from '../utils/UuidToString.js';

const Showuserdeatils=AsyncHandler(async(req,res)=>{
    var userid=req.user?._id;  
    const hexString = await UuidToString(userid);
    
    
    
    const userobjectid= new mongoose.Types.ObjectId(hexString);
    

    try{
        const user = await User.findById(userid);
        if (!user) return res.status(404).send('User not found');
        
        const likes=await Likes.find({likedUserId:userobjectid}).select('likedBy');        
        const comments=await Comments.find({commentonId:userobjectid});
        const ratings=await Rating.find({RateOnId:userobjectid});
console.log("likes",likes);
        const Totallikes=likes.length;
        const TotalComments=comments.length;
        const TotalratingCount=ratings.length;  

        const totalsumofrating=0;
        for(let i=0;i<TotalratingCount;i++){
            totalsumofrating+=ratings[i];
        }
        const averagerating = TotalratingCount > 0 ? (totalsumofrating / TotalratingCount) : 0;

        const userData = {
            username: user.username,
            fullName: user.fullName,
            email: user.email,
            summary:user.summary,
            profilePicture: user.profilePicture,
            introVideo: user.introVideo,
            skills: user.skills,
            educations: user.educations ,
            experiences: user.experiences,
            achievements: user.achievements,
            projects: user.projects,
            socialMediaProfiles: user.socialMediaProfiles,
            codingProfiles: user.codingProfiles,
            awards: user.awards,
            likes,
            comments,
            ratings,Totallikes,TotalComments,TotalratingCount,averagerating:averagerating,ratings
            // additionalInfo: additionalData.data, // Include additional data if fetched from an external source
            // Include other fields or computed values as needed
        };
        //console.log("userData  ",userData);

        res.json(userData);
        
    }
    catch(error){
        throw error;
    }
})
const isCurrentUserLikebyme=AsyncHandler(async(req,res)=>{
    var anotheruserid=req.body();
    
    var userid=req.user?._id;  
    const buffer = Buffer.from(userid.replace(/-/g, ''), 'hex');
    
    // Check that the buffer is 16 bytes
    if (buffer.length !== 16) {
        throw new Error('Invalid UUID length');
    }
    
    // Create a new ObjectId from the buffer and convert to hex string
    const hexString = buffer.toString('hex').slice(0, 24);
    
    
    
    const userobjectid= new mongoose.Types.ObjectId(hexString);
    

    try{
        
        
    }
    catch(error){
        throw error;
    }
})
export {Showuserdeatils}