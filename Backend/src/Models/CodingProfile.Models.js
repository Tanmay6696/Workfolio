import mongoose from "mongoose";

const codingProfilesSchema = new mongoose.Schema({

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
