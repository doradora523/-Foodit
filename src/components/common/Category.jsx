import React, { useState } from 'react';

function Category({ src, firstName, lastName = '' }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const onCategorySelect = (name) => {
    setSelectedCategory(name);
  };

  return (
    <div
      className="flex flex-col items-center w-[1/5px] h-[90px] cursor-pointer"
      onClick={() => onCategorySelect(lastName === '' ? firstName : `${firstName}/${lastName}`)}
    >
      <button>
        <img alt="category" src={src} className="w-[49px] h-[49px]" />
      </button>
      <div className="mt-[7px] text-[13px]">{firstName}</div>
      <div className="mt-[-5px] text-[13px]">{lastName}</div>
    </div>
  );
}

export default Category;
