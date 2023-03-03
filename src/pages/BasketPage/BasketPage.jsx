import { useSelector } from 'react-redux';

const BasketPage = () => {
  const products = useSelector(store => store.basket);
  // коли змінюється стор, перемальовується компонент який на нього підписаний
  console.log('products', products);
  const elements = products?.map(i => (
    <li key={i.id}>
      <span>
        {i.title} - ${i.price}
      </span>
      <button>Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default BasketPage;
