import mongoose from mongoose;

const likedToSchema = new mongoose.Schema({
    likedTo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    likeId:{
        type: String,
        required: true
    }
},{timestamps: true})

export const LikedTo = mongoose.model("LikedTo",likedToSchema)