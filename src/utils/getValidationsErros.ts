import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    //validationErrors[error.path]; deprecated
    validationErrors ? [error.path] = error.message : null;
  });

  return validationErrors;
}
