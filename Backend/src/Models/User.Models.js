import mongoose, { Schema } from "mongoose";
<<<<<<< HEAD
import { LikedBy } from "./LikedBy.Models";

=======
import { v4 as uuidv4 } from "uuid";
>>>>>>> a43f322a15b8397bd97db6af27980f5af296a011
// Define the schema
const UserSchema = new Schema(
    {
        _id: {
            type: String,
            default: uuidv4 ,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        summary: {
            type: String,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        profilePicture: {
            type: String, // cloudinary URL
            // required: true,
        },
        introVideo: {
            type: String, // cloudinary URL
            required: true,
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: "Like"
            }
        ],
        likedBy: [
            {
                type: Schema.Types.ObjectId,
                ref: "LikedBy"
            }
        ],
        likedTo: [
            {
                type: Schema.Types.ObjectId,
                ref: "LikedTo"
            }
        ],
        skills: [
            {
                type: Schema.Types.ObjectId,
                ref: "Skill"
            }
        ],
        experiences: [
            {
                type: Schema.Types.ObjectId,
                ref: "Experiance"
            }
        ],
        achievements: [
            {
                type: Schema.Types.ObjectId,
                ref: "Achievement"
            }
        ],
        feeds: [
            {
                type: Schema.Types.ObjectId,
                ref: "Feed"
            }
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ],
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Project"
            }
        ],
        socialMediaProfiles: [
            {
                type: Schema.Types.ObjectId,
                ref: "SocialMediaProfile"
            }
        ],
        ratings: [
            {
                type: Schema.Types.ObjectId,
                ref: "Rating"
            }
        ],
        likesCount: {
            type: Number
        },
        ratingCount: {
            type: Number
        },
        averageRating: {
            type: Number
        },
        resume: {
            type: String // cloudinary URL
        },
        codingProfiles: [
            {
                type: Schema.Types.ObjectId,
                ref: "CodingProfile"
            }
        ],
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

// Export the model
export const User = mongoose.model("User", UserSchema);
