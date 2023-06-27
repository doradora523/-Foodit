import React from 'react';
import { BEFORE, TEMPORARY_SRC, WON } from '../../static/constants';

// TODO: 하드코딩되어 있는 값들 모두 수정 필요
function SearchedOutput() {
  return (
    <div class="flex">
      <img alt={'searchedImage'} src={TEMPORARY_SRC} class="w-[100px] rounded-[10px]" />
      <div class="ml-[15px] flex flex-col justify-between">
        <div>
          <div class="text-[13px] font-semibold">{'프로틴 바/ 다크 초코씨솔트&카라멜넛, 마이프로틴 바'}</div>
          <div class="text-[10px] text-smokeGray">{`${'서울시 서초구 서초대로'} | ${'20분'} ${BEFORE}`}</div>
        </div>
        <div class="text-[16px] font-bold">{`${'20,000'}${WON}`}</div>
      </div>
    </div>
  );
}

export default SearchedOutput;
