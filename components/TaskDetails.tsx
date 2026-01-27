import React from 'react';
import { useTaskData } from '../hooks/useTaskData';

interface TaskDetailsProps {
  taskId: number;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ taskId }) => {
  const { task, loading, error } = useTaskData(taskId);

  if (loading) return <div>Loading task details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!task) return <div>Task not found</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p className="text-gray-600 mb-6">{task.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <span className="font-medium">Amount:</span> {task.amount / 1000000} STX
        </div>
        <div>
          <span className="font-medium">Status:</span> {task.status}
        </div>
        <div>
          <span className="font-medium">Deadline:</span> Block {task.deadline}
        </div>
        <div>
          <span className="font-medium">Priority:</span> {['Low', 'Normal', 'High'][task.priority]}
        </div>
      </div>
      
      {task.submission && (
        <div className="mb-4">
          <span className="font-medium">Submission:</span>
          <p className="text-gray-600 mt-1">{task.submission}</p>
        </div>
      )}
    </div>
  );
};
