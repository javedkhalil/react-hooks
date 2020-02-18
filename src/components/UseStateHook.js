import React, { useState, useContext } from 'react';
import { AuthContext } from './authContext'
import AuthContextProvider from './authContext'

function UseStateHook() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    // setCounter(counter + 1)
    setCounter(prevCounterValue => prevCounterValue + 1)
  }
  
  const loginContext = useContext(AuthContext);
  console.log(loginContext.isAuth)

  return (
    <AuthContextProvider>
      <hr />
      <br />
      [ <strong>{ loginContext.isAuth === true ? "Logged In" : "Not Logged In" }</strong> ]
      (from context provider)
      <br /><br />
      <strong>useState</strong> hook here .... <br /><br />
      <button onClick={ increment }>Counter { counter }</button>
      <hr />
    </AuthContextProvider>
  );
}

export default UseStateHook;
