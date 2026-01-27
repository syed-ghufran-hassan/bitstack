import { StacksNetwork } from '@stacks/network';
import { getStacksNetwork } from './stacks-connection';

export const switchNetwork = (network: 'testnet' | 'mainnet') => {
  process.env.NEXT_PUBLIC_STACKS_NETWORK = network;
  window.location.reload();
};

export const getApiEndpoint = (): string => {
  const network = getStacksNetwork();
  return network.coreApiUrl;
};

export const monitorNetworkStatus = async (): Promise<{ status: string; blockHeight: number }> => {
  const endpoint = getApiEndpoint();
  const response = await fetch(`${endpoint}/v2/info`);
  const data = await response.json();
  return { status: 'online', blockHeight: data.stacks_tip_height };
};
