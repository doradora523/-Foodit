import React from 'react';

function BackButton({ onClickHandler }) {
  return (
    <button class="flex justify-center items-center w-[44px] h-[44px]" onClick={onClickHandler}>
      <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 21L1.5 11L11.5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default BackButton;
