import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ArrowIcon: React.FC = () => {
  return (
    <div className="w-[41.14px] h-[41.14px] md:w-[35px] md:h-[35px] lg:w-[41.14px] lg:h-[41.14px] flex items-center justify-center bg-gradient-blue-light border-[4px] border-primary-medium rounded-full">
      <ArrowDownwardIcon
        fontSize="large"
        className="text-black animate-pulse-scale"
      />
    </div>
  );
};

export default ArrowIcon;