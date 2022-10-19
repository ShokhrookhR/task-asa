import React from 'react';
import { useSelector } from 'react-redux';
import FavouriteCard from '../components/FavouriteCard';
import { favouritesSelector } from '../store/pizza/pizzaSlice';

const Favourite = () => {
  const items = useSelector(favouritesSelector);
  React.useEffect(() => {}, [items]);
  return (
    <div>
      {items?.map((item) => (
        <FavouriteCard item={item} />
      ))}
    </div>
  );
};

export default Favourite;
