import { useSelector, useDispatch } from 'react-redux';
// import { removeProduct } from 'redux/products/actions';
import { removeProduct, addQuantity, decrQuantity } from 'redux/products/slice';

const BasketPage = () => {
  const products = useSelector(store => store.cart);
  const dispatch = useDispatch();
  // коли змінюється стор, перемальовується компонент який на нього підписаний
  // console.log('products', products);
  const handleDelete = id => {
    dispatch(removeProduct(id));
  };

  const handleAddQuantity = id => {
    dispatch(addQuantity(id));
  };
  const handleDecrQuantity = i => {
    if (i.quantity === 1) {
      dispatch(removeProduct(i.id));
      return;
    }
    dispatch(decrQuantity(i.id));
  };

  const elements = products?.map(i => (
    <li key={i.id}>
      <span>
        {i.title} - ${i.price}
      </span>
      <span>quantity:{i.quantity}</span>
      <button onClick={() => handleDecrQuantity(i)}>-</button>
      <button onClick={() => handleAddQuantity(i.id)}>+</button>
      <button onClick={() => handleDelete(i.id)}>Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default BasketPage;
