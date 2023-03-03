import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'services/productsApi';
import { addProduct } from 'redux/products/actions';

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  // const items = useSelector(store => store.products);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getProducts();
        console.log(data);
        setItems(data);
        // dispatch(getProducts(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleAddProduct = payload => {
    const action = addProduct(payload);
    console.log(action);
    dispatch(action);
  };

  const elements = items?.map(i => (
    <li key={i.id}>
      <span>
        {i.title} - ${i.price}
      </span>
      <button onClick={() => handleAddProduct(i)}>Buy</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ProductPage;
