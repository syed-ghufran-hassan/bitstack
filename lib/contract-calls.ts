import { callReadOnlyFunction, cvToJSON } from '@stacks/transactions';
import { getStacksNetwork } from './stacks-connection';

export const contractCall = async (contractAddress: string, contractName: string, functionName: string, functionArgs: any[] = []) => {
  try {
    const result = await callReadOnlyFunction({
      contractAddress,
      contractName,
      functionName,
      functionArgs,
      network: getStacksNetwork(),
      senderAddress: contractAddress,
    });
    return cvToJSON(result);
  } catch (error) {
    throw new Error(`Contract call failed: ${error}`);
  }
};
