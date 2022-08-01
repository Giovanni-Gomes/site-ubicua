import React, { ButtonHTMLAttributes } from 'react'
import { ButtonCustom } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  text?: Element | string | ButtonHTMLAttributes<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <ButtonCustom type="button" {...rest}>
    {loading ? 'Loading...' : children}
  </ButtonCustom>
)

export default Button

// code refatorado

// interface ButtonProps {
//   type: "button" | "submit" | "reset" | undefined;
//   text: any;
//   submit?: any;
//   disabled?: boolean;
//   className?: string;
// }

// const Button: React.FC<ButtonProps> = ({type, text, submit, disabled, className}) => {
//   return <ButtonCustom type={type} disabled={disabled} onClick={submit} className={className}>{text}</ButtonCustom>;
// }

// export default Button;
