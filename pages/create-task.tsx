import React from 'react';
import { Layout } from '../components/Layout';
import { TaskForm } from '../components/TaskForm';
import { useContractCall } from '../hooks/useContractCall';
import { createTaskTransaction } from '../lib/transactions/create-task';

export default function CreateTask() {
  const { executeTransaction, loading } = useContractCall();

  const handleCreateTask = async (data: any) => {
    try {
      const transaction = createTaskTransaction(
        data.title,
        data.description,
        data.amount,
        data.deadline,
        data.priority,
        data.category
      );
      await executeTransaction(transaction);
      alert('Task created successfully!');
    } catch (error) {
      alert('Failed to create task');
    }
  };

  return (
    <Layout>
      <div className="px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Create New Task</h1>
        <TaskForm onSubmit={handleCreateTask} loading={loading} />
      </div>
    </Layout>
  );
}
