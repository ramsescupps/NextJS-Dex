import React from 'react';
import LabelBalance from '@/components/ui/label/labelBalance';
import SelectBox from '@/components/ui/select';

import { TokenProps } from '@/types/TokenProps';
import { coinItems } from '@/utils/mockup';
import { SizeCSS } from '@/utils/rwd';

const labelStyle = "text-primary-medium leading-[16.8px] font-dmsans px-4";
const formStyle = "py-[14px] bg-seconday-default border border-primary-default rounded-[10px]";

const tokenSelect: React.FC<TokenProps> = ({ labelClass, label, balance, amount, onChange, state }) => (
  <div className='mt-4'>
    <div className={`flex flex-row items-center justify-between ${SizeCSS.font16}`}>
      <LabelBalance label={label} balance={balance} className={labelStyle} />
    </div>
    <div className={`mt-[10px] flex flex-row justify-between items-center ${SizeCSS.px14} ${formStyle}`}>
      <SelectBox options={coinItems} containerStyle="w-fit" dropDownStyle="p-[6px] border border-primary-medium bg-primary-slight rounded-[10px]" dropDownnItemStyle="font-dmsans font-semibold p-[6px]" />
      <div className="w-[120px] md:w-[60px] lg:w-[120px]">
        <input type="text" className={`w-full text-right bg-transparent outline-none font-dmsans text-primary-medium ${SizeCSS.font18}`} disabled={state == true ? false : true} value={amount} onChange={onChange} />
      </div>
    </div>
  </div>
);

export default tokenSelect;
