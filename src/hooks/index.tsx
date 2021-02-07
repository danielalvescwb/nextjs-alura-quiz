import {BreakPointProvider} from './MediaQuery'
import {ToastProvider} from './Toast'
import {QuizProvider} from './Quiz'

export const HooksProvider: React.FC = ({children}) => (
  <ToastProvider>
    <QuizProvider>
      <BreakPointProvider>{children}</BreakPointProvider>
    </QuizProvider>
  </ToastProvider>
)
