import { makeContractCall } from '@stacks/transactions';
import { getStacksNetwork } from './stacks-connection';

export const batchTransactions = async (transactions: any[]) => {
  const results = [];
  for (const tx of transactions) {
    try {
      const result = await fetch(`${getStacksNetwork().coreApiUrl}/v2/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transaction: tx.serialize().toString('hex') }),
      });
      results.push(await result.json());
    } catch (error) {
      results.push({ error: error.message });
    }
  }
  return results;
};

export const optimizeBatch = (transactions: any[]) => {
  return transactions.sort((a, b) => a.fee - b.fee);
};
