import mongoose, { Schema } from "mongoose";
// HEAD
import bcrypt from "bcrypt";// for password
import jwt from 'jsonwebtoken';


import { v4 as uuidv4 } from "uuid";
// Define the schema
const UserSchema = new Schema(
    {
        _id: {
            type: String,
            default: uuidv4 ,
            required: true
        },
        username: {//no updates in future
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {//can update
            type: String,
            required: true,
            trim: true,
            index: true
        },
        email: {//no updates in future
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        summary: {//can update
            type: String,
        },
        password: {//can update
            type: String,
            required: [true, "Password is required"]
        },
        profilePicture: {//can update
            type: String, // cloudinary URL
            // required: true,
        },
        introVideo: {//can update
            type: String, // cloudinary URL
            required: true,
        },
        likes: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Likes"
            }
        ],
        skills: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Skill"
            }
        ],
        educations: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Education"
            }
        ],
        experiences: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Experience"
            }
        ],
        achievements: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Achivements"
            }
        ],
        feeds: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Feed"
            }
        ],
        comments: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Comments"
            }
        ],
        projects: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Project"
            }
        ],
        socialMediaProfiles: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "SocialMedia"
            }
        ],
        ratings: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "Rating"
            }
        ],
        likesCount: {//can update
            type: Number
        },
        ratingCount: {//can update
            type: Number
        },
        averageRating: {//can update
            type: Number
        },
        resume: {//can update
            type: String // cloudinary URL
        },
        codingProfiles: [//can update
            {
                type: Schema.Types.ObjectId,
                ref: "CodingProfiles"
            }
        ],
        awards:[//can update
            {
                type: Schema.Types.ObjectId,
                ref: "awards"
            }
        ],
        refreshtoken: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

UserSchema.methods.isPasswordCorrect=async function(password){
    console.log("password",password,this.password);
    const check=await password===this.password;
    console.log("check  ",check);
    return check
};
UserSchema.methods.generateAccessToken=function() {
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRAY
        }
    )
}
UserSchema.methods.generateRefreshToken=function() {
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKRN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKRN_EXPIRAY
        }
    )
}

// Export the model
export const User = mongoose.model("User", UserSchema);
