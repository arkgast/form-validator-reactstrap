import React, { useState, useEffect } from 'react'

import { IFormProps } from './form.interface'
import context from '../context'

const Form: React.SFC<IFormProps> = ({ onSubmit, children }) => {
  const [fields, setField] = useState<any>({})

  const callAll = (...fns: Array<Function>) =>
    (...args: Array<any>) => fns.forEach(fn => fn && fn(...args))

  const updateField = (newField: any) => {
    const { validators, errorMessages, onChange } = newField
    setField((currentField: any) => ({
      ...currentField,
      [newField.name]: {
        errorMessages,
        validators,
        onChange: callAll(handleChange, onChange)
      }
    }))
  } 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('<== FORM')
    console.log(fields)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event)
    console.log(fields)
  }

  return (
    <context.Provider value={{ fields, updateField }}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </context.Provider>
  )
}

export default Form
