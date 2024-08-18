import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({

  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'    
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  durationFrom: {
    type: Date,
    required: true
  },
  durationTo: {
    type: Date,
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

export const Project = mongoose.model("Project", projectsSchema);
