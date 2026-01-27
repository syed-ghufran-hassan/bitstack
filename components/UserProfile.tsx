import React from 'react';
import { useStacksAuth } from '../hooks/useStacksAuth';

export const UserProfile: React.FC = () => {
  const { isSignedIn, address } = useStacksAuth();

  if (!isSignedIn) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Please connect your wallet to view profile</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">
            {address?.slice(0, 2).toUpperCase()}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
        <p className="text-gray-600 text-sm mb-4">
          {address}
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className="text-sm text-gray-500">Tasks Created</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-500">Tasks Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-sm text-gray-500">Reputation</div>
          </div>
        </div>
      </div>
    </div>
  );
};
