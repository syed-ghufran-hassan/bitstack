import { uintCV } from '@stacks/transactions';
import { buildTransaction } from '../transaction-builder';

export const disputeTaskTransaction = (taskId: number) => {
  return buildTransaction(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    'bitstack',
    'dispute-task',
    [uintCV(taskId)]
  );
};
