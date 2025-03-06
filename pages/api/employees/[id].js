import connectDB from '../../../lib/db';
import Employee from '../../../models/Employee';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await connectDB();
  const session = await getSession({ req });
  const { id } = req.query;

  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  switch (req.method) {
    case 'PUT':
      try {
        const employee = await Employee.findOneAndUpdate(
          { _id: id, user: session.user.id },
          req.body,
          { new: true }
        );
        if (!employee) return res.status(404).json({ error: 'Employee not found' });
        res.status(200).json(employee);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const employee = await Employee.findOneAndDelete({
          _id: id,
          user: session.user.id
        });
        if (!employee) return res.status(404).json({ error: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}