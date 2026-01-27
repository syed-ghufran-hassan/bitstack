export const formatSTX = (microSTX: number): string => {
  const stx = microSTX / 1000000;
  return stx.toLocaleString(undefined, { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 6 
  });
};

export const parseSTX = (stxAmount: string): number => {
  return Math.floor(parseFloat(stxAmount) * 1000000);
};

export const formatCurrency = (amount: number, currency: string = 'STX'): string => {
  return `${formatSTX(amount)} ${currency}`;
};
