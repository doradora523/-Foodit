import React from 'react';

function OptionalPermission({ svg, title, description }) {
  return (
    <div className="flex">
      <div className="flex items-center justify-center w-[44px] h-[44px] mr-[26px] rounded-full bg-gray">{svg}</div>
      <div className="flex flex-col justify-around">
        <div className="text-[13px]">{title}</div>
        <div className="text-[10px] text-deepGray">{description}</div>
      </div>
    </div>
  );
}

export default OptionalPermission;
