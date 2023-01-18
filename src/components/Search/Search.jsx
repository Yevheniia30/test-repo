import { useState, useEffect } from 'react';
import { useForm } from 'hooks/useForm';

const initialValue = '';
// const initialValue = { search: '' };

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState(initialValue);
  const handleChange = e => {
    setSearch(e.target.value);
  };

  //  if Use useForm
  //   const handleChange = e => {
  //     const { name, value } = e.target;
  //     setState({
  //       ...state,
  //       [name]: value,
  //     });
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch(initialValue);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="search" value={search} onChange={handleChange} autoFocus />
      <button disabled={!search.trim()}>Search</button>
    </form>
  );
};

export default Search;
