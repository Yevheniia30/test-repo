import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const useForm = (onSubmit, initialValues, id, onClose) => {
  // створює стан і фугкції і повертає на основі того даних  що отримує
  const [state, setState] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      // console.log('useform id', id, 'state', state);
      onSubmit({ id, user: state });
      setState(initialValues);
      onClose();
      return;
    } else {
      onSubmit(state);
    }

    setState(initialValues);
    // setName('');
    // setPhone('');
  };
  return { handleChange, handleSubmit, state };
};
