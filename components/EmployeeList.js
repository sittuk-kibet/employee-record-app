import Link from 'next/link';
import { useState } from 'react';

export default function EmployeeList({ employees }) {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to delete');
      window.location.reload();
    } catch (error) {
      console.error(error);
      setDeletingId(null);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border mt-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {employee.firstName} {employee.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {employee.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <Link
                  href={`/employees/edit/${employee._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(employee._id)}
                  className="text-red-600 hover:text-red-900 disabled:opacity-50"
                  disabled={deletingId === employee._id}
                >
                  {deletingId === employee._id ? 'Deleting...' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}