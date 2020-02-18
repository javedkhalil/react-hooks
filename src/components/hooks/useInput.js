// custom hook for input
// you can use stateful features useState, useEffect inside custom hook
// stateful logic will be different for each initialization of this hook anywhere

import { useState } from 'react'

const useInput = (initialValue) => {
  const [ value, setValue ] = useState(initialValue)
  // reset value
  const reset = () => {
    setValue(initialValue)
  }
  // bind value // these are 'value name' and 'onChangeHandler' combined that will be passed as props > ...bind
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, bind, reset]
}

export default useInput
