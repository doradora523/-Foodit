import React from 'react';

import SearchBar from '../components/common/navBar/SearchBar';
import CategoryList from '../components/common/CategoryList';

import { ENTER_INPUT } from '../static/constants';

function CategoryPage() {
  return (
    <div>
      <SearchBar placeholder={ENTER_INPUT} placeholderColor={'white'} />

      <div class="h-[39px] mx-[15px] mt-[20px] border-b-[0.5px] text-[13px]">카테고리</div>

      <div class="flex justify-center mx-[19px]">
        <CategoryList />
      </div>

      {/* TODO: 하단 NavBar 추가 예정 */}
    </div>
  );
}

export default CategoryPage;
