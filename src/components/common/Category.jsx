import React from 'react';

function Category({ src, firstName, lastName = '' }) {
  // TODO: 하단 선택 버튼을 없애고 바로 홈으로
  const onClick = (selectedCategory) => {};

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
