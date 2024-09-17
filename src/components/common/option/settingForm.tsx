import React, { useState } from 'react';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@/contexts/ThemeContext';

import Button from '@/components/ui/button';
import CloseIcon from '@/components/ui/close';
import HelpIconLabel from '@/components/ui/label/helpIconLabel';
import SquareSwitch from '@/components/ui/switch/squareSwitch';
import CircleSwitch from '@/components/ui/switch/circleSwitch';

interface SlippButtonProps {
  className: string;
  label: string;
  selected: boolean;
  onhandleClick: () => void;
}

interface SlippPageProps {
  selectedSlippage: string;
  setSelectedSlippage: (value: string) => void;
}

const SlippageButton: React.FC<SlippButtonProps> = ({ label, selected, onhandleClick, className }) => {
  return (
    <div
      onClick={onhandleClick}
      className={`${className} ${selected ? 'bg-switch-default' : 'bg-transparent'}`}
    >
      {label}
    </div>
  );
};

// Header
const Header: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <ArrowBackIosIcon fontSize="large" />
        <span className="text-[24px] font-semibold">Settings</span>
      </div>
      <div onClick={onBack} className="cursor-pointer">
        <CloseIcon border="border-2 border-yellow" color="text-yellow" radius="rounded-full" />
      </div>
    </div>
  );
};

// SlippageSelection
const SlippageSelection: React.FC<SlippPageProps> = ({ selectedSlippage, setSelectedSlippage }) => {
  return (
    <div className="flex flex-row justify-between mt-[10.15px]">
      <div className="flex flex-row items-center border-gradient border-gradient-green-2px px-[15px] py-[10px] rounded-[10px] space-x-2">
        {['0.1%', '0.5%', '1%'].map((label) => (
          <SlippageButton
            key={label}
            label={label}
            selected={selectedSlippage === label}
            onhandleClick={() => setSelectedSlippage(label)}
            className="w-[60px] h-[47px] flex items-center justify-center text-[18px] font-semibold cursor-pointer rounded-[8px]"
          />
        ))}
      </div>
      <div className="w-[128px] h-[64px] border-gradient border-gradient-green-2px rounded-[10px] p-[2px]">
        <SlippageButton
          label="Custom"
          selected={selectedSlippage.toLowerCase() === "custom"}
          onhandleClick={() => setSelectedSlippage("Custom")}
          className="w-full h-full flex justify-center items-center text-[18px] font-semibold leading-[36px] rounded-[10px] cursor-pointer"
        />
      </div>
    </div>
  );
};

const AddForm: React.FC = () => {
  const { releaseAddBtn } = useTheme();
  const [selectedSlippage, setSelectedSlippage] = useState<string>('0.1%');
  const [isTXDeadlineActive, setIsTXDeadlineActive] = useState(true);
  const [isExpertModeActive, setIsExpertModeActive] = useState(true);
  const [isSoundActive, setIsSoundActive] = useState(true);

  return (
    <div className="pt-[36px] px-[30px]">
      <Header onBack={releaseAddBtn} />

      <div className="relative mt-[18px]">
        <Image src="/imgs/bg.png" alt="frame" width={100} height={100} className="w-full" />
        <div className="absolute top-0 left-0 flex flex-col pl-[14px] pt-[11px]">
          <span className="w-[182px] text-[20px] leading-[25px]">ADJUST SETTINGS ACCORDING TO PREFERENCES.</span>
          <span className="w-[268px] pt-[7px] leading-[18px]">
            Stake your LP tokens or other supported tokens in Liquidity Mining Farms for additional incentives.
          </span>
        </div>
      </div>

      <div className="mt-[40px]">
        <SlippageSelection selectedSlippage={selectedSlippage} setSelectedSlippage={setSelectedSlippage} />
      </div>

      <div className="mt-[40px]">
        <div className="mt-[50px] mb-[20px] pl-[14px] space-y-[44px]">
          <div className="flex flex-row justify-between">
            <HelpIconLabel label="TX Deadline:" space="ml-[57px]" />
            <div className="flex flex-row items-center space-x-[19px]">
              <CircleSwitch isActive={isTXDeadlineActive} onToggle={() => setIsTXDeadlineActive(!isTXDeadlineActive)} />
              <div className="relative bg-switch-dark w-[116px] h-[40px] rounded-[5px]">
                <Button className="items-center justify-center w-full h-full text-[16px] z-10">10 Minutes</Button>
                {/* <button className={`absolute ${isTXDeadlineActive ? 'left-[60px]' : 'left-2'} top-1/2 -translate-y-1/2 w-[53px] h-[30px] bg-switch-default rounded-[5px] transition-all`} /> */}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center space-x-[19px]">
            <HelpIconLabel label="Expert Mode:" space="ml-[5px]" />
            <SquareSwitch isActive={isExpertModeActive} onToggle={() => setIsExpertModeActive(!isExpertModeActive)} />
          </div>

          <div className="flex flex-row justify-between items-center space-x-[19px]">
            <HelpIconLabel label="Sound:" space="ml-[5px]" />
            <SquareSwitch isActive={isSoundActive} onToggle={() => setIsSoundActive(!isSoundActive)} />
          </div>
          <div className="cursor-pointer text-primary-medium">Reset settings to default</div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
