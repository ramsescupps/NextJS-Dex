import React, { useState } from 'react';

import TokenForm1 from '@/components/ui/form/tokenForm1';
import Setting from '@/components/ui/setting';
import Fee from '@/components/ui/status';
import TradeButton from '@/components/ui/button/Trade';
import Select from '@/components/ui/select';
import Board from '@/components/ui/board';
import LabelBalance from '@/components/ui/label/labelBalance';
import ModeSelect from '@/components/ui/mode';
import SpotProps from '@/types/SpotProps';
import { expireItems } from '@/utils/mockup';
import { SizeCSS } from '@/utils/rwd';

const feeItems = [
  { label: 'Slippage', value: '0%', state: true },
  { label: 'Liquidity Provider Fee', value: '0 GTU', state: true }
];

const startOptionItems = ['Start Now', 'Start At'];
const receiveOptionItems = ['Auto', 'Manual'];

const SwapForm: React.FC<SpotProps> = ({ title, description }) => {
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);
  const [selectedStartItem, setSelectedStartItem] = useState<string>('Start Now');
  const [selectedReceiveItem, setSelectedReceiveItem] = useState<string>('Auto');

  return (
    <div className={SizeCSS.transactionPadding}>
      <div className="flex flex-row items-center justify-between mb-[24px]">
        <Setting title={title} description={description} />
      </div>

      <div className="flex flex-row justify-between px-[16px]">
        <LabelBalance label="Increase Portofolio" balance="0" className="text-primary-medium font-dmsans" />
      </div>
      <Board unit="USD" price="1" className="mt-[10px] w-full h-[45px] bg-seconday-default border border-primary-default rounded-[10px] px-[14px]" />

      <div className="pl-[52px]">
        <div className="flex flex-row items-center justify-between mt-[10px]">
          <span className='text-primary-medium'>Every</span>
          <Select options={expireItems} containerStyle="bg-seconday-default border border-primary-default rounded-[10px]" dropDownStyle="px-[10px] py-[13px] border border-primary-medium bg-primary-slight rounded-[10px]" dropDownnItemStyle="font-dmsans font-semibold text-[18px] px-[12px] py-[10px]" />
        </div>
      </div>

      <div className="mt-[24px]">
        <TokenForm1
          label="To Buy"
          balance="0"
          amount={fromAmount}
          onChange={(e: any) => setFromAmount(e.target.value)}
          state={true}
        />
      </div>

      <div className="mt-[8px]">
        <TokenForm1
          label="To receive"
          balance="0"
          amount={toAmount}
          onChange={(e: any) => setToAmount(e.target.value)}
          state={false}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center mt-[16px]">
        <span className="pl-[52px] md:pl-0 lg:pl-[52px]">Every</span>
        <ModeSelect selectedItem={selectedStartItem} items={startOptionItems} setSelectItem={setSelectedStartItem} />
      </div >

      <div className="flex flex-row flex-wrap justify-between items-center mt-[16px]">
        <span className="pl-[52px] md:pl-0 lg:pl-[52px]">Auto receive SLAV after every buy</span>
        <ModeSelect selectedItem={selectedReceiveItem} items={receiveOptionItems} setSelectItem={setSelectedReceiveItem} />
      </div >

      <div className="mt-10">
        <TradeButton className="text-black bg-gradient-blue-dark " label="Review Order" />
      </div>

      <div className="mt-[42px]">
        <Fee items={feeItems} className={SizeCSS.statusPanel} />
      </div>
    </div >
  );
};

export default SwapForm;
