import {defaultProps} from "./defaultProps";

export interface ButtonProps extends defaultProps {
  border?: string;
  radius?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  handleClick?: () => void;
}