import { uintCV, stringAsciiCV } from '@stacks/transactions';
import { buildTransaction } from '../transaction-builder';

export const submitWorkTransaction = (taskId: number, submission: string) => {
  return buildTransaction(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    'bittask',
    'submit-work',
    [uintCV(taskId), stringAsciiCV(submission)]
  );
};
