import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectPath = '/auth/login' }) => {
  const { user } = useSelector((state) => state.auth)

  if (!user) return <Navigate to={redirectPath} />
  return children
}

export default ProtectedRoute
