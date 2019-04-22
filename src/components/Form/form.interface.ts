import { FormEvent } from "react";

export interface IFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void,
  children: any
}

export interface IState {
  [key: string]: string
}
