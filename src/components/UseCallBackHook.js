import React, { useState, useEffect, useCallback } from 'react';

function UseCallBackHook() {
  
  const [users, setUsers] = useState()
  const [randNumber, setRandomNumber] = useState(0)
  
  useEffect(() => {
    randomNumber()
    requestUsers()
    return () => {
      console.log("cleanup code here... clear stuff here")
    }
  }, [])
  // [] above is mendatory to avoid infinite loop

  const requestUsers = useCallback( async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsondata = await response.json();
    // console.log(jsondata);
    setUsers(jsondata)
  }, [])

  const randomNumber = useCallback(() => {
    setRandomNumber(Math.random())
  }, [setRandomNumber])

  const reloadUsers = () => {
    requestUsers()
  }

  return (
    <>
      <hr />
      <strong>Random Number:</strong> { randNumber } <br />
      <strong>useCallback</strong> hook here .... wrap a function inside useCallback and mention dependencies to avoid unnecessary rerender cycle (inline callback and an array of dependencies / useCallback is for function)<br /><br />
        { users !=='' && users ? users.map(user => <div key={ user.id }>{ user.name }</div>) : <p>Loading...</p> }<br />
        <button onClick={ reloadUsers }>Reload Users</button>
      <hr />
    </>
  );
}

export default UseCallBackHook;
