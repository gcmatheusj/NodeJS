import { ValidationComposite } from './validation-composite'
import { Validation } from './validation'
import { MissingParamError } from '../../errors/missing-param-error'

describe('Validation Composite', () => {
  it('should return an error if any validation fails', () => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return new MissingParamError('field')
      }
    }

    const validationStub = new ValidationStub()

    const sut = new ValidationComposite([validationStub])

    const error = sut.validate({ name: 'any_name' })

    expect(error).toEqual(new MissingParamError('field'))
  })
})
