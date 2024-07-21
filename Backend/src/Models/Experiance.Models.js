import mongoose ,{Schema} from "mongoose";
const  ExperianceSchema=new Schema(
    {
        companyName:{
            type:String,
            required: true // Consider making this required
        },
        role:{
            type:String,
            required: true // Consider making this required
        },
        description:{
            type:String,
            required: true // Consider making this required
        },
        DurationFrom:{
            type:Date,
            required: true // Consider making this required
        },
        DurationTo:{
            type:Date,
            required: true // Consider making this required
        },
        UserId:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required: false // Consider making this required
        }
        

    }
);
export const Experience=mongoose.model("Experience",ExperianceSchema);