import mongoose from "mongoose";

const codingProfilesSchema = new mongoose.Schema({
  codingProfileId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true, 
    primaryKey: true 
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'    
  },
  profileName: {
    type: String
  },
  profileUrl: {
    type: String
  }
});

export const CodingProfiles = mongoose.model("CodingProfiles", codingProfilesSchema);
