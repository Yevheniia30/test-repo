import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// пускає на оригінальний маршрут якщо юзер не авторизований і переводить на приватний якщо авторизований

const PublicRoute = () => {
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/products" />;
  }
  return <Outlet />;
};

export default PublicRoute;
