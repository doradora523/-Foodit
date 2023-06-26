import React from 'react';

import CategoryList from '../components/common/CategoryList';
import LongButton from '../components/common/LongButton';
import TextBar from '../components/common/navBar/TextBar';

import { SELECT } from '../static/constants';

function CategoryListPage() {
  return (
    <div>
      {/* TODO: 공통 컴포넌트로 추후 생성되면 추가 예정 */}
      <TextBar />
      <CategoryList />
      <LongButton contents={SELECT} />
    </div>
  );
}

export default CategoryListPage;
