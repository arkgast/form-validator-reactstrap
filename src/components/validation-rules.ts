import { isEmpty, isEmail, isInt } from 'validator'

export const priority = ['isRequired', 'isEmail', 'isString', 'isNumber']

interface IValidator {
  isRequired: (value: any) => boolean
  isString: (value: any) => boolean
  isEmail: (value: any) => boolean
  isNumber: (value: any) => boolean
  [key: string]: (value: any) => boolean
}

export const validator: IValidator = {
  isRequired: (value: any) => !isEmpty(value),
  isString: (value: any) => !isEmpty(value) && typeof value === 'string',
  isEmail: (value: any) => isEmail(value),
  isNumber: (value: any) => isInt(value)
}
