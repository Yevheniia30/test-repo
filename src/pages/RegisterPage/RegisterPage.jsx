import Register from 'components/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
// import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  // const isLogin = useSelector(state => state.auth.isLogin);

  const handleSubmit = data => {
    // e.preventDefault();
    dispatch(signup(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/users" />;
  // }

  return <Register isSignUp={true} onSubmit={handleSubmit} />;
};

export default RegisterPage;
