import React, { Fragment, useState } from 'react';

import Form from './components/Form'
import Input from './components/Input'

const App = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('<=== Form Event')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('<=== Input Event')
    const { name, value } = event.target
    console.log(name, value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name='email'
        value=''
        validators={['isEmail', 'isRequired']}
        errorMessages={['Should be an email', 'Should has a value']}
        onChange={handleChange}
      />
      <Input
        name='phone'
        value=''
        validators={['isNumber', 'isRequired']}
        errorMessages={['Should be a number', 'Should has a value']}
        onChange={handleChange}
      />
      <button>Submit</button>
    </Form>
  )
}

export default App;
