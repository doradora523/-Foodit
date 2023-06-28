import React from 'react';

import CategoryList from '../components/common/CategoryList';
import LongButton from '../components/common/LongButton';
import TextAndBackBar from '../components/common/navBar/TextAndBackBar';

import { CATEGORY, SELECT } from '../static/constants';

function CategoryListPage() {
  return (
    <div>
      <TextAndBackBar title={CATEGORY} />
      <CategoryList />
      {/* TODO: 원하는 카테고리 선택 후 버튼 클릭 했을 때 즐겨찾기에 추가 */}
      <LongButton contents={SELECT} />
    </div>
  );
}

export default CategoryListPage;
