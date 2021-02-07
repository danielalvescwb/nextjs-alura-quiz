import styled from 'styled-components'
import {BsCaretLeftFill, BsCaretRightFill} from 'react-icons/bs'

export const Prev = styled(BsCaretLeftFill)`
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
export const Next = styled(BsCaretRightFill)`
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
