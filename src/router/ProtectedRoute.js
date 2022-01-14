import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectPath = '/auth/login' }) => {
  const navigate = useNavigate()
  const isAuth = true

  if (!isAuth) navigate(redirectPath)
  return children
}

export default ProtectedRoute
