import mongoose ,{Schema} from "mongoose";
const TagsSchema = mongoose.Schema({
    tagId: {
        type: String
    },

    name: {
        type: String
    },
    created_at: {
        type: Date
    },
    popularity: {
        type: Number
    },
    userId: {
        type: String
    }
})
export const Tags = mongoose.model("Tags", TagsSchema)