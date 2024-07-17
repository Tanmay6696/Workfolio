import mongoose ,{Schema} from "mongoose";
const AchivementsSchema = mongoose.Schema({
    achievementId: {
        type: String
    },
    userId: {
        type: String,
        ref:"User"
    },
    description: {
        type: String
    },
    title: {
        type: String
    },
    date_awarded: {
        type: Date
    },
    category: {
        type: String
    },
    issuer: {
        type: String
    },
    certificate_url: {
        type: String
    },
    level: {
        type: String
    },    
    public_visibility: {
        type: Boolean
    },
})
export const Achivements = mongoose.model("Achivements", AchivementsSchema)