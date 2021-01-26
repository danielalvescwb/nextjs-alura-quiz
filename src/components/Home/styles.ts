import styled from 'styled-components'
interface IProps {
  backgroundImage: string
}

export const HomeContainer = styled.div<IProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-color: ${({theme}) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({theme}) => theme.colors.mainBg}
        ),
        url(${({backgroundImage}) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 450px;
  padding-top: 45px;
  /* margin: auto 10%; */
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`
