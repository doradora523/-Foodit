import React from 'react';
import NearLoacation from '../components/registerLocationPage/NearLoacation';
import { SEARCH_LOCATION, NEAR_LOCATION } from '../static/constants';
import SearchBar from '../components/common/SearchBar';

function RegisterLocationPage() {
  return (
    <div class="flex flex-col border h-[100%]">
      <SearchBar placeholder={SEARCH_LOCATION} />

      <div class="border pl-[16px] my-[25px]">{NEAR_LOCATION}</div>

      <div class="border flex flex-col items-center overflow-scroll">
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
