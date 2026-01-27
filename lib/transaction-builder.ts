import { makeContractCall, broadcastTransaction, AnchorMode } from '@stacks/transactions';
import { getStacksNetwork } from './stacks-connection';
import { userSession } from './wallet-utils';

export const buildTransaction = (contractAddress: string, contractName: string, functionName: string, functionArgs: any[]) => {
  return makeContractCall({
    contractAddress,
    contractName,
    functionName,
    functionArgs,
    senderKey: userSession.loadUserData().appPrivateKey,
    network: getStacksNetwork(),
    anchorMode: AnchorMode.Any,
  });
};

export const estimateFee = async (transaction: any): Promise<number> => {
  const network = getStacksNetwork();
  const response = await fetch(`${network.coreApiUrl}/v2/fees/transaction`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transaction: transaction.serialize().toString('hex') }),
  });
  const data = await response.json();
  return data.estimated_cost.write_length;
};
