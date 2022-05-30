import React from 'react';
import { ButtonCustom } from './styles';

// import { Container } from './styles';

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: any;
  submit?: any;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({type, text, submit, disabled, className}) => {
  return <ButtonCustom type={type} disabled={disabled} onClick={submit} className={className}>{text}</ButtonCustom>;
}

export default Button;