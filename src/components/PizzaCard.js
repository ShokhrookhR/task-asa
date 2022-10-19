import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { addItem, favouritesSelector, removeItem } from '../store/pizza/pizzaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, cartSelector, removeItemFromCart } from '../store/pizza/cartSlice';
import { Link } from 'react-router-dom';
const PizzaCard = ({ item }) => {
  const dispatch = useDispatch();
  const items=useSelector(favouritesSelector)
  const {items:cartItems}=useSelector(cartSelector)
  const [isMark, setMark] = React.useState(Boolean(items.find(obj=>item.id===obj.id)));
  const [isCartMark, setCartMark] = React.useState(Boolean(cartItems.find(obj=>item.id===obj.id)));
  const onClickFavour = () => {
    if (isMark) {
      dispatch(removeItem(item));
      setMark(false)

    } else {
      dispatch(addItem(item));
      setMark(true)

    }
  };
  const onClickCart = () => {
    if (isCartMark) {
      dispatch(removeItemFromCart(item));
      setCartMark(false)

    } else {
      dispatch(addItemToCart(item));
      setCartMark(true)

    }
  };
  React.useEffect(()=>{
    
  },[items,dispatch])
  return (
    <div
      className={
        'relative bg-white border rounded-xl py-2 px-5 cursor-pointer hover:shadow-md  transition-all'
      }>
      <Link to={`/pizza/${item.id}`}><img className={'rounded-full'} src={item.imageUrl} alt="pizza" /></Link>
      
      <h2 className={'font-bold '}>{item.title}</h2>
      <span className={'font-bold'}>${item.price}</span>
      <p className={'text-gray-500'}>${Math.round(item.price / 12)}/12 month</p>
      <span onClick={onClickFavour} className={'absolute top-2 left-4'}>
        {!isMark ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
      </span>
      <span onClick={onClickCart} className={'absolute top-2 right-4'}>
        {isCartMark?<ShoppingCartIcon />:<ShoppingCartOutlinedIcon/>}

      </span>
    </div>
  );
};

export default PizzaCard;
