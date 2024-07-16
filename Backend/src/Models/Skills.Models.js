import { Schema } from "mongoose";
import mongoose from "mongoose";
const SkillsSchema=mongoose.Schema({
    SkillName:{
        type:String
    },
    proficiency:{
        type:String
    },
    UserId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
export const Skill=mongoose.model("Skill",SkillsSchema)