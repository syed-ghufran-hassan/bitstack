import React, { useState, useEffect } from 'react';
import { TaskCard } from './TaskCard';
import { contractCall } from '../lib/contract-calls';

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

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const nonce = await contractCall(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        'bittask',
        'get-nonce'
      );
      
      const taskPromises = [];
      for (let i = 1; i <= nonce.value; i++) {
        taskPromises.push(
          contractCall(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
            'bittask',
            'get-task',
            [i]
          )
        );
      }
      
      const taskResults = await Promise.all(taskPromises);
      const validTasks = taskResults
        .filter(task => task.value)
        .map((task, index) => ({
          id: index + 1,
          ...task.value,
        }));
      
      setTasks(validTasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredTasks = tasks.filter(task => 
    filter === 'all' || task.status === filter
  );

  if (loading) return <div className="text-center py-8">Loading tasks...</div>;

  return (
    <div>
      <div className="mb-6">
        <div className="flex space-x-2">
          {['all', 'open', 'in-progress', 'submitted', 'completed'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded ${
                filter === status 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      
      {filteredTasks.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No tasks found for the selected filter.
        </div>
      )}
    </div>
  );
};
