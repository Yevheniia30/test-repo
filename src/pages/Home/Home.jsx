import { useState, useEffect } from 'react';
import { useForm } from 'hooks/useForm';
import Search from 'components/Search/Search';
import { getPostsSearch } from 'services/api';
import { Link, useSearchParams } from 'react-router-dom';

const initialValue = '';

const Home = ({ onSubmit }) => {
  // const { state, handleChange, handleSubmit } = useForm(onSubmit);

  // const [query, setQuery] = useState(initialValue);
  const [posts, setPosts] = useState([]);

  // при сабміті записуємо пошук не в стейт, а в searchParams
  const changeSearch = search => {
    setSearchParams({ q: search });
    // setQuery(search);
    // e.preventDefault();
  };

  const [searchParams, setSearchParams] = useSearchParams();
  // для того щоб отримати значення з параметрів запиту, потрібно викликати в searchParams метод get
  const q = searchParams.get('q');

  // і в запит передаєм не локальний стейт, а строку пошуку з адреси
  useEffect(() => {
    const getSearchPosts = async () => {
      try {
        const data = await getPostsSearch(q);
        setPosts(data);
      } catch (error) {}
    };
    if (q) {
      getSearchPosts();
    }
  }, [q]);

  return (
    <>
      <h2>Welcome to my app!</h2>
      <Search onSubmit={changeSearch} />
      {posts?.length > 0 && (
        <ul>
          {posts.map(item => (
            <li key={item.id}>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
