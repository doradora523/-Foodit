import React from 'react';
import SearchedOutput from './SearchedOutput';

import { TEMPORARY_SRC } from '../../static/constants';

function SearchedOutputList({ searchedOutputList }) {
  // TODO: 무한 스크롤 구현
  return (
    <div className="flex flex-col mx-[15px] mb-[27px] overflow-scroll gap-[20px] h-[520px]">
      {searchedOutputList &&
        searchedOutputList.map((el) => (
          <SearchedOutput
            key={el.id}
            src={TEMPORARY_SRC}
            name={el.name}
            location={el.location}
            price={Number(el.price).toLocaleString()}
          />
        ))}
    </div>
  );
}

export default SearchedOutputList;
