import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/authOperations';

import AuthForm from 'components/AuthForm/AuthForm';

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    // console.log(data);
    dispatch(signup(data));
  };

  return <AuthForm onSubmit={handleSubmit} isSignUp={true} />;
};

export default SignupPage;
