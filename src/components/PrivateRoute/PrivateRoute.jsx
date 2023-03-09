import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// пускає на оригінальний маршрут якщо юзер  авторизований і переводить на публічний якщо не авторизований

const PrivateRoute = () => {
  const isLogin = useAuth();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
