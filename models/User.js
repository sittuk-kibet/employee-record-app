import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: { 
    type: String, 
    enum: ['Admin', 'Staff'], 
    default: 'Staff' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Proper model definition pattern for Next.js
let User;
if (mongoose.models.User) {
  User = mongoose.models.User;
} else {
  User = mongoose.model('User', UserSchema);
}

export default User;