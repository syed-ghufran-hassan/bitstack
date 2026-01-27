export const validateStacksAddress = (address: string): boolean => {
  const testnetRegex = /^ST[0-9A-Z]{39}$/;
  const mainnetRegex = /^SP[0-9A-Z]{39}$/;
  return testnetRegex.test(address) || mainnetRegex.test(address);
};

export const formatAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const getNetworkFromAddress = (address: string): 'testnet' | 'mainnet' | null => {
  if (address.startsWith('ST')) return 'testnet';
  if (address.startsWith('SP')) return 'mainnet';
  return null;
};
