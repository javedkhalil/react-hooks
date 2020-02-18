
export const initialState = {
  counter: 0
}

const increment = (state, number) => {
  return { counter: state.counter + number }
}

const decrement = (state, number) => {
  return { counter: state.counter - number }
}

export const counterReducer = (state, action) => {
  // console.log(state.counter)
  switch (action.type) {
    case 'INCREMENT':
      return increment(state, action.payload)
    case 'DECREMENT':
      return decrement(state, action.payload)
    default:
      // return state
      throw new Error("Should not get here, handle all cases above...")
  }
}
