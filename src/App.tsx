import React, { Fragment, useState } from 'react';

import Form from './components/Form'
import Input from './components/Input'

const App = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name)
  }

  return (
    <Form>
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
    </Form>
  )
}

export default App;
