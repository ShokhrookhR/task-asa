import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { removeItem } from '../store/pizza/pizzaSlice';
import { useDispatch } from 'react-redux';
const FavouriteCard = ({ item }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => {
    dispatch(removeItem(item));
  };
  React.useEffect(() => {}, [dispatch]);
  return (
    <div
      className={
        'relative md:flex justify-between items-center gap-2 bg-white border rounded-xl py-2 px-5 md:h-[150px] hover:shadow-md  transition-all'
      }>
      <div><img className={'rounded-full w-[100px]'} src={item.imageUrl} alt="pizza" /><h2 className={'font-bold '}>{item.title}</h2></div>
      
      
      <span className={'font-bold'}>${item.price}</span>
      <p className={'text-gray-500'}>${Math.round(item.price / 12)}/12 month</p>
      <span>{item.count}</span>
      <div className={'flex gap-3'}>
        
        <button onClick={onClickDelete} className={'bg-red-400 text-white py-2 px-4 rounded'}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default FavouriteCard;
