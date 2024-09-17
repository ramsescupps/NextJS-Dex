export interface defaultProps {
  className?: string;
}

export interface TokenProps extends defaultProps {
  amount?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClass?: string;
  labelClass?: string;
  label?: string;
  description?: string;
  balance?: string;
  state?: boolean;
}