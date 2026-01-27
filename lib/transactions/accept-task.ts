import { uintCV } from '@stacks/transactions';
import { buildTransaction } from '../transaction-builder';

export const acceptTaskTransaction = (taskId: number) => {
  return buildTransaction(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    'bittask',
    'accept-task',
    [uintCV(taskId)]
  );
};
