import React from 'react';

function Category({ src, firstName, lastName = '' }) {
  return (
    <div class="flex flex-col items-center w-[1/5px] h-[90px]">
      <button>
        <img alt="category" src={src} class="w-[49px] h-[49px]" />
      </button>
      <div class="mt-[7px] text-[13px]">{firstName}</div>
      <div class="mt-[-5px] text-[13px]">{lastName}</div>
    </div>
  );
}

export default Category;
