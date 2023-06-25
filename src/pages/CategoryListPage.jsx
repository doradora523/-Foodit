import React from 'react';

import CategoryList from '../components/common/CategoryList';
import LongButton from '../components/common/LongButton';
import TextBar from '../components/common/navBar/TextBar';

import { SELECT } from '../static/constants';

function CategoryListPage() {
  return (
    <div>
      <TextBar />
      <CategoryList />
      <LongButton contents={SELECT} />
    </div>
  );
}

export default CategoryListPage;
