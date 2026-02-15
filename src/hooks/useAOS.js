import { useEffect } from 'react'
import AOS from 'aos'

export const useAOS = () => {
  useEffect(() => {
    AOS.refresh()
  }, [])
}
