import { Route, Routes } from 'react-router-dom';
import Login from '../views/Login';
import Profile from '../views/Profile';
import SignUp from '../views/SignUp';
import Timeline from '../views/Timeline';
import PostUpload from '../views/PostUpload';
import ProtectedRoute from './ProtectedRoute';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <ProtectedRoute redirectPath="/auth/login">
            <Timeline />
          </ProtectedRoute>
      )}
      />
      <Route
        path="/auth/login"
        element={<Login />}
      />
      <Route
        path="/auth/sign-up"
        element={<SignUp />}
      />
      <Route
        path="/profile/me"
        element={(
          <ProtectedRoute redirectPath="/auth/login">
            <Profile />
          </ProtectedRoute>
      )}
      />
      <Route
        path="/upload"
        element={(
          <ProtectedRoute redirectPath="/auth/login">
            <PostUpload />
          </ProtectedRoute>
      )}
      />
    </Routes>
  );
}

export default Router;
