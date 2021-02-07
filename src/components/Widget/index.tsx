import {Container, WidgetHeader, WidgetContent, ComeBack} from './styles'
import Navigate from '../Navigate'
interface IWidgetProps {
  title?: string
  total?: number
  current?: number
  comeBack?: string
  next?: () => void
  prev?: () => void
}

const Widget: React.FC<IWidgetProps> = ({
  title,
  total,
  current,
  comeBack,
  next,
  prev,
  children,
}) => {
  let justifyContentHeader = 'space-between'
  if (!total) {
    justifyContentHeader = 'flex-start'
  }
  return (
    <Container>
      {title && (
        <WidgetHeader justifyContent={justifyContentHeader}>
          {comeBack && (
            <a href={comeBack}>
              <ComeBack />
            </a>
          )}
          <h1>{title}</h1>
          {total && (
            <Navigate total={total} current={current} next={next} prev={prev} />
          )}
        </WidgetHeader>
      )}
      <WidgetContent>{children}</WidgetContent>
    </Container>
  )
}
export default Widget
