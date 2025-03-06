import connectDB from '../../../lib/db';
import Employee from '../../../models/Employee';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await connectDB();
  const session = await getSession({ req });

  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  switch (req.method) {
    case 'GET':
      const employees = await Employee.find({ user: session.user.id });
      res.status(200).json(employees);
      break;
    case 'POST':
      try {
        const newEmployee = await Employee.create({ 
          ...req.body,
          user: session.user.id
        });
        res.status(201).json(newEmployee);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}