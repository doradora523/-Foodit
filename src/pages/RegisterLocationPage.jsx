import React from 'react';

import NearLoacation from '../components/registerLocationPage/NearLoacation';
import SearchBar from '../components/common/navBar/SearchBar';
import ShowCase from '../components/common/ShowCase';

import { SEARCH_LOCATION, NEAR_LOCATION } from '../static/constants';

function RegisterLocationPage() {
  const onClick = () => {
    console.log('클릭');
  };
  return (
    <div className="flex flex-col">
      <SearchBar placeholder={SEARCH_LOCATION} />

      <div className="flex items-center h-[29px] my-[20px] ml-[15px] font-semibold text-[12px]">{NEAR_LOCATION}</div>

      <ShowCase
        className="flex flex-col items-center gap-[13px]"
        contents={
          <>
            <NearLoacation location={'서울특별시 서초구 역삼동'} onClick={onClick} />
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
          </>
        }
      />
    </div>
  );
}

export default RegisterLocationPage;
