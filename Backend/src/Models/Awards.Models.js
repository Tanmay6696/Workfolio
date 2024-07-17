import mongoose ,{Schema} from "mongoose";
const awardsSchema = mongoose.Schema({
    awardId: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref:"Users"
         
    },
    awardName: {
        type: String,
        required: true 
    },
    issuingOrganization: {
        type: String,
        required: true 
    },
    issueDate: {
        type: Date,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
})
export const awards = mongoose.model("awards", awardsSchema)