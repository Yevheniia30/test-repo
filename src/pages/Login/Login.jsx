import Register from 'components/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authOperations';
// import { Navigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  // const isLogin = useSelector(state => state.auth.isLogin);

  const handleSubmit = data => {
    // e.preventDefault();
    dispatch(login(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/users" />;
  // }

  return <Register onSubmit={handleSubmit} />;
};

export default Login;
