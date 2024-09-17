import React from 'react';
import HelpIconLabel from '@/components/ui/label/helpIconLabel';
import { SizeCSS } from '@/utils/rwd';
interface DetailProps {
  className?: string;
  items: { label: string; value: string; state: boolean }[];

}

const Detail: React.FC<DetailProps> = ({ className, items }) => {
  return (
    <div className={SizeCSS.statusPanel}>
      {items?.map((item, index) => (
        <BlackBoard key={index} label={item.label} value={item.value} state={item.state} />
      ))}
    </div>
  );
};

const BlackBoard: React.FC<{ label: string; value: string; state: boolean }> = ({ label, value, state }) => (
  <div className="flex flex-row justify-between">
    <HelpIconLabel label={label} state={state} space="ml-[3px]" />
    <p className="text-seconday-slight">{value}</p>
  </div>
);

export default Detail;
