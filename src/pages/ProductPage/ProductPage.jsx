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
  fetchGoods,
  addGoods,
  deleteGoods,
} from 'redux/products/operations';
import { selectIsLogin } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import Form from 'components/Form/Form';
import css from './ProductsPage.module.css';
import Loader from 'shared/components/Loader/Loader';
import { theme } from 'themes/theme';

const ProductPage = () => {
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const search = useSelector(state => state.cart.search);
  const basket = useSelector(state => state.cart.cart);
  const items = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);

  const isLogin = useSelector(selectIsLogin);
  // console.log('basket', basket);
  // const items = useSelector(store => store.products);

  useEffect(() => {
    // dispatch(fetchProducts());
    // dispatch(fetchProductsThunk());
    dispatch(fetchGoods());
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

  // if (!isLogin) {
  //   return <Navigate to="/login" />;
  // }

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
    return items.filter(i => i.name.toLowerCase().includes(normalizedSearch));
  };
  // selector func
  // const selectSearchProducts = useSelector(state => {
  //   const normalizedSearch = state.search.toLowerCase();
  //   return state.items.filter(i => i.title.toLowerCase().includes(normalizedSearch));

  // });

  const isInCart = title => {
    return basket.find(i => i.title === title);
  };

  const handleSubmit = data => {
    dispatch(addGoods(data));
  };

  const handleDelete = id => {
    dispatch(deleteGoods(id));
  };

  const elements = items?.map((item, idx) => (
    <tr key={item._id}>
      <td>{idx + 1}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td style={{ display: 'flex', gap: '5px' }}>
        <Button add={true} disabled={isInCart(item.name)} propClick={() => handleAddProduct(item)}>
          {isInCart(item.name) ? 'In cart' : 'Buy'}
        </Button>
        <Button propClick={() => handleDelete(item._id)}>Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {loading && <Loader color={theme.colors.blue} loading={loading} size={theme.sizes.xxs} />}
      <table className={css.table}>
        <thead className={css.head}>
          <tr>
            <th className={css.tstyle}>№</th>
            <th>Найменування</th>
            <th>Ціна</th>
            <th>Опис</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    </>
  );
};

export default ProductPage;
