import { useState, useEffect } from 'react';
import { contractCall } from '../lib/contract-calls';

export const useTaskData = (taskId?: number) => {
  const [task, setTask] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTask = async (id: number) => {
    setLoading(true);
    try {
      const result = await contractCall(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
        'bitstack',
        'get-task',
        [id]
      );
      setTask(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch task');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (taskId) fetchTask(taskId);
  }, [taskId]);

  return { task, loading, error, refetch: () => taskId && fetchTask(taskId) };
};
