import React from 'react';
import { TokenProps } from '@/types/TokenProps';
import { SizeCSS } from '@/utils/rwd';

const LabelBalance: React.FC<TokenProps> = ({ className, label, balance }) => (
  <>
    <span className={className}>{label}</span>
    <span className={className}>Bal: {balance}</span>
  </>
);

export default LabelBalance;
