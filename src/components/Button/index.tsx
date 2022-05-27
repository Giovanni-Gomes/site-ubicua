import React, { ReactElement } from 'react';
import { ButtonCustom } from './styles';

// import { Container } from './styles';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: any;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({type, text, disabled}) => {
  return <ButtonCustom type={type} disabled={disabled}>{text}</ButtonCustom>;
}

export default Button;