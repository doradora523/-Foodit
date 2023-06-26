import React from 'react';

function MyProfile({ svg }) {
  return (
    <div class="flex flex-col items-center w-[100%]">
      <div class="mt-[25px] w-[105px] h-[105px] mb-[18px] rounded-full bg-mainColor"></div>

      <div class="w-[100%]">
        <div class="flex flex-col items-center mx-[16px] mb-[20px] pb-[9px] border-b-[0.5px] border-gray">
          <div class="text-[16px] font-bold">{'우리동네'}</div>
        </div>
        <button class="float-right mt-[10px] absolute top-[210px] right-[4%]">{svg}</button>
      </div>
    </div>
  );
}

export default MyProfile;
