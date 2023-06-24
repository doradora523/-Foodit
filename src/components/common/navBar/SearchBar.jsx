import React from 'react';
import BackButton from './BackButton';

function SearchBar({ placeholder }) {
  const moveToPermissionPage = () => {};

  return (
    <div class="flex h-[44px]">
      <BackButton onClickHandler={moveToPermissionPage} />
      <input
        placeholder={placeholder}
        class="w-[100%] mr-[15px] px-[27px] rounded-[5px] bg-lightGray placeholder-gray text-[13px]"
      />
    </div>
  );
}

export default SearchBar;
