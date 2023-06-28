import React from 'react';
import BackButton from './BackButton';

function SearchBar({ placeholder }) {
  const moveToPermissionPage = () => {};

  return (
    <div className="flex h-[44px] mt-[47px]">
      <BackButton onClickHandler={moveToPermissionPage} />
      <input
        placeholder={placeholder}
        className="w-[100%] mr-[15px] px-[27px] rounded-[5px] bg-lightGray placeholder-deepGray text-[13px]"
      />
    </div>
  );
}

export default SearchBar;
