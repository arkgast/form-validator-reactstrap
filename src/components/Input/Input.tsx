import React, { Fragment } from 'react'

import IInputProps from './input.interface'

const Input: React.SFC<IInputProps> = ({ name, value, error, ...rest }) => {
  const { validators, errorMessages, ...pass } = rest
  return (
    <Fragment>
      <input name={name} value={value} {...pass} />
      {error && <span>{error}</span>}
    </Fragment>
  )
}

export default Input
