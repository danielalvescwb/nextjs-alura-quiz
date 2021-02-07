import {useRouter} from 'next/router'
import {useState, useCallback, useEffect} from 'react'
import {DefaultTheme, ThemeProvider} from 'styled-components'

import Content from '../components/Content'
import Logo from '../components/Logo'
import GitHubCorner from '../components/GitHubCorner'
import Footer from '../components/Footer'
import Widget from '../components/Widget'
import Button from '../components/Button'
import Input from '../components/Input/index'
import {useToast} from '../hooks/Toast'
import {QuizState, useQuiz} from '../hooks/Quiz'
import {Wrapper, Text} from '../styles/home'
import {externalToSlug} from '../util'

const Home = (): JSX.Element => {
  const {addToast} = useToast()
  const {db, getQuiz} = useQuiz()
  const router = useRouter()

  const [quiz, setQuiz] = useState<QuizState>()
  const [name, setName] = useState('')
  const [changeTheme, setChangeTheme] = useState<DefaultTheme>()
  const [isDefaultQuizSelected, setIsDefaultQuizSelected] = useState(true)

  useEffect(() => {
    getQuiz('https://nextjs-alura-quiz.vercel.app/api/db')
  }, [])
  useEffect(() => {
    if (db) {
      setQuiz(db)
      setChangeTheme({
        currentTheme: db.theme,
        bg: db.bg,
      })
    }
  }, [db])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      addToast({
        type: 'success',
        title: `Welcome ${name}.`,
        time: 5,
      })
      router.push(`/quiz/${name}`)
    },
    [name],
  )
  const handleChangeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const handleQuiz = useCallback(
    (i) => {
      const changeQuiz = quiz.external.filter((item, index) => index === i)
      getQuiz(`${changeQuiz}api/db`)
      setIsDefaultQuizSelected(false)
    },
    [quiz],
  )
  const handleQuizDefault = useCallback(() => {
    setIsDefaultQuizSelected(true)
    getQuiz('https://nextjs-alura-quiz.vercel.app/api/db')
  }, [])

  return (
    <>
      {changeTheme && (
        <ThemeProvider theme={changeTheme}>
          <Content>
            <Logo className="logo" />
            <Widget title={!quiz ? 'Carregando...' : quiz.title}>
              <Wrapper>
                <h2>
                  <Text>{!quiz ? 'Carregando...' : quiz.description}</Text>
                </h2>
                <form onSubmit={handleSubmit}>
                  <Input
                    onChange={handleChangeName}
                    placeholder="Informe seu nome"
                  />
                  <Text>Informe um nome para iniciar:</Text>
                  <Button type="submit" disabled={name.length === 0}>
                    {quiz && quiz.description && <span>Iniciar</span>}
                  </Button>
                </form>
              </Wrapper>
            </Widget>
            <Widget>
              <Wrapper>
                {!isDefaultQuizSelected && (
                  <>
                    <Button onClick={handleQuizDefault}>
                      DANIELALVESCWB/QUIZ-MARIO
                    </Button>
                  </>
                )}
                <Text>Selecione outro quiz:</Text>
                {!quiz
                  ? 'Carregando...'
                  : quiz.external.map((item, i) => {
                      const [projectName, githubUser] = externalToSlug(item)
                      return (
                        <Button
                          key={`external${i}`}
                          onClick={() => handleQuiz(i)}
                        >
                          {`${githubUser}/${projectName}`}
                        </Button>
                      )
                    })}
              </Wrapper>
            </Widget>
            <Footer />
          </Content>
          <GitHubCorner projectUrl="https://github.com/danielalvescwb/nextjs-alura-quiz" />
        </ThemeProvider>
      )}
    </>
  )
}
export default Home
