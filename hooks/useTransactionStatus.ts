import { useState, useEffect } from 'react';
import { getStacksNetwork } from '../lib/stacks-connection';

export const useTransactionStatus = (txId?: string) => {
  const [status, setStatus] = useState<'pending' | 'success' | 'failed' | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!txId) return;

    const checkStatus = async () => {
      setLoading(true);
      try {
        const network = getStacksNetwork();
        const response = await fetch(`${network.coreApiUrl}/extended/v1/tx/${txId}`);
        const data = await response.json();
        
        if (data.tx_status === 'success') setStatus('success');
        else if (data.tx_status === 'abort_by_response' || data.tx_status === 'abort_by_post_condition') setStatus('failed');
        else setStatus('pending');
      } catch (error) {
        setStatus('failed');
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, [txId]);

  return { status, loading };
};
