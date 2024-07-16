import mongoose from mongoose;

const likedBySchema = new mongoose.Schema({
    likedBy:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    likeId:{
        type: String,
        required: true
    }
},{timestamps: true})

export const LikedBy = mongoose.model("LikedBy",likedBySchema)