import { useState } from 'react'
import { Text } from './Components/Typography/Typography'
import { LoadingScreen } from './Page/LoadingScreen/LoadingScreen'
import { Login } from './Pages/Login/Login'
import './Styles/App-Style.css'

function App() {
  
  const [page, setPage] = useState(Boolean)
  
  return page? <Login /> : <LoadingScreen /> 
}

export default App
