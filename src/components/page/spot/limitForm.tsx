import React, { useState } from 'react';

import ArrowIcon from '@/components/ui/arrow';
import Setting from '@/components/ui/setting';
import Fee from '@/components/ui/status';
import TokenForm2 from '@/components/ui/form/tokenForm2';
import SelectBox from '@/components/ui/select';
import Board from '@/components/ui/board';
import TradeButton from '@/components/ui/button/Trade';
import SpotProps from '@/types/SpotProps';
import { expireItems } from '@/utils/mockup';
import { SizeCSS } from '@/utils/rwd';

const feeItems = [
  { label: 'Slippage', value: '0%', state: true },
  { label: 'Liquidity Provider Fee', value: '0 GTU', state: true }
];

const LimitForm: React.FC<SpotProps> = ({ title }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div className='px-[15px] md:px-[5px] lg:px-[15px] py-[24px]'>
      <div className='px-[12.7px] md:px-[8px] lg:px-[12.7px]'>
        <div className="flex flex-row items-center justify-between mb-[40px]">
          <Setting title={title} />
        </div>

        <TokenForm2
          amount={amount}
          onChange={(e: any) => setAmount(e.target.value)}
          className={`border bg-seconday-default border-primary-default rounded-[10px] px-[14px]`}
          inputClass="font-semibold text-primary-medium text-right"
          label="From"
          balance="3456"
        />

        <div className="flex flex-row items-center justify-between mt-[10px]">
          <span className='text-primary-medium pl-[38px] md:pl-[20px] lg:pl-[38px]'>At Price</span>
          <Board
            unit="USDC"
            price="30.87"
            className={`${SizeCSS.valueUnit} bg-seconday-default border border-primary-default rounded-[10px] px-[14px]`}
          />
        </div>

        <div className="flex flex-row items-center justify-between mt-[10px]">
          <span className='text-primary-medium pl-[38px] md:pl-[20px] lg:pl-[38px]'>Expires in</span>
          <SelectBox options={expireItems} containerStyle={`${SizeCSS.valueUnit} bg-seconday-default border border-primary-default rounded-[10px] px-[14px]`} dropDownStyle="px-[10px] py-[13px] border border-primary-medium bg-primary-slight rounded-[10px]" dropDownnItemStyle="font-dmsans font-semibold px-[12px] py-[10px]" />
        </div>
      </div>

      <div className='relative px-[14px] md:px-[8px] lg:px-[14px] pt-[22px] pb-[28px] bg-seconday-default rounded-[10px] mt-[63px]'>
        <TokenForm2
          className="bg-primary-default border border-primary-default rounded-[10px] px-[14px]"
          inputClass="font-semibold text-primary-medium text-right"
          label="To receive"
          balance="0"
        />

        <div className="mt-10">
          <TradeButton className="text-black bg-gradient-blue-dark " label="Review Order" />
        </div>

        <div className="absolute top-0 flex justify-center -translate-x-1/2 -translate-y-1/2 left-1/2">
          <ArrowIcon />
        </div>
      </div>

      <div className="mt-[42px]">
        <Fee items={feeItems} className={SizeCSS.statusPanel} />
      </div>

    </div>
  );
};

export default LimitForm;
