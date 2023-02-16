import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin;
};
