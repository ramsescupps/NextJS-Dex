import React, { useState } from 'react';

import TradeButton from '@/components/ui/button/Trade';
import ArrowIcon from '@/components/ui/arrow';
import TokenForm1 from '@/components/ui/form/tokenForm1';
import GTU from '@/components/ui/gtu';
import Setting from '@/components/ui/setting';
import Fee from '@/components/ui/status';
import SpotProps from '@/types/SpotProps';
import { SizeCSS } from '@/utils/rwd';

const feeItems = [
  { label: 'Price Impact', value: '1.58%', state: true },
  { label: 'Liquidity Provider Fee', value: '0.003 GTU', state: true }
];

const SwapReceiveForm: React.FC<SpotProps> = ({ title }) => {
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);
  return (
    <div className='px-[29.7px] py-[20px]'>
      <Fee items={feeItems} className={SizeCSS.statusPanel} />

      <div className="flex flex-row items-center justify-between my-[40px]">
        <Setting title={title} />
      </div>

      <TokenForm1
        amount={fromAmount}
        onChange={(e: any) => setFromAmount(e.target.value)}
        label="From"
        balance="0"
        state={false}
      />

      <div className="flex justify-center mt-[20.12px] mb-[16px]">
        <ArrowIcon />
      </div>

      <TokenForm1
        amount={toAmount}
        onChange={(e: any) => setToAmount(e.target.value)}
        label="To receive"
        balance="0"
        state={false}
      />

      <div className="mt-10">
        <TradeButton className="border text-yellow border-yellow" label="APPROVE" />
      </div>

      <div className="flex flex-row justify-center mt-10">
        <GTU />
      </div>
    </div>
  );
};

export default SwapReceiveForm;
