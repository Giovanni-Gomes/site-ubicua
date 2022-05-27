import React from 'react';
import { InputCustom } from './styles';

// import { Container } from './styles';

interface InputProps {
  type: string;
  placeholder?: string;
  change?: React.ChangeEventHandler;
}

const Input: React.FC<InputProps> = ({type, placeholder, change}) => {
  return <InputCustom type={type} placeholder={placeholder} onChange={change}/>;
}

export default Input;