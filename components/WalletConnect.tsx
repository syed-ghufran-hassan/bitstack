import React from 'react';
import { useStacksAuth } from '../hooks/useStacksAuth';
import { useWalletBalance } from '../hooks/useWalletBalance';

export const WalletConnect: React.FC = () => {
  const { isSignedIn, address, connect, disconnect } = useStacksAuth();
  const { balance, loading } = useWalletBalance(address || undefined);

  if (isSignedIn) {
    return (
      <div className="flex items-center space-x-4">
        <div className="text-sm">
          <div className="font-medium">{address?.slice(0, 8)}...{address?.slice(-4)}</div>
          <div className="text-gray-500">
            {loading ? 'Loading...' : `${balance.toFixed(6)} STX`}
          </div>
        </div>
        <button
          onClick={disconnect}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connect}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Connect Wallet
    </button>
  );
};
