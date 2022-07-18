import { useEffect, useRef, InputHTMLAttributes, RefObject } from 'react'

import { useField, SubmitHandler, FormHandles } from '@unform/core'
import { Form } from '@unform/web'

interface Props {
  name: string
  label?: string
  options: {
    id: string
    value: string
    label: string
  }[]
}

type RefInputEl = RefObject<HTMLInputElement[]> | any;

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

function Radio({ name, label, options, ...rest }: InputProps) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs: RefInputEl) => {
        return refs.current.find((input: any) => input?.checked)?.value
      },
      setValue: (refs: RefInputEl, id: string) => {
        const inputRef = refs.current.find((ref: any) => ref.id === id)
        if (inputRef) inputRef.checked = true
      },
      clearValue: (refs: RefInputEl) => {
        const inputRef = refs.current.find((ref: any) => ref.checked === true)
        if (inputRef) inputRef.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <div>
      {label && <p>{label}</p>}

      {options.map((option, index): any => (
        <span key={option.id}>
          <input
            type="radio"
            ref={inputRefs}
            // ref={ref => {
            //   //inputRefs?.current[index] = ref
            //   inputRefs.current = ref
            // }}
            id={option.id}
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />

          <label htmlFor={option.id} key={option.id}>
            {option.label}
          </label>
        </span>
      ))}

      {error && <span>{error}</span>}
    </div>
  )
}

export default Radio;
