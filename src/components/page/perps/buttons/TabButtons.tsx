import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

type TabButtonsProps = {
  tabs: string[];
  activeTab: number;
  onTabChange: (tabIndex: number) => void;
  activeStyle: string;
};

const TabButtons: React.FC<TabButtonsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  activeStyle,
}) => {
  return (
    <div className="flex flex-row">
      {tabs.map((item, index) => (
        <div key={index} className="flex flex-col w-full">
          <Button
            className="h-[56px] px-[16px] pb-[8px] flex flex-row gap-[10px]"
            handleClick={() => onTabChange(index)}
          >
            <div className="w-[48px] h-[48px] p-[12px] rounded-[8px] bg-[#14181f]">
              <Image
                src={`/svgs/${activeTab === index ? (!index ? "perps_active" : "earn_active") : (!index ? "perps_inactive" : "earn_inactive")
                  }.svg`}
                alt={item}
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            <div>
              <div className={`text-[16px] font-bold leading-[19.2px] tracking-negative-2 ${activeTab === index ? activeStyle : ""}`}>
                {item}
              </div>
              <div className={`${activeTab === index ? activeStyle : "text-primary-medium"}`}>
                Degen and trade
              </div>
            </div>
          </Button>
          <hr
            className={`${activeTab === index ? "border-[0.5px] border-[#30f874]" : "border-[1px] border-[#141821]"
              }`}
          />
        </div>
      ))}
    </div>
  );
};

export default TabButtons;
