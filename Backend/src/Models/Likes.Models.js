<<<<<<< HEAD
import mongoose from mongoose;

const likesSchema = new mongoose.Schema({
    likedBy:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    liked:[
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

export const Likes = mongoose.model("Likes",likesSchema)
=======
import mongoose from "mongoose";
const LikeSchema=new Schema({
    
});
export const Like=mongoose.model("Like",LikeSchema);
>>>>>>> a43f322a15b8397bd97db6af27980f5af296a011
