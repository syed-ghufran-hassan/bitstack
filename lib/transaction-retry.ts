export const retryTransaction = async (
  transactionFn: () => Promise<any>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<any> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await transactionFn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export const handleTransactionFailure = (error: any) => {
  if (error.message.includes('insufficient funds')) {
    return 'Insufficient STX balance for transaction';
  }
  if (error.message.includes('nonce')) {
    return 'Transaction nonce error - please try again';
  }
  return 'Transaction failed - please try again';
};
