import mongoose ,{Schema} from "mongoose";
const educationSchema = mongoose.Schema({
    educationId: {
        type: String
    },

    userId: {
        type: String
    },
    instituteName: {
        type: String
    },
    education: {
        type: String
    },
    course: {
        type: String
    },
    specialization: {
        type: String
    },
    courseDuration: {
        type: String
    },
    gradingSystem: {
        type: String
    }
})
export const Education = mongoose.model("Education", educationSchema)