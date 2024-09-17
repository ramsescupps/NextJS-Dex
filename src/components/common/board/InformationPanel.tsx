import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import Select from '@/components/ui/select';
const mimeOptions = [
  { logo: 'slav', title: 'SLAV.MIME', value: 'SLAV' },
  { logo: 'usdt', title: 'USDT.MIME', value: 'USDT' },
  { logo: 'eth', title: 'ETH.MIME', value: 'ETH' },
];

const InformationPanel: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center pt-[39px]">
        <Select
          options={mimeOptions}
          dropDownStyle="px-[10px] py-[13px] border border-primary-medium rounded-[10px] bg-primary-slight"
          dropDownnItemStyle="font-semibold text-[20px] py-[10px] px-[4px]"
        />
        <Image src="/svgs/link.svg" alt="chart" width={12} height={12} className="w-[16px] h-[16px] ml-3" />
        <span className="pl-[5.91px] font-medium text-[#9E9E9E]">View on Explorer</span>
      </div>
      <div className="pt-[29px] font-medium leading-[15px] text-[12px] text-[#9E9E9E] w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper pellentesque at vitae mauris est viverra ut nisl amet. Id sapien imperdiet porttitor nunc tellus urna nibh fames pellentesque. Arcu ultricies mauris, nunc praesent. Pretium nunc nec vehicula mauris odio egestas suscipit.
      </div>
      <div className="flex flex-wrap items-start justify-between mt-[30px] pr-[37px] gap-x-4 gap-y-4">
        <div>
          <PriceDetail title="Price" value="$10.675" />
          <PriceDetail className="pt-[30px]" title="Max Supply" value="100,000,000" />
        </div>
        <div>
          <PriceDetail title="Market Cap" value="$11,200,042" />
          <PriceDetail className="pt-[30px]" title="Fully Diluted Valuation" value="$500,000,000" />
        </div>
        <PriceDetail title="Circulating Supply" value="28,000,000" />
        <div>
          <p className="opacity-[68%] font-medium leading-[15px]">Community</p>
          <div className="flex flex-row space-x-[16.24px] pt-[11.38px]">
            {['twitter', 'telegram', 'facebook'].map((social) => (
              <Link href={'/'} key={social}>
                <Image key={social} src={`/svgs/${social}.svg`} alt={social} width={24} height={24} className="w-[24.05px] h-[24.05px]" />
              </Link>
            ))}
          </div>
          <p className="pt-[17.58px] opacity-[68%] font-medium">Website</p>
          <Button className="justify-center items-center mt-[6px] px-[15.88px] h-[30.13px] font-semibold border border-[#3BF1A5] bg-[rgba(59,241,165,0.19)] text-[14px] text-[#3BF1A5]" radius="rounded-[7px]">slav.meme</Button>
        </div>
      </div>
    </>
  );
};

const PriceDetail: React.FC<{ className?: string, title: string; value: string }> = ({ className, title, value }) => (
  <div className={className}>
    <p className="font-medium text-primary-medium">{title}</p>
    <p className="pt-2 text-[16px] md:text-[12px] lg:text-[16px] font-medium">{value}</p>
  </div>
);

export default InformationPanel;
