import { Route, Routes } from 'react-router-dom'
import Login from '../views/Login'
import Profile from '../views/Profile'
import SignUp from '../views/SignUp'
import Timeline from '../views/Timeline'
import ProtectedRoute from './ProtectedRoute'

const Router = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute redirectPath="/auth/login">
          <Timeline />
        </ProtectedRoute>
      }
    />
    <Route path="/auth/login" element={<Login />} />
    <Route path="/auth/sign-up" element={<SignUp />} />
    <Route
      path="/profile/me"
      element={
        <ProtectedRoute redirectPath="/auth/login">
          <Profile />
        </ProtectedRoute>
      }
    />
  </Routes>
)

export default Router
