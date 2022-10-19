import React from 'react';
import Category from '../components/Category';
import PizzaCard from '../components/PizzaCard';
import { useGetItemsQuery, useLazyGetItemsByCategoryQuery } from '../store/pizza/pizza.api';

const Home= () => {
  const { isLoading, isError, data } = useGetItemsQuery(1);
  const [categoryId, setCategoryId] = React.useState(0);
  const [fetchItems,{isLoading:isItemsLoading,isError:isItemsError,data:items}]=useLazyGetItemsByCategoryQuery()
  React.useEffect(()=>{
    fetchItems(categoryId)
  },[categoryId])
  return (
    <div className={'relative pt-[60px] px-4 bg-slate-200'}>
      <div
        className={
          'absolute top-0 left-0 right-0 h-[50px] pt-1  px-4 flex-col justify-center bg-white'
        }>
        <Category setCategoryId={setCategoryId} categoryId={categoryId} />
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4  gap-5  py-3 px-3'}>
        {(isLoading||isItemsLoading) && <div>Loading...</div>}
        
        {categoryId !==0 ?items?.map((obj) => (
          <PizzaCard key={obj.id} item={obj} />
        )):data?.map((obj) => (
          <PizzaCard key={obj.id} item={obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
