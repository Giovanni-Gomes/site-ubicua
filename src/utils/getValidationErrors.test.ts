import { describe, expect, it } from 'vitest'
import * as Yup from 'yup'
import getValidationErrors from './getValidationErrors'

describe('getValidationErrors', () => {
  it('maps Yup inner errors to a field dictionary', async () => {
    const schema = Yup.object().shape({
      email: Yup.string().required('Email obrigatório'),
      name: Yup.string().required('Nome obrigatório'),
    })

    try {
      await schema.validate({}, { abortEarly: false })
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        const errors = getValidationErrors(e)
        expect(errors.email).toBe('Email obrigatório')
        expect(errors.name).toBe('Nome obrigatório')
        return
      }
    }
    expect.fail('expected ValidationError')
  })
})
