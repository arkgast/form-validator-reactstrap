import { ChangeEvent } from 'react'

export default interface IInputProps {
  name: string,
  value?: string,
  validators: Array<string>,
  errorMessages: Array<string>,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

