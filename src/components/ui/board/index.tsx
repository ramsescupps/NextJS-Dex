import React from 'react';
import { SizeCSS } from '@/utils/rwd';
const Board: React.FC<{ className?: string, unit?: string, price?: string }> = ({ className, unit, price }) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <span className={`${SizeCSS.font18} font-semibold`}>{price}</span>
      <span className={`${SizeCSS.font18} font-semibold text-primary-medium border-l-2 border-seconday-light pl-[10px]`}>{unit}</span>
    </div>
  );
};

export default Board;
