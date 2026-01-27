import { useState, useEffect } from 'react';
import { getStacksNetwork } from '../lib/stacks-connection';

export const useWalletBalance = (address?: string) => {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) return;
    
    const fetchBalance = async () => {
      setLoading(true);
      try {
        const network = getStacksNetwork();
        const response = await fetch(`${network.coreApiUrl}/extended/v1/address/${address}/stx`);
        const data = await response.json();
        setBalance(parseInt(data.balance) / 1000000); // Convert to STX
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [address]);

  return { balance, loading };
};
