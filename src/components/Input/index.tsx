import React from 'react';
import { InputCustom } from './styles';

// import { Container } from './styles';

interface InputProps {
  type: string;
  placeholder?: string;
  change?: (event: any) => void;
  ref?: any;
}

const Input: React.FC<InputProps> = ({type, placeholder, change, ref}) => {
  return <InputCustom type={type} placeholder={placeholder} onChange={change} ref={ref}/>;
}

export default Input;