import { useState, useEffect } from 'react';
import { RealtimeUpdates } from '../lib/realtime-updates';

export const useTaskSubscription = (taskId?: number) => {
  const [updates, setUpdates] = useState<any[]>([]);
  const [realtime] = useState(() => new RealtimeUpdates());

  useEffect(() => {
    if (!taskId) return;

    realtime.connect(`wss://api.hiro.so/extended/v1/ws`);
    realtime.subscribe(`task-${taskId}`, (update: any) => {
      setUpdates(prev => [...prev, update]);
    });

    return () => realtime.disconnect();
  }, [taskId, realtime]);

  return { updates, subscribe: realtime.subscribe.bind(realtime) };
};
