import mongoose from "mongoose";

const socialMediaSchema = new mongoose.Schema({
  socialmediaProfileId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true, 
    primaryKey: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  profileName: {
    type: String,
    required: true
  },
  profileUrl: {
    type: String,
    required: true
  }
});

export const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema);
