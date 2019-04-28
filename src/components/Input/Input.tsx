import React, { Fragment, useContext, useEffect } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

import IInputProps from './input.interface'
import context from '../context'

const fieldFactory = (field: any) => {
  return {
    name: field.name,
    value: field.value || '',
    validators: field.validators || [],
    errorMessages: field.errorMessages || [],
    errorMsgIdx: field.errorMsgIdx || -1
  }
}

const CInput: React.SFC<IInputProps> = ({
  name,
  value,
  label,
  validators,
  errorMessages,
  onChange,
  ...rest
}) => {
  const { fields, updateField } = useContext(context)

  useEffect(() => {
    const field = fieldFactory({ name, value, validators, errorMessages })
    updateField(field)
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    updateField({ name, value })
    onChange(event)
  }

  let error = ''
  if (fields[name]) {
    const { errorMessages, errorMsgIdx } = fields[name]
    error = errorMessages[errorMsgIdx]
  }

  return (
    <Fragment>
      <FormGroup>
        <Label>{label}</Label>
        <Input
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {error && <span>{error}</span>}
      </FormGroup>
    </Fragment>
  )
}

export default CInput
