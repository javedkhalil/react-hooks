import React from 'react';
import './App.css';
import UseStateHook from './components/UseStateHook'
import UseEffectHook from './components/UseEffectHook'
import UseRefHook from './components/UseRefHook'
import UseCallBackHook from './components/UseCallBackHook'
import UseMemoHook from './components/UseMemoHook'
import AuthContextProvider from './components/authContext'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <br />
        React Hooks ...
        <UseStateHook />
        <UseEffectHook />
        <UseRefHook />
        <UseCallBackHook />
        <UseMemoHook />
      </div>
    </AuthContextProvider>
  );
}

export default App;
