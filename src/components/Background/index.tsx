import {Container} from './styles'
import Image from 'next/image'
import {useBreakPoint} from '../../hooks/MediaQuery'

interface IImageProps {
  alt: string
  src: string
}

const Content: React.FC<IImageProps> = ({alt, src}) => {
  const {addBreakPoint} = useBreakPoint()
  const device = addBreakPoint('500')
  return (
    <Container>
      {device ? (
        <Image
          alt={alt}
          src={src}
          layout="responsive"
          width={480}
          height={270}
        />
      ) : (
        <Image alt={alt} src={src} layout="fill" objectFit="cover" />
      )}
    </Container>
  )
}
export default Content
