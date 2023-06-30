import React from 'react';

function Input({ placeholder, onChange }) {
  return (
    <div className="mx-[15px] text-[13px] text-darkGray border-b-[0.5px] border-gray">
      <input placeholder={placeholder} onChange={onChange} className="h-[54px] w-[100%] outline-0" />
    </div>
  );
}

export default Input;
