import { useState } from 'react'
import BtnGet from './components/get-button'
import AuthForm from './components/auth-form'

import './App.css'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const handleLogout = () =>{
    localStorage.removeItem('token');
    setToken(null)
  }

  if (!token){
    return <AuthForm onLogin={setToken}/>
  }

  return (
    <>
      <div>
        <button onClick={handleLogout}>Wyloguj się</button>
        <BtnGet/>
      </div>
    </>
  )
}

export default App
