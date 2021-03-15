import { EmailValidation } from './email-validation'
import { EmailValidator } from '../../protocols/email-validator'
import { InvalidParamError } from '../../errors/invalid-param-error'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

interface SutTypes {
  sut: EmailValidation
  emailValidatorStub: EmailValidator
}

const makeSut = (): SutTypes => {
  const emailValidatorStub = makeEmailValidator()
  const sut = new EmailValidation('email', emailValidatorStub)

  return {
    sut,
    emailValidatorStub

  }
}

describe('Email Validation', () => {
  it('should return an error if EmailValidatort returns false', () => {
    const { sut, emailValidatorStub } = makeSut()

    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValue(false)

    const error = sut.validate({ email: 'any_email@email.com' })

    expect(error).toEqual(new InvalidParamError('email'))
  })

  it('should call EmailValidator with correct email', () => {
    const { sut, emailValidatorStub } = makeSut()

    const isValidSpy = jest.spyOn(emailValidatorStub, 'isValid')

    sut.validate({ email: 'any_email@email.com' })

    expect(isValidSpy).toHaveBeenCalledWith('any_email@email.com')
  })

  it('should throw if EmailValidator throws', async () => {
    const { sut, emailValidatorStub } = makeSut()

    jest.spyOn(emailValidatorStub, 'isValid').mockImplementation(() => {
      throw new Error()
    })

    expect(sut.validate).toThrow()
  })
})
