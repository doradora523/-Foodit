import React from 'react';

function OptionalPermission({ src, title, description }) {
  return (
    <div class="flex border">
      <img alt="alt" src={src} class="w-[44px] rounded-full mr-[10px]" />
      <div>
        <div>{title}</div>
        <div class="text-deepGray">{description}</div>
      </div>
    </div>
  );
}

export default OptionalPermission;
