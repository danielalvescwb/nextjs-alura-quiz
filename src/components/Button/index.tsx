import {ButtonHTMLAttributes} from 'react'
import {Container} from './styles'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Container {...props} />
}
export default Button
