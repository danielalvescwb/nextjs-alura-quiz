import styled from 'styled-components'
import {transparentize} from 'polished'
import {BsArrowReturnLeft} from 'react-icons/bs'

interface IHeader {
  justifyContent?: string
}

export const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({theme}) => theme.currentTheme.colors.wrong};
  background-color: ${({theme}) =>
    transparentize(0.3, theme.currentTheme.colors.mainBg)};
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

export const WidgetHeader = styled.header<IHeader>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  padding: 18px 32px;
  background-color: ${({theme}) => theme.currentTheme.colors.wrong};
  flex-wrap: wrap;
  * {
    margin: 0;
  }
`

export const WidgetContent = styled.div`
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`
export const ComeBack = styled(BsArrowReturnLeft)`
  cursor: pointer;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  border-radius: 4px;

  color: ${(props) => props.theme.currentTheme.colors.primary};

  &:hover {
    background-color: #9e370a;
  }
`
