// custom hook > counter

import { useState } from 'react'

function useCounter(initialState) {
  const [counter, setCounter] = useState(initialState)
  
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1)
  }
  const reset = () => {
    setCounter(initialState)
  }

  return [counter, increment, decrement, reset]
}

export default useCounter
