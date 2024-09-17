import React from 'react';
import Image from 'next/image';
import { SizeCSS } from '@/utils/rwd';
const Token: React.FC<{ logo: string; title?: string; description?: string }> = ({ logo, title, description }) => (
  <div className="flex flex-row items-center justify-between">
    <Image src={`/svgs/coin/${logo?.toLowerCase()}.svg`} alt={logo ? logo : ""} width={25} height={25} className="w-[25.9px] h-[25.9px]" />
    {!description ?
      <span className={`${SizeCSS.font16} font-dmsans pl-[10px] md:pl-[6px] lg:pl-[10px]`}> {title}</span>
      :
      <div className="flex flex-col pl-[10px]">
        <span className={`${SizeCSS.font16} font-semibold font-dmsans text-seconday-slight uppercase`}> {logo}</span>
        <span className="font-dmsans text-primary-medium" > {description}</span>
      </div>
    }
  </div>
);

export default Token;
