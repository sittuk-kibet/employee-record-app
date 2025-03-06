import connectDB from '../../../lib/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = await User.create({
      email,
      password,
      role: 'Staff'
    });

    return res.status(201).json({ id: user._id });
    
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(400).json({
      error: error.message.includes('duplicate') 
        ? 'Email already exists' 
        : 'Registration failed'
    });
  }
}