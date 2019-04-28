import React, { Fragment, useState } from 'react'
import { Button, Col, Container, FormGroup, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Form from './components/Form'
import Input from './components/Input'


const App = () => {
  const [model, setModel] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('<=== Save to db')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setModel(currentModel => ({
      ...currentModel,
      [name]: value
    }))
  }

  return (
    <Container className='mt-5 pt-5'>
      <Row>
        <Col>
          <h1 className='my-5'>Form validator prototype</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              label='Name'
              name='name'
              value={model.name}
              validators={['isString']}
              errorMessages={['Should be any string']}
              onChange={handleChange}
            />
            <Input
              label='Email'
              name='email'
              value={model.email}
              validators={['isEmail', 'isRequired']}
              errorMessages={['Should be an email', 'Should has a value']}
              onChange={handleChange}
            />
            <Input
              label='Phone'
              name='phone'
              value={model.phone}
              validators={['isNumber', 'isRequired']}
              errorMessages={['Should be a number', 'Should has a value']}
              onChange={handleChange}
            />
            <FormGroup>
              <Button block color='primary' type='submit' size='lg'>Submit</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
