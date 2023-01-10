import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const useForm = (initialValue, onSubmit) => {
  const [name, setName] = useState(initialValue);
  const [phone, setPhone] = useState(initialValue);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangePhone = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, phone, id: nanoid(4) });
    setName(initialValue);
    setPhone(initialValue);
  };
  return { handleChangeName, handleChangePhone, handleSubmit, name, setName, phone, setPhone };
};
