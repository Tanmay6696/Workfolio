import mongoose from "mongoose";
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