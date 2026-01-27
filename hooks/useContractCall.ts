import { useState } from 'react';
import { broadcastTransaction } from '@stacks/transactions';
import { getStacksNetwork } from '../lib/stacks-connection';

export const useContractCall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txId, setTxId] = useState<string | null>(null);

  const executeTransaction = async (transaction: any) => {
    setLoading(true);
    setError(null);
    try {
      const result = await broadcastTransaction(transaction, getStacksNetwork());
      setTxId(result.txid);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Transaction failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { executeTransaction, loading, error, txId };
};
