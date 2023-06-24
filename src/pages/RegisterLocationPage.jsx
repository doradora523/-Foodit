import React from 'react';
import NearLoacation from '../components/registerLocationPage/NearLoacation';
import { SEARCH_LOCATION, NEAR_LOCATION } from '../static/constants';

function RegisterLocationPage() {
  return (
    <div class="flex flex-col border h-[100%]">
      <div class="border flex mt-[40px]">
        <button class="border w-[44px] h-[44px]">{'<'}</button>
        <input
          placeholder={SEARCH_LOCATION}
          class="border w-[100%] px-[10px] rounded-[5px] bg-lightGray placeholder-gray text-[13px]"
        />
      </div>

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
