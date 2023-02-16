import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/users" />;
  }
  return <Outlet />;
};

export default PublicRoute;
