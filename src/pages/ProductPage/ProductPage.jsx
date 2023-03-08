import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'services/productsApi';
// import { addProduct, searchProducts } from 'redux/products/actions';
import { addProduct, searchProduct, addQuantity } from 'redux/products/slice';
import {
  fetchProducts,
  addToCartFunc,
  addToCartThunk,
  fetchProductsThunk,
} from 'redux/products/operations';

const ProductPage = () => {
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const search = useSelector(state => state.cart.search);
  const basket = useSelector(state => state.cart.cart);
  const items = useSelector(state => state.products.products);
  console.log('basket', basket);
  // const items = useSelector(store => store.products);

  useEffect(() => {
    // dispatch(fetchProducts());
    dispatch(fetchProductsThunk());
    // const fetch = async () => {
    //   try {
    //     const { data } = await getProducts();
    //     console.log(data);
    //     setItems(data);
    //     // dispatch(getProducts(data));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetch();
  }, [dispatch]);

  const handleAddProduct = payload => {
    // const isAdded = basket.find(item => item.id === payload.id);
    // if (isAdded) {
    //   console.log('asaddede', payload);
    //   dispatch(addQuantity({ id: payload.id, add: true }));
    //   return;
    // } else {

    // }
    // const action = addProduct(payload);
    // const action = addToCartFunc(payload);
    const action = addToCartThunk(payload);
    // console.log(action);
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

  const isInCart = title => {
    return basket.find(i => i.title === title);
  };

  const elements = searchProducts()?.map(i => (
    <li key={i.id}>
      <span>
        {i.title} - ${i.price}
      </span>
      <button disabled={isInCart(i.title)} onClick={() => handleAddProduct(i)}>
        {isInCart(i.title) ? 'In cart' : 'Buy'}
      </button>
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
