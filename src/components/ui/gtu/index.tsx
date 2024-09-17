import React from 'react';
import Image from 'next/image';

const GTU: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="w-[200px] rounded-[2px] flex flex-row justify-start border border-yellow bg-radial-gradient-yellow">
        <Image src="/svgs/arrow.svg" alt="arrow" width={25} height={25} className="w-[25.9px] h-[25.9px] pl-[13.33px]" />
        <span className="w-full h-[25px] flex items-center justify-center text-yellow font-dmsans font-medium" >3453 SLAV ~ 1</span>
      </button>
      <p className="pt-[1px] font-medium text-yellow uppercase">GTU</p>
    </div>
  );
};


export default GTU;
