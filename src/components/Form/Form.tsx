import React, { useState, useEffect } from 'react'

import { IFormProps } from './form.interface'

const callAll = (...fns: any) => (...args: any) => fns.forEach((fn: any) => fn && fn(...args))

const Form: React.SFC<IFormProps> = ({ onSubmit, children }) => {
  const fields: any = {}

  useEffect(() => {
    console.log('<=== useEffect')
    console.log(fields)
  }, [fields])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('<=== FORM')
    onSubmit(event)
    console.log(fields)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('<=== FORM')
    const { name, value } = event.target
    console.log(name, value)
  }

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, childElement => {
        let fnOnChange = null
        const { validators, errorMessages, ...props } = childElement.props
        if (childElement.props.name) {
          fields[childElement.props.name] = {
            [childElement.props.name]: {
              validators,
              errorMessages
            }
          }
          fnOnChange = callAll(childElement.props.onChange, handleChange)
        }
        return React.cloneElement(childElement, {
          ...props,
          onChange: fnOnChange
        })
      })}
    </form>
  )
}

export default Form
