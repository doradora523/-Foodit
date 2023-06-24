import React from 'react';

function OptionalPermission({ src, title, description }) {
  return (
    <div class="flex">
      <img alt="alt" src={src} class="w-[44px] mr-[26px] rounded-full" />
      <div class="flex flex-col justify-around">
        <div class="text-[13px]">{title}</div>
        <div class="text-[10px] text-deepGray">{description}</div>
      </div>
    </div>
  );
}

export default OptionalPermission;
