import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const likesSchema = new mongoose.Schema({
    likedBy:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    likedUserId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ]
},{timestamps: true})

export const Likes = mongoose.model("Likes",likesSchema)