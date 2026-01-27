import React from 'react';

interface PaymentHistoryProps {
  payments: Array<{
    id: number;
    amount: number;
    timestamp: number;
    type: 'payment' | 'refund' | 'partial';
    txId: string;
  }>;
}

export const PaymentHistory: React.FC<PaymentHistoryProps> = ({ payments }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'payment': return 'text-green-600';
      case 'refund': return 'text-red-600';
      case 'partial': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Payment History</h3>
      <div className="space-y-2">
        {payments.map((payment) => (
          <div key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p className={`font-medium ${getTypeColor(payment.type)}`}>
                {payment.type.charAt(0).toUpperCase() + payment.type.slice(1)}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(payment.timestamp * 1000).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{payment.amount / 1000000} STX</p>
              <p className="text-xs text-gray-400">
                {payment.txId.slice(0, 8)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
