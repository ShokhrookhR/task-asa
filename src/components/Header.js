import React from 'react';
import { Link } from 'react-router-dom';
import { cartSelector } from '../store/pizza/cartSlice';
import { favouritesSelector } from '../store/pizza/pizzaSlice';
import { useDebounce } from '../hooks/debounce';
import { useSearchItemsQuery } from '../store/pizza/pizza.api';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DetailsIcon from '@mui/icons-material/Details';
import { useSelector } from 'react-redux';
const Header = () => {
  const [search, setSearch] = React.useState('');
  const [dropdown, setDropdown] = React.useState(false);
  const debounced = useDebounce(search);
  const {items,totalPrice} = useSelector(cartSelector);
  const favouriteItems = useSelector(favouritesSelector);
  const isMounted=React.useRef(false)
  const { isError, isLoading, data } = useSearchItemsQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true,
  });
  const onClickSearchItems=()=>{
    setDropdown(false)
    setSearch('')
  }
  React.useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length > 0);
  }, [debounced, data]);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(favouriteItems);
      localStorage.setItem('fav', json);
      
    }
    isMounted.current=true
       
  }, [favouriteItems,items]);
  return (
    <>
      <nav className=" w-full h-[100px] bg-slate-400">
        <div className={'flex justify-between gap-3 h-full items-center px-4'}>
          <Link to={'/'}>
            <span className="text-cyan-50 font-bold text-xl md:text-3xl cursor-pointer">
              <DetailsIcon /> asaxiy
            </span>
          </Link>

          <div className="relative w-[450px] ">
            <input
              type="text"
              className="border rounded py-2 px-3 w-full h-[42px] mb-2 outline-slate-100"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {dropdown && (
              <ul className="absolute top-[42px] left-0 right-0 z-10 max-h-[200px] list-none bg-white shadow-md overflow-y-scroll ">
                {data?.map((item) => (
                  <Link to={`/pizza/${item.id}`} key={item.id}>
                    <li
                      onClick={onClickSearchItems}
                      className={
                        'py-2 px-2 cursor-pointer hover:bg-blue-600 transition-colors hover:text-white'
                      }>
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className={'flex gap-2'}>
            <Link to={'/cart'}>
              <ShoppingCartOutlinedIcon fontSize="large" />
              {items.length > 0 && (
                <>
                  <span>{items.length}</span>|<span>${totalPrice}</span>
                </>
              )}
            </Link>

            <Link to={'/favourites'}>
              <FavoriteBorderOutlinedIcon fontSize="large" />
              {favouriteItems.length > 0 && <span className={''}>{favouriteItems.length}</span>}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
