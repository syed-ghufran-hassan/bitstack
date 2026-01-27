import { uintCV, stringAsciiCV } from '@stacks/transactions';
import { buildTransaction } from '../transaction-builder';

export const createTaskTransaction = (title: string, description: string, amount: number, deadline: number, priority: number, category: number) => {
  return buildTransaction(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
    'bitstack',
    'create-task',
    [stringAsciiCV(title), stringAsciiCV(description), uintCV(amount), uintCV(deadline), uintCV(priority), uintCV(category)]
  );
};
