import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLogin = useAuth();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
