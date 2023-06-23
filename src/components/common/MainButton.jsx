import React from 'react';

function MainButton({ name, customClass }) {
  return (
    <div
      class={`${customClass} border flex items-center justify-center w-[360px] h-[50px] rounded-[55px] bg-mainColor`}>
      {name}
    </div>
  );
}

export default MainButton;
