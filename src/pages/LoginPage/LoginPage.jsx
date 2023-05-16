import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { selectIsLogin } from 'redux/auth/authSelectors';
import AuthForm from 'components/AuthForm/AuthForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  // if (isLogin) {
  //   return <Navigate to="/products" />;
  // }

  const handleSubmit = data => {
    // console.log(data);
    dispatch(login(data));
  };
  return <AuthForm onSubmit={handleSubmit} />;
};

export default LoginPage;
