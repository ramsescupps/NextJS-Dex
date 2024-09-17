import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface HelpIconProps {
  space?: string;
  label?: string;
  state?: boolean;
}

const HelpIconLabel: React.FC<HelpIconProps> = ({ space, label, state = true }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <span className="text-primary-medium">{label}:</span>
      {
        state ? <div className={space}>
          <HelpOutlineIcon className="w-5 h-5" />
        </div> : ""
      }
    </div>
  );
};

export default HelpIconLabel;
