import { useEffect } from 'react'
import { AppRouter } from './Routers/AppRouter'

import { fetchItems } from './App/Slices/Items/thunks'

import './Styles/App-Style.css'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './App/store'

export const App = () => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}
