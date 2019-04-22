import React, { Fragment, useState } from 'react';

interface IInputProps {
  name: string,
  value?: string,
  error?: string,
  onChange: () => void
}

const Input: React.SFC<IInputProps> = ({ name, value, error }) => (
  <Fragment>
    <input name={name} value={value} />
    {error && <span>{error}</span>}
  </Fragment>
)

interface IFormProps {
  children: any
}

const Form: React.SFC<IFormProps> = ({ children }) => {
  const [error, setError] = useState('')

  const handleClick = () => {
    setError('Input has error')
  }

  return (
    <form>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          error
        })
      })}
      <button type='button' onClick={handleClick}>Set error</button>
    </form>
  )
}

const App = () => {
  const handleChange = () => {}

  return (
    <Form>
      <Input name='email' value='' onChange={handleChange} />
    </Form>
  )
}

export default App;
