import React from 'react';
import { useNavigate } from 'react-router-dom';

import BackButton from './BackButton';

function SearchBar({ placeholder }) {
  const navigate = useNavigate();
  const handleMoveBack = () => navigate(-1);

  return (
    <div className="flex h-[44px] mt-[47px]">
      <BackButton onClick={handleMoveBack} />
      <input
        placeholder={placeholder}
        className="w-[100%] mr-[15px] px-[27px] rounded-[5px] bg-lightGray placeholder-deepGray text-[13px] focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
