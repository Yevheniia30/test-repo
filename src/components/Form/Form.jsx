import { useForm } from 'hooks/useForm';

const initialValues = {
  name: '',
  price: '',
  description: '',
};

const Form = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(onSubmit, initialValues);
  const { name, price, description } = state;
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={name} placeholder="name" />
      <input name="price" onChange={handleChange} value={price} placeholder="price" />
      <input
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="description"
      />
      <button>Add product</button>
    </form>
  );
};

export default Form;
