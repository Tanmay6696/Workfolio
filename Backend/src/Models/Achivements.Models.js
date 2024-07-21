import mongoose ,{Schema} from "mongoose";
const AchivementsSchema = mongoose.Schema({
    UserId:{
        type:Schema.Types.ObjectId,
        ref:"User"
        
    },
    description: {
        type: String,
        required: true // Consider making this required
    },
    title: {
        type: String,
        required: true // Consider making this required
    },
    date_awarded: {
        type: Date,
        required: true // Consider making this required
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
        type: Boolean,
        default:true

    },
})
export const Achivements = mongoose.model("Achivements", AchivementsSchema)