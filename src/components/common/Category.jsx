import React from 'react';

function Category({ src, firstName, lastName = '' }) {
  // TODO: 카테고리 클릭 시 즐겨찾기에 해당 카테고리 추가
  const onClick = (selectedCategory) => {
    console.log(selectedCategory);
  };

  return (
    <div
      className="flex flex-col items-center w-[1/5px] h-[90px]"
      onClick={() => onClick(lastName === '' ? firstName : `${firstName}/${lastName}`)}
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
