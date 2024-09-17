interface IconProps {
  Icon: React.ElementType;
  item?: string;
  setSelectedItem?: (item: string) => void;
  Refresh?: () => void;
}

const IconButton: React.FC<IconProps> = ({ Icon, item, setSelectedItem, Refresh }) => {
  const handleClick = () => {
    if (setSelectedItem && item) {
      setSelectedItem(item);
    }
  };

  return (
    <div className="px-[12px] py-[4px] border border-primary-default bg-seconday-default rounded-[8px] cursor-pointer" onClick={Refresh ? Refresh : handleClick}>
      <Icon fontSize="large" className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-medium hover:text-orange-400 hover:scale-110" />
    </div >
  );
};

export default IconButton;
