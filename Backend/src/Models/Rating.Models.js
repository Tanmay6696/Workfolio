import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  profileId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Assuming profileId refers to another user's profile
    required: true 
  },
  score: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const Rating = mongoose.model("Rating", ratingSchema);
