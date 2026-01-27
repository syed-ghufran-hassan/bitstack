import { StacksNetwork, StacksTestnet, StacksMainnet } from '@stacks/network';

export const getStacksNetwork = (): StacksNetwork => {
  const network = process.env.NEXT_PUBLIC_STACKS_NETWORK || 'testnet';
  return network === 'mainnet' ? new StacksMainnet() : new StacksTestnet();
};

export const checkConnectionStatus = async (): Promise<boolean> => {
  try {
    const network = getStacksNetwork();
    const response = await fetch(`${network.coreApiUrl}/v2/info`);
    return response.ok;
  } catch {
    return false;
  }
};
