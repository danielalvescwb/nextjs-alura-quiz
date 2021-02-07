import {createContext, useCallback, useState, useContext} from 'react'
import api from '../services/api'

interface ITheme {
  colors: {
    primary: string
    secondary: string
    mainBg: string
    contrastText: string
    wrong: string
    success: string
  }
  borderRadius: string
}
export interface IQuestions {
  image: string
  title: string
  description: string
  answer: number
  alternatives: string[]
}

export interface QuizState {
  bg: string
  title: string
  description: string
  questions: IQuestions[]
  external: string[]
  theme: ITheme
}
interface QuizContextData {
  db: QuizState
  getQuiz(url: string): Promise<void>
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData)

export const QuizProvider: React.FC = ({children}) => {
  const [data, setData] = useState<QuizState>()

  const getQuiz = useCallback(async (url) => {
    const response = await api.post(url)
    setData(response.data)
  }, [])

  return (
    <QuizContext.Provider value={{db: data, getQuiz}}>
      {children}
    </QuizContext.Provider>
  )
}
export function useQuiz(): QuizContextData {
  const context = useContext(QuizContext)
  return context
}
