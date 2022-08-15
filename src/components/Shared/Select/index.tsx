import {
  useRef,
  useEffect,
  ReactNode,
  SelectHTMLAttributes,
  useState,
} from 'react'

import { useField } from '@unform/core'

import { Container, Error } from './style'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

interface SelectProps {
  name: string
  label?: string
  children: ReactNode
  value?: string
  containerStyle?: object
  icon?: React.ComponentType<IconBaseProps>
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps

function Select({
  name,
  label,
  value,
  containerStyle = {},
  children,
  icon: Icon,
  ...rest
}: Props) {
  const selectRef = useRef<HTMLSelectElement>(null)
  const [isFocused, setIsFocused] = useState(false) // esta com foco no input
  const [isFilled, setIsFilled] = useState(false) // esta preenchido

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: (ref) => {
        return ref.current?.value
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {label && <label htmlFor={fieldName}>{label}</label>}
      {Icon && <Icon size={20} />}
      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </select>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Select
