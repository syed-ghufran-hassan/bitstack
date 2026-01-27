import { uintCV } from '@stacks/transactions';
import { buildTransaction } from '../transaction-builder';

export const approveWorkTransaction = (taskId: number) => {
  return buildTransaction(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    'bittask',
    'approve-work',
    [uintCV(taskId)]
  );
};
