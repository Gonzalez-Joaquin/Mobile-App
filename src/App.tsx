import { useEffect } from 'react'
import { AppRouter } from './Routers/AppRouter'

import './Styles/App-Style.css'
import { useDispatch } from 'react-redux'
import { fetchItems } from './App/Slices/Items/thunks'
import { fetchUsers } from './App/Slices/User/thunks'

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( fetchItems() )
    dispatch( fetchUsers() )
  }, [])

  return (
    <AppRouter />
  )
}
