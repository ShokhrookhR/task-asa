import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';
import FullPizza from './pages/FullPizza';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourite/*" element={<Favourite />}></Route>
        <Route path="/cart/*" element={<Cart />}></Route>
        <Route path="/favourites/*" element={<Favourite />}></Route>
        <Route path="/pizza/:id" element={<FullPizza />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
