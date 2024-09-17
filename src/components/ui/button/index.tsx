import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    border,
    radius,
    prefix,
    suffix,
    handleClick,
}) => {
    return (
        <button className={`${className}
        relative
        flex 
        ${radius ? radius : ""}
        ${border ? border : ""}
`}
            onClick={handleClick}
        >
            {prefix && prefix}
            {children}
            {suffix && suffix}
        </button >
    );
};

export default Button;