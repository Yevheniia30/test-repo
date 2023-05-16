import { useMemo } from 'react';
import Button from 'components/Button/Button';
import { useForm } from 'hooks/useForm';

const initialSignup = {
  name: '',
  email: '',
  password: '',
};

const AuthForm = ({ onSubmit, isSignUp = false }) => {
  const initialValues = useMemo(() => {
    // console.log('initialValues');
    if (isSignUp) {
      return { name: '', email: '', password: '' };
    }
    return { email: '', password: '' };
  }, [isSignUp]);

  const { state, handleChange, handleSubmit } = useForm(onSubmit, initialValues);

  // const isDisabled = useMemo(() => {
  //   return !state.name || !state.email || !state.password;
  // }, [state.email, state.name, state.password]);

  console.log('render', isSignUp);
  return (
    <form onSubmit={handleSubmit}>
      {isSignUp && (
        <input
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      )}

      <input
        name="email"
        type="text"
        value={state.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        name="password"
        type="text"
        value={state.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <Button type="submit">{isSignUp ? 'Sign up' : 'Log in'}</Button>
    </form>
  );
};

export default AuthForm;
