import React from 'react';
import Button from '@/components/ui/button';
import Close from '@mui/icons-material/Close';
interface CloseIconProps {
  width?: string;
  height?: string;
  border?: string;
  color?: string;
  radius?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ width, height, border, color, radius }) => {
  return (
    <Button
      className={`flex items-center justify-center bg-dark text-[24px] p-[6.3px] hover:text-red-400 ${border ? border : ''}`}
      radius={radius ? radius : ''}
    >
      <Close className={`${width} ${height} ${color ? color : ''}`} />
    </Button>
  );
};

export default CloseIcon;
