import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

interface SwitchProps {
  isActive: boolean;
  onToggle: () => void;
}

const CircleSwitch: React.FC<SwitchProps> = ({ isActive, onToggle }) => {
  return (
    <div className="w-[26px] h-[18px] flex items-center border-2 border-yellow rounded-full cursor-pointer" onClick={onToggle}>
      <CircleIcon sx={{ width: '10px' }} className={`text-yellow transition-all ${isActive ? 'transform translate-x-full' : ''}`} />
    </div>
  );
};

export default CircleSwitch;