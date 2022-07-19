import { useEffect, useRef, InputHTMLAttributes } from 'react'

import { useField, SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { Container } from './style'

interface Props {
  name: string
  label?: string
  value?: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

function Checkbox({ name, value, label, ...rest }: InputProps) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked
      },
      clearValue: ref => {

        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <Container>
      <input
        defaultChecked={defaultChecked}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />

      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      {error && <span>{error}</span>}
    </Container>
  )
}

export default Checkbox;
