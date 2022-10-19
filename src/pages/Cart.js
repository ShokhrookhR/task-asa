import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';
import { cartSelector } from '../store/pizza/cartSlice';

const Cart = () => {
  const {items,totalPrice} = useSelector(cartSelector);
  React.useEffect(() => {}, [items]);
  return (
    <div className={'relative'}>
      {items?.map((item) => (
        <CartCard item={item} />
      ))}
      <span className={'absolute top-3 right-3'}>{totalPrice}</span>
    </div>
  );
};

export default Cart;
