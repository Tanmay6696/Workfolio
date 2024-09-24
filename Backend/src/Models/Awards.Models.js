import mongoose ,{Schema} from "mongoose";
const awardsSchema = mongoose.Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref:"Users"
         
    },
    awardName: {
        type: String,
    },
    issuingOrganization: {
        type: String,
    },
    issueDate: {
        type: Date,
    },
    description: {
        type: String,
         
    },
})
export const awards = mongoose.model("awards", awardsSchema)