import React from 'react';

interface TaskTimelineProps {
  taskId: number;
  milestones: Array<{
    id: number;
    description: string;
    completed: boolean;
    timestamp?: number;
  }>;
}

export const TaskTimeline: React.FC<TaskTimelineProps> = ({ taskId, milestones }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Task Progress</h3>
      <div className="relative">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="flex items-center space-x-4 pb-4">
            <div className={`w-4 h-4 rounded-full ${
              milestone.completed ? 'bg-green-500' : 'bg-gray-300'
            }`} />
            <div className="flex-1">
              <p className={`text-sm ${
                milestone.completed ? 'text-green-700' : 'text-gray-600'
              }`}>
                {milestone.description}
              </p>
              {milestone.timestamp && (
                <p className="text-xs text-gray-400">
                  {new Date(milestone.timestamp * 1000).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
