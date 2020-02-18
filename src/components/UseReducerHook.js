import React, { useReducer } from 'react';
import { counterReducer, initialState } from './reducers/reducers'

function UseReducerHook() {
  // const [state, dispatch] = userReducer(reducer, startingState)
  const [ state, dispatch ] = useReducer(counterReducer, initialState)
  return (
    <>
      <hr />
      <strong>useReducer</strong> hook here .... <br /><br />
      counter { state.counter }
      <br />
      <button onClick={ () => dispatch({ type: 'INCREMENT', payload: 5 }) }>Increment</button>
      <button onClick={ () => dispatch({ type: 'DECREMENT', payload: 5 }) }>Decrement</button>
      <hr />
    </>
  );
}

export default UseReducerHook
