import { useRef, useEffect, InputHTMLAttributes, useState, useCallback } from 'react';

import { useField, SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, Label } from './styles';

interface Props {
  name: string,
  type?:
  | 'text'
  | 'number'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'hidden'
  | 'month'
  | 'password'
  | 'time'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'file'
  label?: string,
  value?: string,
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

function Input({ name, type, label, value, containerStyle = {}, icon: Icon, ...rest }: InputProps) {

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const [isFocused, setIsFocused] = useState(false); // esta com foco no input
  const [isFilled, setIsFilled] = useState(false); // esta preenchido

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  /**
   * If you add a value to the input, it will be considered the default
   * This is useful when you have a `<input type="hidden" />`
   *
   * You can also remove it and use the `initialData` or set dynamically.
   */
  const defaultInputValue = value || defaultValue

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        data-testid="input-container"
      >

        {Icon && <Icon size={20} />}
        <input
          id={fieldName}
          type={type || 'text'}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultInputValue}
          ref={inputRef}
          {...rest}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
      {error && <span style={{ color: 'red' }}>{error}</span>}

    </>
  )
}

export default Input;

// import React, {
//   InputHTMLAttributes,
//   useEffect,
//   useRef,
//   useState,
//   useCallback,
// } from 'react';
// import { IconBaseProps } from 'react-icons';
// import { FiAlertCircle } from 'react-icons/fi';
// import { useField } from '@unform/core';

// import { Container, Error } from './styles';

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   containerStyle?: object;
//   icon?: React.ComponentType<IconBaseProps>;
// }

// const Input: React.FC<InputProps> = ({
//   name,
//   containerStyle = {},
//   icon: Icon,
//   ...rest
// }) => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const [isFocused, setIsFocused] = useState(false); // esta com foco no input
//   const [isFilled, setIsFilled] = useState(false); // esta preenchido

//   const { fieldName, defaultValue, error, registerField } = useField(name);

//   const handleInputFocus = useCallback(() => {
//     setIsFocused(true);
//   }, []);

//   const handleInputBlur = useCallback(() => {
//     setIsFocused(false);

//     setIsFilled(!!inputRef.current?.value);
//     /* if(inputRef.current?.value){
//       setIsFilled(true);
//     }else{
//       setIsFilled(false);
//     } */
//   }, []);

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: 'value',
//     });
//   }, [fieldName, registerField]);

//   return (
//     <>
//       <Container
//         style={containerStyle}
//         isErrored={!!error}
//         isFilled={isFilled}
//         isFocused={isFocused}
//         data-testid="input-container"
//       >
//         {Icon && <Icon size={20} />}
//         <input
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           defaultValue={defaultValue}
//           ref={inputRef}
//           {...rest}
//         />
//         {error && (
//           <Error title={error}>
//             <FiAlertCircle color="#c53030" size={20} />
//           </Error>
//         )}
//       </Container>
//       {error && <span style={{ color: 'red' }}>{error}</span>}
//     </>
//   );
// };

// export default Input;
