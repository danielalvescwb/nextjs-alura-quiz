import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react'

interface BreakPointData {
  addBreakPoint(width: string): boolean
}
export interface ModalProps {
  id: string
}

const BreakPoint = createContext<BreakPointData>({} as BreakPointData)

export const BreakPointProvider: React.FC = ({children}) => {
  const addBreakPoint = (width: string) => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    }, [])

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`)
      media.addListener(updateTarget)

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true)
      }

      return () => media.removeListener(updateTarget)
    }, [])

    return targetReached
  }

  return (
    <BreakPoint.Provider value={{addBreakPoint}}>
      {children}
    </BreakPoint.Provider>
  )
}

export function useBreakPoint(): BreakPointData {
  const context = useContext(BreakPoint)
  if (!context) {
    throw new Error('useBreakPoint must be used whithin a BreakPointProvider')
  }
  return context
}
