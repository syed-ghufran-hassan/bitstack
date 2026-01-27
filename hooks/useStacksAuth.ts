import { useState, useEffect } from 'react';
import { userSession, connectWallet, disconnectWallet, getWalletAddress } from '../lib/wallet-utils';

export const useStacksAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const signedIn = userSession.isUserSignedIn();
      setIsSignedIn(signedIn);
      setAddress(signedIn ? getWalletAddress() : null);
    };
    checkAuth();
  }, []);

  return {
    isSignedIn,
    address,
    connect: connectWallet,
    disconnect: disconnectWallet,
  };
};
