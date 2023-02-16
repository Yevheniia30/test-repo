import { useState } from 'react';

import { useForm } from 'hooks/useForm';
import { useSelector } from 'react-redux';

const initSignUp = {
  name: '',
  email: '',
  password: '',
};

const initLogin = {
  // name: '',
  email: '',
  password: '',
};

const Register = ({ onSubmit, isSignUp }) => {
  const initialValues = isSignUp ? initSignUp : initLogin;
  const { state, handleChange, handleSubmit } = useForm(onSubmit, initialValues);

  const error = useSelector(state => state.auth?.error);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [state, setState] = useState({ email: '', password: '' });

  // const handlechangestate = e => {
  //   const { name, value } = e.target;
  //   setState(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       break;

  //     case 'password':
  //       setPassword(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit({ email, password });
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && <input type="text" name="name" value={state.name} onChange={handleChange} />}
      <input type="email" name="email" value={state.email} onChange={handleChange} />
      <input type="password" name="password" value={state.password} onChange={handleChange} />

      <button>{isSignUp ? 'sign up' : 'sign in'}</button>
      {/* {error && <p>{error}</p>} */}
    </form>
  );
};

export default Register;
