import React, { useState, useEffect, useMemo } from 'react';

function UseMemoHook() {
  
  const [fruits, setFruits] = useState()
  
  useEffect(() => {
    setFruits(fruitArray)
    return () => {
      console.log("cleanup code here... clear stuff here")
    }
  }, [])
  // [] above is mendatory to avoid infinite loop

  const fruitArray = useMemo(() => {
      return ["apple", "bananna", "orange"];
  }, [])

  return (
    <>
      <hr />
      <strong>useMemo</strong> hook here .... wrap a or value (array or object) or component inside useMemo and mention dependencies to avoid unnecessary rerender cycle (useMemo is for values, arrays, objects and not for functions) - its like shouldComponent<br /><br />
        { fruits !=='' && fruits ? fruits.map(fruit => <div key={ fruit }>{ fruit }</div>) : <p>Loading...</p> }<br />
      <hr />
    </>
  );
}

export default UseMemoHook;
