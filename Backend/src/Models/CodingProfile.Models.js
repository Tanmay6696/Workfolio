import mongoose from "mongoose";

const codingProfilesSchema = new mongoose.Schema({
  codingProfileId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true, 
    primaryKey: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
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

export const CodingProfiles = mongoose.model("CodingProfiles", codingProfilesSchema);
