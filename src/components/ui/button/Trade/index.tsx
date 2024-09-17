import Button from "..";
import { SizeCSS } from "@/utils/rwd";

interface TradeButtonProps {
  className?: string;
  label?: string;
  openModal?: () => void;
}

const TradeButton: React.FC<TradeButtonProps> = ({ className, label, openModal }) => {
  return (
    <Button className={`${SizeCSS.button} ${SizeCSS.font18} flex items-center justify-center w-full font-dmsans font-bold uppercase ${className}`} radius="rounded-[25px]" handleClick={openModal}>
      {label}
    </Button >
  );
};

export default TradeButton;
