import React, { useState } from 'react';
import Select from 'react-select';

import SearchBar from '../components/common/navBar/SearchBar';
import SearchedOutputList from '../components/common/SearchedOutputLists';

import { ENTER_INPUT, TOTAL_SEARCHED_OUTPUT } from '../static/constants';

// TODO: 하드코딩되어 있는 값들 모두 수정 필요
function SearchPage() {
  const options = [
    { value: '인기순', label: '인기순' },
    { value: '최신순', label: '최신순' },
    { value: '낮은 가격순', label: '낮은 가격순' },
    { value: '높은 가격순', label: '높은 가격순' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedCategory, setSelectedCategory] = useState(TOTAL_SEARCHED_OUTPUT);

  return (
    <div className="flex flex-col">
      <SearchBar placeholder={ENTER_INPUT} placeholderColor={'white'} />

      <div className="flex mx-[15px] mt-[15px] mb-[25px] justify-between items-center">
        {/* FIXME: height 상의 필요 */}
        <div className="flex w-[152px] h-[30px] items-center justify-center rounded-[5px] bg-orange text-white text-[13px]">
          {selectedCategory}
        </div>
        <Select defaultValue={selectedOption} options={options} onchange={setSelectedOption} />
      </div>

      <div className="mx-[16px] mb-[15px] text-[13px]">총 {'280,787'}개</div>
      <SearchedOutputList />
    </div>
  );
}

export default SearchPage;
