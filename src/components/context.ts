import { createContext } from 'react'

interface IContext {
  fields: any,
  updateField: any
}

const context = createContext<IContext>({ fields: {}, updateField: () => {} })

export default context
