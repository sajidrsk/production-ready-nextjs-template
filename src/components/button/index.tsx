import { FC, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>;
};

export default Button;
