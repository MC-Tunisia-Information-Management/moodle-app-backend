import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Student', 'Instructor'],
    required: true,
    default: 'Student',
  },
  profilePicture: {
    type: Buffer,
    required: false,
    default: '', // Can be a URL or file path
  },
}, { 
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

// Compile model from schema
const User = mongoose.model('User', userSchema);

export default User;
