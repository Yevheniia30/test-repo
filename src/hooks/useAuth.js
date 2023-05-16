import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);
  return { isLogin, token };
};
