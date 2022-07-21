import { useRef, useEffect, ReactNode, SelectHTMLAttributes } from 'react'

import { useField } from '@unform/core'

import { Container } from './style'

interface SelectProps {
  name: string
  label?: string
  children: ReactNode
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps


function Select({ name, label, children, ...rest }: Props) {
  const selectRef = useRef<HTMLSelectElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: ref => {
        return ref.current?.value
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
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </select>

      {error && <span className="error">{error}</span>}
    </Container>
  )
}

export default Select;
