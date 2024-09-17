import React from 'react';
import LabelBalance from '@/components/ui/label/labelBalance';
import SelectBox from '@/components/ui/select';
import { coinItems } from '@/utils/mockup';
import { TokenProps } from '@/types/TokenProps';
import { SizeCSS } from '@/utils/rwd';

const labelStyle = "text-primary-medium font-dmsans";
const TokenForm: React.FC<TokenProps> = ({ className, label, balance, amount, onChange }) => (
  <>
    <div className={`flex flex-row items-center justify-between `}>
      <LabelBalance label={label} balance={balance} className={labelStyle} />
    </div>
    <div className="flex flex-row items-center justify-between mt-[10px]">
      <SelectBox options={coinItems} containerStyle="w-fit" dropDownStyle="p-[6px] border border-primary-medium bg-primary-slight rounded-[10px]" dropDownnItemStyle="font-dmsans font-semibold text-[14px] p-[6px]" />
      <div className={`flex justify-end items-center ${SizeCSS.largeInput} ${className}`}>
        <input type="text" className={`w-full outline-none bg-transparent ${SizeCSS.font18}`} value={amount}
          onChange={onChange} />
      </div>
    </div>
  </>
);

export default TokenForm;
