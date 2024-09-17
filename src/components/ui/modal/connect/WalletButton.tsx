import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

interface WalletButtonProps {
  src: string;
  alt: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const WalletButton: React.FC<WalletButtonProps> = ({ src, alt, label, isSelected, onClick }) => {
  return (
    <Button
      className={`w-full h-[56px] items-center border-gradient ${isSelected ? 'bg-primary-light border-gradient-green-2px' : 'bg-transparent border-gradient-dark-2px'}`}
      radius="rounded-[3px]"
      border={`border-2 ${isSelected ? 'border-gradient-green' : 'border-gradient-dark'}`}
      handleClick={onClick}
      prefix={<Image src={src} alt={alt} width={22} height={22} className="ml-[26px]" />}
    >
      <span className="text-[20px] pl-[6px] hover:cursor-pointer">{label}</span>
    </Button>
  );
};

export default WalletButton;
