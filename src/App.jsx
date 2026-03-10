import { useState } from 'react'
import BtnGet from './components/get-button'
import FormPost from './components/post-form'
import LoginForm from './components/login-form'

import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  if (!token){
    return <LoginForm onLogin={setToken}/>
  }

  return (
    <>
      <div>
        <BtnGet/>
      </div>
    </>
  )
}

export default App
