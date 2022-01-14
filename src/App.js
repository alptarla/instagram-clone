import { ToastContainer } from 'react-toastify'
import AppLayout from './components/Layout'
import Router from './router'

function App() {
  return (
    <AppLayout>
      <ToastContainer position="top-right" autoClose={2000} pauseOnFocusLoss />
      <Router />
    </AppLayout>
  )
}

export default App
