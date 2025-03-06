import { useForm } from 'react-hook-form';

export default function EmployeeForm({ onSubmit, initialData }) {
  const { register, handleSubmit } = useForm({ defaultValues: initialData });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register('firstName', { required: true })}
          className="p-2 border rounded"
          placeholder="First Name"
        />
        <input
          {...register('lastName', { required: true })}
          className="p-2 border rounded"
          placeholder="Last Name"
        />
      </div>
      {/* Add other fields */}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        {initialData ? 'Update' : 'Create'}
      </button>
    </form>
  );
}