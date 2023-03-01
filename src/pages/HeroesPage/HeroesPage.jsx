import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getHeroes } from 'services/heroApi';
import Button from 'components/Button/Button';

const HeroesPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;
  // const limit = searchParams.get('limit');
  // gjgj
  console.log('searchParams', searchParams);

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { results },
        } = await getHeroes(page);
        const newData = results.map(i => i.name);
        setHeroes(prev => (page === 1 ? newData : [...prev, ...newData]));
      } catch (error) {
        console.log('err', error);
      }
    };
    fetch();
  }, [page]);

  const handleLoadMore = () => {
    setSearchParams({ page: +page + 1 } ?? {});
  };

  const elements = heroes.map((i, idx) => (
    <li key={i}>
      <Link to={`/heroes/${idx + 1}`}>{i}</Link>
    </li>
  ));

  return (
    <>
      <ul>{elements}</ul>
      <Button propClick={handleLoadMore}>Load More</Button>
    </>
  );
};

export default HeroesPage;
