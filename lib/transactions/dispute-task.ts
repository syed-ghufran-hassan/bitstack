import { uintCV } from '@stacks/transactions';
import { buildTransaction } from '../transaction-builder';

export const disputeTaskTransaction = (taskId: number) => {
  return buildTransaction(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    'bittask',
    'dispute-task',
    [uintCV(taskId)]
  );
};
