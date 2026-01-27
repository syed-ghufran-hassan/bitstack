import { estimateFee } from './transaction-builder';

export const optimizeGasPrice = async (transaction: any): Promise<number> => {
  const baseFee = await estimateFee(transaction);
  const networkCongestion = await getNetworkCongestion();
  
  if (networkCongestion > 0.8) return baseFee * 1.5;
  if (networkCongestion > 0.5) return baseFee * 1.2;
  return baseFee;
};

const getNetworkCongestion = async (): Promise<number> => {
  try {
    const response = await fetch('https://api.hiro.so/extended/v1/tx/mempool/stats');
    const data = await response.json();
    return Math.min(data.tx_count / 1000, 1);
  } catch {
    return 0.5;
  }
};

export const analyzeCosts = (transactions: any[]) => {
  const totalCost = transactions.reduce((sum, tx) => sum + tx.fee, 0);
  const avgCost = totalCost / transactions.length;
  return { totalCost, avgCost, count: transactions.length };
};
