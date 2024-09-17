import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';

interface NetworkButtonProps {
  src: string;
  alt: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const NetworkButton: React.FC<NetworkButtonProps> = ({ src, alt, label, isSelected, onClick }) => {
  return (
    <Button
      className={`justify-center w-[123px] h-[56px] items-center border-gradient ${isSelected ? 'bg-primary-light border-gradient-green-2px' : 'bg-transparent border-gradient-dark-2px'}`}
      radius="rounded-[3px]"
      handleClick={onClick}
      prefix={<Image src={src} alt={alt} width={22} height={22} />}
    >
      <span className="text-[20px] pl-[6px]">{label}</span>
    </Button>
  );
};

export default NetworkButton;
