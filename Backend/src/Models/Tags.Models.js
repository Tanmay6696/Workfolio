import mongoose ,{Schema} from "mongoose";
const TagsSchema = mongoose.Schema({
    tagId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    popularity: {
        type: Number,
        default:0
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref:"Users",
        required: true
    }
})
export const Tags = mongoose.model("Tags", TagsSchema)