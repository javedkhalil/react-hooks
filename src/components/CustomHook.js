import React from 'react'
import useInput from './hooks/useInput'
import useCounter from './hooks/useCounter';

function CustomHook() {

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')
  const [email, bindEmail, resetEmail] = useInput('')

  // second custom hook > counter
  const [countOne, incrementOne, decementOne, resetOne] = useCounter(0)
  const [countTwo, incrementTwo, decementTwo, resetTwo] = useCounter(10)

  const submitHandler = e => {
    e.preventDefault()
    if(firstName && lastName && email) {
      alert(`Hello ${firstName} ${lastName}`)
      resetFirstName()
      resetLastName()
      resetEmail()
    } else {
      alert('please fill out form')
    }
  }

  return (
    <>
      <hr />
      <strong>Custom Hook </strong> .... Custon Input Hook<br /><br />
      <br />

      <form onSubmit={ submitHandler }>
        <input
          type="text"
          { ...bindFirstName }
          placeholder="First Name"
        />
        <input
          type="text"
          { ...bindLastName }
          placeholder="Last Name"
        />
        <input
          type="email"
          { ...bindEmail }
          placeholder="Email Address"
        />
        <button type="submit">Submit</button>
      </form>

      <br /><br />

      Counter Custom Hook <br />

      { countOne }
      <button onClick={ incrementOne }>Increment</button>
      <button onClick={ decementOne }>Decrement</button>
      <button onClick={ resetOne }>Reset</button>

      <br />

      { countTwo }
      <button onClick={ incrementTwo }>Increment</button>
      <button onClick={ decementTwo }>Decrement</button>
      <button onClick={ resetTwo }>Reset</button>

      <br /><br />
    </>
  );
}

export default CustomHook
