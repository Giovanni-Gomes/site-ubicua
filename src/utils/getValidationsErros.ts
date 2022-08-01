import { ValidationError } from 'yup'

interface Errors {
  [key: string]: string
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErrors: Errors = {} as any

  err.inner.forEach((error: any) => {
    validationErrors[error.path] = error.message
  })

  return validationErrors
}
