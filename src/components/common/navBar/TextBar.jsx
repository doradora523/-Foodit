import React from 'react';

function TextBar({ title }) {
  return (
    <div className="mt-[47px] h-[44px] bg-white">
      <h2 className="text-center text-ellipsis line-clamp-1 whitespace-normal overflow-hidden leading-[44px] absolute left-1/2 translate-x-[-50%] font-semibold">
        {title}
      </h2>
    </div>
  );
}

export default TextBar;
