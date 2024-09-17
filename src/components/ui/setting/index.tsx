import React from 'react';
import { useRouter } from 'next/navigation';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@/contexts/ThemeContext';
import IconButton from '@/components/ui/Icon';
import SpotProps from '@/types/SpotProps';

const Setting: React.FC<SpotProps> = ({ title, description }) => {
  const router = useRouter();
  const { handleAddBtnClick } = useTheme();
  const handleClick = (name: string) => {
    handleAddBtnClick(name);
  }

  return (
    <div className='flex flex-row flex-wrap justify-between w-full gap-y-2'>
      <div className="flex flex-col items-start md:items-center lg:items-start md:flex-row lg:flex-col">
        <span className="font-bold font-dmsans text-[24px] md:text-[16px] lg:text-[24px] text-seconday-medium">{title}</span>
        {description && <span className="text-seconday-medium">{`(${description})`}</span>}
      </div>
      <div className="flex flex-row items-center space-x-[10px] md:space-x-[6px] lg:space-x-[10px]">
        <IconButton Icon={RefreshIcon} Refresh={() => router.refresh()} />
        <IconButton Icon={SettingsIcon} Refresh={() => handleClick('setting')} />
        <IconButton Icon={AddIcon} Refresh={() => handleClick('add')} />
      </div>
    </div>
  );
};

export default Setting;
