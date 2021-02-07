import styled from 'styled-components'
import {FiCircle, FiDisc, FiCheckCircle, FiXCircle} from 'react-icons/fi'

interface IButtonQuestion {
  selected?: boolean
  isCorrect?: boolean
}

export const ContentQuestion = styled.div`
  padding: 8px 32px 10px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonQuestion = styled.button<IButtonQuestion>`
  background-color: ${({theme, isCorrect}) =>
    isCorrect
      ? theme.currentTheme.colors.success
      : theme.currentTheme.colors.wrong};
  color: ${({theme}) => theme.currentTheme.colors.contrastText};
  border-radius: ${({theme}) => theme.currentTheme.borderRadius};
  border: ${({selected}) => (selected ? '2px solid' : '2px solid #711111')};
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  cursor: pointer;
  margin-top: 5px;
  text-align: left;

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`

export const ContainerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 8px;
  background-color: ${({theme}) => theme.currentTheme.colors.wrong};
  * {
    margin: 0;
  }
`

export const CircleEmpty = styled(FiCircle)<IButtonQuestion>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 8px;
  border-radius: 50%;
  border: ${({theme, selected}) =>
    selected
      ? '2px solid #FFFBFF'
      : `1px solid ${theme.currentTheme.colors.primary}`};
  color: ${(props) => props.theme.currentTheme.colors.primary};

  &:hover {
    background-color: #9e370a;
  }
`

export const CircleFilled = styled(FiDisc)<IButtonQuestion>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 8px;
  border-radius: 50%;
  border: ${({theme, selected}) =>
    selected
      ? '2px solid #FFFBFF'
      : `1px solid ${theme.currentTheme.colors.primary}`};
  color: ${(props) => props.theme.currentTheme.colors.primary};

  &:hover {
    background-color: #9e370a;
  }
`
export const CircleSuccess = styled(FiCheckCircle)<IButtonQuestion>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 8px;
  border-radius: 50%;
  border: ${({theme, selected}) =>
    selected
      ? '2px solid #FFFBFF'
      : `1px solid ${theme.currentTheme.colors.primary}`};
  color: #baffbc;
  fill: #4caf50;

  &:hover {
    background-color: #9e370a;
  }
`

export const CircleError = styled(FiXCircle)<IButtonQuestion>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 8px;
  border-radius: 50%;
  color: #6a2109;
  fill: red;
  border: ${({theme, selected}) =>
    selected
      ? '2px solid #FFFBFF'
      : `1px solid ${theme.currentTheme.colors.primary}`};
  color: ${(props) => props.theme.currentTheme.colors.primary};

  &:hover {
    background-color: #9e370a;
  }
`
