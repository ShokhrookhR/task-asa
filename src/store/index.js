import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import  cartSlice  from './pizza/cartSlice';
import { pizzaApi } from './pizza/pizza.api';
import favouritesSlice from './pizza/pizzaSlice';

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]:pizzaApi.reducer,
    favourites:favouritesSlice,
    cart:cartSlice
    
  },
  middleware:getDefaultMiddleWare=>getDefaultMiddleWare().concat(pizzaApi.middleware)
});

setupListeners(store.dispatch)