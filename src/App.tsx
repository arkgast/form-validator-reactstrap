import React, { Fragment, useState } from 'react';

import Form from './components/Form'
import Input from './components/Input'

const App = () => {
  const [model, setModel] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('<=== Form Event Submit')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('<=== APP')
    const { name, value } = event.target
    setModel(currentModel => ({
      ...currentModel,
      [name]: value
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name='name'
        value={model.name}
        validators={['isString']}
        errorMessages={['Should be any string']}
        onChange={handleChange}
      />
      <Input
        name='email'
        value={model.email}
        validators={['isEmail', 'isRequired']}
        errorMessages={['Should be an email', 'Should has a value']}
        onChange={handleChange}
      />
      <Input
        name='phone'
        value={model.phone}
        validators={['isNumber', 'isRequired']}
        errorMessages={['Should be a number', 'Should has a value']}
        onChange={handleChange}
      />
      <button>Submit</button>
    </Form>
  )
}

export default App;
