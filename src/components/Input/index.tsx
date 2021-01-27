import {InputHTMLAttributes} from 'react'
import {Container} from './styles'
export default function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return (
    <div>
      <Container {...rest} />
    </div>
  )
}
