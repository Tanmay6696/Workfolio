import mongoose ,{Schema} from "mongoose";
const  ExperianceSchema=new Schema(
    {
        companyName:{
            type:String
        },
        role:{
            type:String
        },
        description:{
            type:String
        },
        DurationFrom:{
            type:Date
        },
        DurationTo:{
            type:Date
        }
        /*companyName:"cognizant",
        role:"Programmer anlayst"
        description:"descriptiondescriptiondescription"
        DurationFrom:10/6/2022
        DurationTo:10/6/2024

        */

    }
);
export const Experiance=mongoose.model("Experiance",ExperianceSchema);