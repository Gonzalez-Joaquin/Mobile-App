import { useState } from 'react'

import { Welcome } from './Pages/Welcome/Welcome'
import { Login } from './Pages/Login/Login'
import { StartScreen } from './Pages/StartScreen/StartScreen'

import './Styles/App-Style.css'

function App() {

  const [page, setPage] = useState('start')

  return (
    <>
      {page === 'start' && (
        <StartScreen onClick={() => setPage('login')} />
      )}
      {page === 'login' && (
        <Login onClick={() => setPage('welcome')} />
      )}
      {page === 'welcome' && (
        <Welcome />
      )}
    </>
  )
}

export default App
