import React from 'react';

function Input({ placeholder }) {
  return (
    <div class="py-[15px] mx-[15px] text-[13px] text-darkGray border-b-[0.5px]">
      <input placeholder={placeholder} />
    </div>
  );
}

export default Input;
