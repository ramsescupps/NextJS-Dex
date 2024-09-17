import React from "react";
import Button from "@/components/ui/button";

type EarnButtonsProps = {
  items: string[];
  selectedBtn: string;
  onBtnClick: (item: string) => void;
};

const EarnButtons: React.FC<EarnButtonsProps> = ({
  items,
  selectedBtn,
  onBtnClick,
}) => {
  return (
    <div className="flex flex-row p-2 space-x-[4px] h-[48px] max-w-[240px] mt-[10px] md:mt-0 bg-primary-default rounded-[16px] border border-[#14181F]">
      {items.map((item, index) => (
        <Button
          key={index}
          className={`justify-center text-[16px] w-[72px] px-[4px] py-[6px] ${selectedBtn === item ? "bg-[#242F36] text-yellow font-bold" : " text-primary-medium"
            }`}
          radius="rounded-[8px]"
          handleClick={() => onBtnClick(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default EarnButtons;
