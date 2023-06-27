import React from 'react';

function OptionalPermission({ svg, title, description }) {
  return (
    <div class="flex">
      <div class="flex items-center justify-center w-[44px] h-[44px] mr-[26px] rounded-full bg-gray">{svg}</div>
      <div class="flex flex-col justify-around">
        <div class="text-[13px]">{title}</div>
        <div class="text-[10px] text-deepGray">{description}</div>
      </div>
    </div>
  );
}

export default OptionalPermission;
