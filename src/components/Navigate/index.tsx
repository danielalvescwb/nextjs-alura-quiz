import {Prev, Next} from './styles'
interface IProps {
  total: number
  current: number
  prev: () => void
  next: () => void
}

const Navigate: React.FC<IProps> = ({total, current, prev, next}) => {
  return (
    <>
      <Prev onClick={prev} />
      <span>{`${current} de ${total}`}</span>
      <Next onClick={next} />
    </>
  )
}

export default Navigate
