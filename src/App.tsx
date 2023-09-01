import { getItems } from './App/Slices/Items/thunks'

import { AppRouter } from './Routers/AppRouter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


import './Styles/App-Style.css'

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <AppRouter />
  )
}
