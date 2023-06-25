import React from 'react';

import Category from './Category';
import { TEMPORARY_SRC } from '../../static/constants';

function CategoryList() {
  return (
    <div class="flex justify-center mx-[19px]">
      <div class="flex items-center flex-wrap gap-x-[20px] gap-y-[29px] w-[360px] mt-[25px] justify-between">
        <Category src={TEMPORARY_SRC} firstName={'전체'} />
        <Category src={TEMPORARY_SRC} firstName={'과일'} />
        <Category src={TEMPORARY_SRC} firstName={'채소'} />
        <Category src={TEMPORARY_SRC} firstName={'쌀/잡곡'} lastName={'견과'} />
        <Category src={TEMPORARY_SRC} firstName={'정육'} lastName={'계란류'} />

        <Category src={TEMPORARY_SRC} firstName={'수산물'} lastName={'건해산'} />
        <Category src={TEMPORARY_SRC} firstName={'우유'} lastName={'유제품'} />
        <Category src={TEMPORARY_SRC} firstName={'김치/반찬'} lastName={'델리'} />
        <Category src={TEMPORARY_SRC} firstName={'생수/음료'} lastName={'주류'} />
        <Category src={TEMPORARY_SRC} firstName={'커피/차'} lastName={'원두'} />

        <Category src={TEMPORARY_SRC} firstName={'면류'} lastName={'통조림'} />
        <Category src={TEMPORARY_SRC} firstName={'양념/오일'} />
        <Category src={TEMPORARY_SRC} firstName={'과자/간식'} />
        <Category src={TEMPORARY_SRC} firstName={'베이커리'} lastName={'잼'} />
        <Category src={TEMPORARY_SRC} firstName={'친환경'} lastName={'유기농'} />
      </div>
    </div>
  );
}

export default CategoryList;
