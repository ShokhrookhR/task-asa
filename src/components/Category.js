import React from 'react';

const Category = ({ categoryId, setCategoryId }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (i) => {
    setCategoryId(i);
  };

  return (
    <>
      <ul
        className={
          'flex gap-4 justify-between items-center overflow-x-scroll md:overflow-x-hidden'
        }>
        {categories.map((p, i) => (
          <li
            onClick={() => onClickCategory(i)}
            key={i}
            className={
              categoryId === i
                ? 'bg-gray-400 text-white py-2 px-4 rounded-2xl cursor-pointer'
                : 'py-2 px-4 rounded-2xl border hover:text-gray-600 cursor-pointer'
            }>
            {p}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
