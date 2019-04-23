import React, { Fragment, useContext, useEffect } from 'react'

import IInputProps from './input.interface'
import context from '../context'

const Input: React.SFC<IInputProps> = ({
  name,
  value,
  error,
  validators,
  errorMessages,
  onChange,
  ...rest
}) => {
  const { fields, updateField } = useContext(context)

  useEffect(() => {
    updateField({ name, validators, errorMessages, onChange })
  }, [])

  const handleChange = (fields[name] && fields[name].onChange) || function () {}

  return (
    <Fragment>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Fragment>
  )
}

export default Input
