import { getSession } from 'next-auth/react';
import connectDB from '../lib/db';
import Employee from '../models/Employee';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';

export default function HomePage({ employees }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Records</h1>
      <EmployeeForm />
      <EmployeeList employees={employees} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    await connectDB();
    const employees = await Employee.find({ user: session.user.id }).lean();
    
    return {
      props: {
        employees: JSON.parse(JSON.stringify(employees)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        employees: [],
      },
    };
  }
}