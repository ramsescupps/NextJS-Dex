import React from 'react';
interface SwitchProps {
  isActive: boolean;
  onToggle: () => void;
}

const SquareSwitch: React.FC<SwitchProps> = ({ isActive, onToggle }) => {
  return (
    <div className="relative bg-switch-default w-[116px] h-[40px] rounded-[5px] cursor-pointer" onClick={onToggle}>
      <button
        className={`absolute ${isActive ? 'right-2 bg-linear-gradient-yellow' : 'left-2 bg-[rgba(96,96,96,0.31)]'} top-1/2 -translate-y-1/2 w-[53px] h-[30px] rounded-[5px] transition-all duration-300`}
      />
    </div>
  );
};

export default SquareSwitch;