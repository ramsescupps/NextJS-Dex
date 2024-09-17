import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

type PerpButtonsProps = {
  items: string[];
  selectedBtn: string;
  onBtnClick: (item: string) => void;
};

const PerpButtons: React.FC<PerpButtonsProps> = ({
  items,
  selectedBtn,
  onBtnClick,
}) => {
  return (
    <div className="flex flex-row gap-[7px] max-w-[578px]">
      {items.map((item, index) => (
        <Button
          key={index}
          className={`justify-center items-center w-full h-[56px] lg:h-[56px] px-[13px] lg:px-[26px] mt-[10px] md:mt-0 rounded-[3px] border-gradient border-2 hover:bg-primary-light ${selectedBtn === item ? "bg-primary-light border-gradient-green-2px" : "border-gradient-dark-2px"
            }`}
          handleClick={() => onBtnClick(item)}
          prefix={
            <Image
              src={`/svgs/coin/${item.toLowerCase()}.svg`}
              alt={item}
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
          }
        >
          <span className="text-[20px] md:text-[12px]  lg:text-[20px] pl-[6px] w-[137px] md:w-[70px] lg:w-[137px]">
            {item}-PERP
          </span>
        </Button>
      ))}
    </div>
  );
};

export default PerpButtons;
