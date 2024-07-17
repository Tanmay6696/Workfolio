import mongoose ,{Schema} from "mongoose";
const educationSchema = mongoose.Schema({
    educationId: {
        type: String,
        required: true // Consider making this required
    },
    UserId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true // Consider making this required
    },
    instituteName: {
        type: String,
        required: true // Consider making this required
    },
    education: {
        type: String,
        required: true // Consider making this required
    },
    course: {
        type: String,
        required: true // Consider making this required
    },
    specialization: {
        type: String,
        required: true // Consider making this required
    },
    courseDuration: {
        type: String,
        required: true // Consider making this required
    },
    gradingSystem: {
        type: String,
        required: true // Consider making this required
    }
})
export const Education = mongoose.model("Education", educationSchema)