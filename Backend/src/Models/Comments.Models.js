import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  commentonId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  commentbyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Assuming profileId refers to another user's profile
    required: true 
  },
  content: {
    type: String,
    required: true
  }
},{
  timestamps:true
});

export const Comments = mongoose.model("Comments", commentsSchema);
