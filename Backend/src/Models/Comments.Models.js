import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  commentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    auto: true, 
    primaryKey: true 
  },
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
  content: {
    type: String,
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

export const Comments = mongoose.model("Comments", commentsSchema);
