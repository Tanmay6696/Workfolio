import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  
  RateOnId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  RateById: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Assuming profileId refers to another user's profile
    required: true 
  },
  score: {
    type: Number,
    required: true,
    min:0,
    max:10
  }
},{
  timestamps:true
});

export const Rating = mongoose.model("Rating", ratingSchema);
