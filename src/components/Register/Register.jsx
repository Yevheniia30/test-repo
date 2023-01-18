import { useState } from 'react';

import { useForm } from 'hooks/useForm';

const Register = ({ onSubmit }) => {
  const {} = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState({ email: '', password: '' });

  const handlechangestate = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button>sign in</button>
    </form>
  );
};

export default Register;
