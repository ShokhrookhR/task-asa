import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneItemQuery } from '../store/pizza/pizza.api';

const FullPizza = () => {
  const { id } = useParams();
  const { isError, isLoading, data } = useGetOneItemQuery(id);
  React.useEffect(()=>{

  },[id])
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something wrong</div>}
      <div
      className={
        'relative bg-white border rounded-xl py-2 px-5 cursor-pointer hover:shadow-md  transition-all'
      }>
      <img className={'rounded-full'} src={data?.imageUrl} alt="pizza" />
      <h2 className={'font-bold '}>{data?.title}</h2>
      <span className={'font-bold'}>${data?.price}</span>
      <p className={'text-gray-500'}>${Math.round(data?.price / 12)}/12 month</p>
     
    </div>
    </div>
    
  );
};

export default FullPizza;
