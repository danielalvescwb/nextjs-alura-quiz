import {useCallback, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {DefaultTheme, ThemeProvider} from 'styled-components'

import Background from '../../components/Background'

import Widget from '../../components/Widget'
import Content from '../../components/Content'
import Logo from '../../components/Logo'
import {
  ButtonQuestion,
  ContentQuestion,
  CircleEmpty,
  ContainerCircle,
  CircleFilled,
  CircleSuccess,
  CircleError,
} from '../../styles/quiz'
import Button from '../../components/Button'
import {useToast} from '../../hooks/Toast'
import {useQuiz, IQuestions} from '../../hooks/Quiz'

interface IQuestionsCostomer extends IQuestions {
  isCorrect?: boolean
  answered?: number
}

const Quiz: React.FC = () => {
  const router = useRouter()
  const {db} = useQuiz()
  const {addToast} = useToast()
  const {query} = useRouter()
  const [stateQuestions, setStateQuestions] = useState<IQuestionsCostomer[]>()
  const [lengthStateQuestions, setLengthStateQuestions] = useState<number>()
  const [currentIndexQuestion, setcurrentIndexQuestion] = useState(0)
  const [allQuestionsAnswered, setallQuestionsAnswered] = useState(false)
  const [send, setSend] = useState(false)
  const [changeTheme, setChangeTheme] = useState<DefaultTheme>()

  useEffect(() => {
    if (db) {
      setStateQuestions(db.questions)
      setLengthStateQuestions(db.questions.length - 1)
      setChangeTheme({
        currentTheme: db.theme,
        bg: db.bg,
      })
    } else {
      router.push('/')
    }
  }, [db])

  const changeAnswer = useCallback(
    (e) => {
      if (send) {
        addToast({
          type: 'info',
          title: `Você já finalizou o Quiz, clique em tentar novamente`,
        })
        return
      }
      let isallQuestionsAnswered = true
      const newStateQuestions = stateQuestions.map((question, index) => {
        if (index === currentIndexQuestion) {
          question.answered = parseInt(e.target.value)
        }
        if (question.answered === undefined) {
          isallQuestionsAnswered = false
        }
        return question
      })
      setallQuestionsAnswered(isallQuestionsAnswered)
      setStateQuestions(newStateQuestions)
    },
    [currentIndexQuestion, send, lengthStateQuestions, allQuestionsAnswered],
  )

  const handleSubmit = useCallback(() => {
    setSend(true)
    // setcurrentIndexQuestion(0)
    const newStateQuestions = stateQuestions.map((question) => {
      question.isCorrect = question.answer === question.answered
      return question
    })
    setStateQuestions(newStateQuestions)
  }, [stateQuestions])

  const handlePreviousQuestion = useCallback(() => {
    if (currentIndexQuestion > 0) {
      setcurrentIndexQuestion(currentIndexQuestion - 1)
    } else if (currentIndexQuestion === 0) {
      addToast({
        type: 'info',
        title: `Essa é a primeira questão`,
        description: `Clique na seta ao lado para ir para a próxima`,
      })
    }
  }, [currentIndexQuestion])

  const handleNextQuestion = useCallback(() => {
    if (currentIndexQuestion < lengthStateQuestions) {
      setcurrentIndexQuestion((prev) => prev + 1)
    } else if (
      currentIndexQuestion === lengthStateQuestions &&
      allQuestionsAnswered &&
      !send
    ) {
      addToast({
        type: 'success',
        title: `Você respondeu todas as questões!`,
        description: `Clique em finalizar para verificar as respostas`,
      })
    } else {
      addToast({
        type: 'info',
        title: `Essa é a última questão`,
        description: `Clique na seta ao lado para voltar para a anterior`,
        time: 5,
      })
    }
  }, [lengthStateQuestions, currentIndexQuestion, allQuestionsAnswered, send])

  const handleTryAgin = useCallback(() => {
    setStateQuestions((prev) => {
      const question = prev.map((item, i) => {
        item.answered = undefined
        return item
      })
      return question
    })
    setcurrentIndexQuestion(0)
    setSend(false)
    setallQuestionsAnswered(false)
  }, [db])

  const handleQuestionSelected = useCallback((e) => {
    setcurrentIndexQuestion(e)
  }, [])

  return (
    <>
      {changeTheme && (
        <ThemeProvider theme={changeTheme}>
          <Background alt="backgound" src={changeTheme.bg} />
          <Content>
            <Logo />
            {stateQuestions[currentIndexQuestion] && (
              <Widget
                title={`Bem vindo ${query.name}`}
                total={lengthStateQuestions + 1}
                current={currentIndexQuestion + 1}
                next={handleNextQuestion}
                prev={handlePreviousQuestion}
                comeBack="../../"
              >
                <img
                  alt="Descrição"
                  style={{
                    width: '100%',
                    maxHeight: '350px',
                    objectFit: 'cover',
                  }}
                  src={stateQuestions[currentIndexQuestion].image}
                />
                <ContainerCircle>
                  {stateQuestions.map(({answered, isCorrect}, i) => {
                    if (answered >= 0 && !send) {
                      return (
                        <CircleFilled
                          selected={currentIndexQuestion === i}
                          key={`CircleEmpty-${i}`}
                          onClick={() => handleQuestionSelected(i)}
                        />
                      )
                    } else if (send && isCorrect) {
                      return (
                        <CircleSuccess
                          key={`CircleEmpty-${i}`}
                          onClick={() => handleQuestionSelected(i)}
                          selected={currentIndexQuestion === i}
                        />
                      )
                    } else if (send && !isCorrect) {
                      return (
                        <CircleError
                          key={`CircleEmpty-${i}`}
                          onClick={() => handleQuestionSelected(i)}
                          selected={currentIndexQuestion === i}
                        />
                      )
                    } else {
                      return (
                        <CircleEmpty
                          key={`CircleEmpty-${i}`}
                          onClick={() => handleQuestionSelected(i)}
                          selected={currentIndexQuestion === i}
                        />
                      )
                    }
                  })}
                </ContainerCircle>
                <ContentQuestion>
                  <h1>{stateQuestions[currentIndexQuestion].title}</h1>
                  <p>{stateQuestions[currentIndexQuestion].description}</p>
                  {stateQuestions[currentIndexQuestion].alternatives.map(
                    (question, i) => {
                      return (
                        <ButtonQuestion
                          key={i}
                          value={i}
                          onClick={changeAnswer}
                          selected={
                            stateQuestions[currentIndexQuestion].answered === i
                          }
                          isCorrect={
                            send
                              ? i ===
                                stateQuestions[currentIndexQuestion].answer
                              : false
                          }
                        >
                          {question}
                        </ButtonQuestion>
                      )
                    },
                  )}
                </ContentQuestion>
                {!send && (
                  <div
                    style={{
                      marginTop: 10,
                      marginRight: 32,
                      marginLeft: 32,
                      marginBottom: 10,
                    }}
                  >
                    <Button
                      type="submit"
                      disabled={!allQuestionsAnswered}
                      onClick={handleSubmit}
                    >
                      Finalizar
                    </Button>
                  </div>
                )}
                {send && (
                  <ContentQuestion>
                    <Button
                      type="submit"
                      disabled={!allQuestionsAnswered}
                      onClick={handleTryAgin}
                    >
                      Tentar novamente
                    </Button>
                  </ContentQuestion>
                )}
              </Widget>
            )}
          </Content>
        </ThemeProvider>
      )}
    </>
  )
}
export default Quiz
