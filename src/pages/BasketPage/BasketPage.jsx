import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantityThunk, fetchCart } from 'redux/products/operations';
// import { removeProduct } from 'redux/products/actions';
import { removeProduct, addQuantity, decrQuantity } from 'redux/products/slice';
import { deleteFromCartFunc } from 'redux/products/operations';
import { useLocation } from 'react-router-dom';

const BasketPage = () => {
  const products = useSelector(store => store.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   localStorage.setItem('location', pathname);
  // }, [pathname]);
  // коли змінюється стор, перемальовується компонент який на нього підписаний
  // console.log('products', products);
  const handleDelete = id => {
    dispatch(deleteFromCartFunc(id));
    // dispatch(removeProduct(id));
  };

  const handleChangeQuantity = (item, add) => {
    if (!add && item.quantity === 1) {
      return dispatch(deleteFromCartFunc(item.id));
    }
    // const updItem = { ...item, quantity: add ? item.quantity + 1 : item.quantity - 1 };
    // dispatch(addQuantity({ id, add: true }));
    // console.log('item', item, add);
    dispatch(changeQuantityThunk({ data: item, add }));
  };
  // const handleDecrQuantity = i => {
  //   if (i.quantity === 1) {
  //     dispatch(removeProduct(i.id));
  //     return;
  //   }
  //   // dispatch(decrQuantity(i.id));
  //   dispatch(addQuantity(i));
  // };

  const elements = products?.map(i => (
    <li key={i.id}>
      <span>
        {i.name} - ${i.price}
      </span>
      {i.quantity === 0 ? (
        <span style={{ color: 'red' }}>Sorry, this product is finished</span>
      ) : (
        <>
          {' '}
          <span>quantity:{i.quantity}</span>
          <button onClick={() => handleChangeQuantity(i)}>-</button>
          <button onClick={() => handleChangeQuantity(i, true)}>+</button>
        </>
      )}

      <button onClick={() => handleDelete(i.id)}>Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default BasketPage;
