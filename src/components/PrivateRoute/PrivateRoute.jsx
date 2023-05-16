import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLocation } from 'redux/auth/authSlice';

// пускає на оригінальний маршрут якщо юзер  авторизований і переводить на публічний якщо не авторизований

const PrivateRoute = () => {
  const { isLogin, token } = useAuth();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    // localStorage.setItem('location', pathname);
    dispatch(setLocation(pathname));
  }, [dispatch, pathname]);

  if (!isLogin && token) {
    return <p>...Page is loading...</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
