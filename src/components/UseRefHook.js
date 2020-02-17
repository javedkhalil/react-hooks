import React, { useRef } from 'react';

function UseRefHook() {
  const inputSelector = useRef(null);
  
  const selector = () => {
    inputSelector.current.focus();
  }

  return (
    <>
      <hr />
      <strong>useRef</strong> hook here .... accessing DOM nodes<br /><br />
        <input ref={ inputSelector }  /> <button onClick={ selector }>Click to Select Field</button>
      <hr />
    </>
  );
}

export default UseRefHook;
