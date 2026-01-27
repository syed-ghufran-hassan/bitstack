import { useState } from 'react';
import { batchTransactions } from '../lib/batch-transactions';

export const useBatchTransactions = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<any[]>([]);

  const executeBatch = async (transactions: any[]) => {
    setLoading(true);
    setProgress(0);
    setResults([]);

    try {
      const batchResults = await batchTransactions(transactions);
      
      batchResults.forEach((result, index) => {
        setProgress(((index + 1) / transactions.length) * 100);
        setResults(prev => [...prev, result]);
      });

      return batchResults;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { executeBatch, loading, progress, results };
};
