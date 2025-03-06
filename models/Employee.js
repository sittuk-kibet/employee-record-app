import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Staff'], default: 'Staff' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);