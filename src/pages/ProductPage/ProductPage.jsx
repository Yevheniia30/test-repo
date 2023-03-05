import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'services/productsApi';
// import { addProduct, searchProducts } from 'redux/products/actions';
import { addProduct, searchProduct, addQuantity } from 'redux/products/slice';
import Search from 'components/Search/Search';

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const basket = useSelector(state => state.cart);

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
    const isAdded = basket.find(item => item.id === payload.id);
    if (isAdded) {
      dispatch(addQuantity({ id: payload.id, add: true }));
      return;
    }
    const action = addProduct(payload);
    console.log(action);
    dispatch(action);
  };

  const handleChange = e => {
    dispatch(searchProduct(e.target.value));
  };

  const searchProducts = () => {
    if (!search) {
      return items;
    }
    const normalizedSearch = search.toLowerCase();
    return items.filter(i => i.title.toLowerCase().includes(normalizedSearch));
  };
  // selector func
  // const selectSearchProducts = useSelector(state => {
  //   const normalizedSearch = state.search.toLowerCase();
  //   return state.items.filter(i => i.title.toLowerCase().includes(normalizedSearch));

  // });

  const elements = searchProducts()?.map(i => (
    <li key={i.id}>
      <span>
        {i.title} - ${i.price}
      </span>
      <button onClick={() => handleAddProduct(i)}>Buy</button>
    </li>
  ));

  return (
    <>
      <input placeholder="search" type="text" value={search} onChange={handleChange} />
      {/* <Search /> */}
      <ul>{elements}</ul>
    </>
  );
};

export default ProductPage;
