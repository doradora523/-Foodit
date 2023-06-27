import React from 'react';

import CategoryList from '../components/common/CategoryList';
import LongButton from '../components/common/LongButton';
import TextBar from '../components/common/navBar/TextBar';

import { SELECT } from '../static/constants';

function CategoryListPage() {
  return (
    <div>
      {/* TODO: 공통 컴포넌트로 추후 생성되면 추가 예정, < 버튼 클릭시 useNavigate 적용 */}
      <TextBar />
      <CategoryList />
      {/* TODO: 원하는 카테고리 선택 후 버튼 클릭 했을 때 */}
      <LongButton contents={SELECT} />
    </div>
  );
}

export default CategoryListPage;
