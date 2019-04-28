import React, { useState } from 'react'
import { Form } from 'reactstrap'

import { IFormProps } from './form.interface'
import { validator, priority } from '../validation-rules'
import context from '../context'

interface IField {
  name: string
  value?: string | number
  validators?: Array<string>
  errorMessages?: Array<string>
  errorMsgIdx?: number
  [key: string]: any
}

const CForm: React.SFC<IFormProps> = ({ onSubmit, children }) => {
  const [fields, setField] = useState<any>({})

  const updateField = (field: IField) => {
    setField((currentField: IField) => {
      const newField = {
        ...currentField[field.name],
        ...field
      }
      return {
        ...currentField,
        [newField.name]: newField
      }
    })
  }

  const validate = () => {
    const fieldNames = Object.keys(fields)
    fieldNames.forEach(fieldName => {
      const { validators, value, error } = fields[fieldName]
      const allAreValid = validators.every((validatorKey: any) => {
        const validationSuccess = validator[validatorKey](value)
        const errorMsgIdx = validators.indexOf(validatorKey)
        if (!validationSuccess) {
          updateField({ name: fieldName, errorMsgIdx })
        }
        return validationSuccess
      })

      if (allAreValid) {
        updateField({ name: fieldName, errorMsgIdx: -1 })
      }
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit(event)
    validate()
  }

  return (
    <context.Provider value={{ fields, updateField }}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </context.Provider>
  )
}

export default CForm
