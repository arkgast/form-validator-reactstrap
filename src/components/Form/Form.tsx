import React, { useState } from 'react'

import { IFormProps, IState } from './form.interface'

const state: IState = {
  email: '',
  phone: ''
}

const Form: React.SFC<IFormProps> = ({ children }) => {
  const [error, setError] = useState(state)

  // Set error for email
  const handleClick = (name: string) => () => {
    setError({
      ...error,
      [name]: `Error for ${name}`
    })
  }

  return (
    <form>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          error: error[child.props.name]
        })
      })}
      <button type='button' onClick={handleClick('email')}>Set email error</button>
      <button type='button' onClick={handleClick('phone')}>Set phone error</button>
    </form>
  )
}

export default Form
