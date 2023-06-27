import React from 'react';

import NearLoacation from '../components/registerLocationPage/NearLoacation';
import SearchBar from '../components/common/navBar/SearchBar';

import { SEARCH_LOCATION, NEAR_LOCATION } from '../static/constants';

function RegisterLocationPage() {
  return (
    <div class="flex flex-col">
      <SearchBar placeholder={SEARCH_LOCATION} />

      <div class="flex items-center h-[29px] my-[20px] ml-[15px] font-semibold text-[12px]">{NEAR_LOCATION}</div>

      <div class="flex flex-col items-center h-[600px] overflow-scroll gap-[13px]">
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
        <NearLoacation location={'서울특별시 서초구 역삼동'} />
      </div>
    </div>
  );
}

export default RegisterLocationPage;
