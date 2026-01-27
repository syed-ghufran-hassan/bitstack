import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  amount: number;
  status: string;
  deadline: number;
  priority: number;
  category: number;
}

interface TaskCardProps {
  task: Task;
  onAccept?: (id: number) => void;
  onSubmit?: (id: number) => void;
  onApprove?: (id: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onAccept, onSubmit, onApprove }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'disputed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
      </div>
      <p className="text-gray-600 mb-3">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-purple-600">{task.amount / 1000000} STX</span>
        <div className="space-x-2">
          {task.status === 'open' && onAccept && (
            <button onClick={() => onAccept(task.id)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Accept
            </button>
          )}
          {task.status === 'in-progress' && onSubmit && (
            <button onClick={() => onSubmit(task.id)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
              Submit
            </button>
          )}
          {task.status === 'submitted' && onApprove && (
            <button onClick={() => onApprove(task.id)} className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
              Approve
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
