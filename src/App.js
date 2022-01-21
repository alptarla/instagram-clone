import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import AppLayout from './components/Layout'
import Router from './router'
import { getProfileById } from './store/slices/profile'

function App() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  // ** current user profile
  useEffect(() => {
    dispatch(getProfileById({ id: user.id }))
  }, [user, dispatch])

  return (
    <AppLayout>
      <ToastContainer position="top-right" autoClose={2000} pauseOnFocusLoss />
      <Router />
    </AppLayout>
  )
}

export default App
