import React from 'react';
import SearchedOutput from './SearchedOutput';

function SearchedOutputList() {
  return (
    <div className="flex flex-col mx-[15px] mb-[27px] overflow-scroll gap-[20px] h-[520px]">
      <SearchedOutput />
      <SearchedOutput />
      <SearchedOutput />
      <SearchedOutput />
      <SearchedOutput />
      <SearchedOutput />
      <SearchedOutput />
      <SearchedOutput />
    </div>
  );
}

export default SearchedOutputList;
