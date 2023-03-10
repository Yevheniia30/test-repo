import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLocation } from 'redux/auth/authSelectors';

// пускає на оригінальний маршрут якщо юзер не авторизований і переводить на приватний якщо авторизований

const PublicRoute = () => {
  const { isLogin } = useAuth();
  // const location = localStorage.getItem('location');
  const location = useSelector(selectLocation);
  if (isLogin) {
    return <Navigate to={location ?? '/products'} />;
  }
  return <Outlet />;
};

export default PublicRoute;
