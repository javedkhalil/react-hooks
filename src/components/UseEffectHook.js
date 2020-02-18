import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  
  const [users, setUsers] = useState()
  
  useEffect(() => {
    requestUsers()
    return () => {
      console.log("cleanup code here... clear stuff here")
    }
  },[])
  // [] above is mendatory to avoid infinite loop

  const requestUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsondata = await response.json();
    // console.log(jsondata);
    setUsers(jsondata)
  }

  return (
    <>
      <hr />
      <strong>useEffect</strong> hook here .... data loaded through async await fetch api call<br /><br />
        { users !=='' && users ? users.map(user => <div key={ user.id }>{ user.name }</div>) : <p>Loading...</p> }
      <hr />
    </>
  );
}

export default UseEffectHook;
