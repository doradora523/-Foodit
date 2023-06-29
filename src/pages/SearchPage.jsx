import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import SearchBar from '../components/common/navBar/SearchBar';
import SearchedOutputList from '../components/common/SearchedOutputLists';
import TabBar from '../components/common/navBar/TabBar';

import { ENTER_INPUT } from '../static/constants';

// TODO: 하드코딩되어 있는 값들 모두 수정 필요
function SearchPage() {
  const options = [
    { value: '최신순', label: '최신순' },
    { value: '낮은 가격순', label: '낮은 가격순' },
    { value: '높은 가격순', label: '높은 가격순' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectedCategory = useSelector((state) => state.selectedCategory.category);

  return (
    <div className="flex flex-col">
      <SearchBar placeholder={ENTER_INPUT} placeholderColor={'white'} />

      <div className="flex mx-[15px] mt-[15px] mb-[25px] justify-between items-center">
        <div className="flex w-[152px] h-[38px] items-center justify-center rounded-[5px] bg-orange text-white text-[15px]">
          {selectedCategory}
        </div>
        <Select defaultValue={selectedOption} options={options} onchange={setSelectedOption} />
      </div>

      {/* TODO: 필터링된 결과값의 길이 */}
      <div className="mx-[16px] mb-[15px] text-[13px]">총 {'280,787'}개</div>
      {/* TODO: 필터링된 결과값 보여주기 */}
      <SearchedOutputList />
      <TabBar />
    </div>
  );
}

export default SearchPage;
