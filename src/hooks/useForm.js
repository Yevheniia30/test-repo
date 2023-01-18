import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const useForm = onSubmit => {
  // створює стан і фугкції і повертає на основі того даних  що отримує
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, phone, id: nanoid(4) });
    setName('');
    setPhone('');
  };
  return { handleChangeName, handleChangePhone, handleSubmit, name, setName, phone, setPhone };
};
