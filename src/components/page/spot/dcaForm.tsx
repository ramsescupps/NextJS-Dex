import React, { useState } from 'react';
import ArrowIcon from '@/components/ui/arrow';
import TokenForm1 from '@/components/ui/form/tokenForm1';
import Setting from '@/components/ui/setting';
import Fee from '@/components/ui/status';
import TradeButton from '@/components/ui/button/Trade';
import Select from '@/components/ui/select';
import Board from '@/components/ui/board';
import SpotProps from '@/types/SpotProps';
import { expireItems } from '@/utils/mockup';
import { SizeCSS } from '@/utils/rwd';
const feeItems = [
  { label: 'Slippage', value: '0%', state: true },
  { label: 'Liquidity Provider Fee', value: '0 GTU', state: true }
];

const SwapForm: React.FC<SpotProps> = ({ title, description }) => {
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);

  return (
    <div className={SizeCSS.transactionPadding}>
      <div className="flex flex-row items-center justify-between mb-[40px]">
        <Setting title={title} description={description} />
      </div>

      <TokenForm1
        label="I want to allocate"
        balance="0"
        amount={fromAmount}
        onChange={(e: any) => setFromAmount(e.target.value)}
        state={true}
      />

      <div className="flex justify-center mt-[16px]">
        <ArrowIcon />
      </div>

      <TokenForm1
        label="To buy"
        balance="0"
        amount={toAmount}
        onChange={(e: any) => setToAmount(e.target.value)}
        state={false}
      />

      <div className="pl-[52px] md:pl-[20px] lg:pl-[52px]">
        <div className="flex flex-row items-center justify-between mt-[10px]">
          <span className='text-primary-medium'>Every</span>
          <Select options={expireItems} containerStyle={`${SizeCSS.valueUnit} bg-seconday-default border border-primary-default rounded-[10px] px-[10px]`} dropDownStyle="py-[13px] border border-primary-medium bg-primary-slight rounded-[10px]" dropDownnItemStyle="font-dmsans font-semibold px-[12px] py-[10px]" />
        </div>
        <div className="flex flex-row items-center justify-between mt-[10px]">
          <span className='text-primary-medium'>Order</span>
          <Board unit="orders" price="1" className={`${SizeCSS.valueUnit} bg-seconday-default border border-primary-default rounded-[10px] px-[14px]`} />
        </div>
      </div>

      <div className="mt-10">
        <TradeButton className="text-black bg-gradient-blue-dark " label="Review Order" />
      </div>

      <div className="mt-[42px]">
        <Fee items={feeItems} className={SizeCSS.statusPanel} />
      </div>
    </div>
  );
};

export default SwapForm;
