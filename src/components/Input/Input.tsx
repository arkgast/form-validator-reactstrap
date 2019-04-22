import React, { Fragment } from 'react'

import IInputProps from './input.interface'

const Input: React.SFC<IInputProps> = ({ name, value, error, ...rest }) => (
  <Fragment>
    <input name={name} value={value} {...rest} />
    {error && <span>{error}</span>}
  </Fragment>
)

export default Input