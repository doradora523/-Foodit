import React from 'react';
import FavoriteButton from '../common/FavoriteButton';
import Title from './Title';

const Favorite = () => {
  return (
    <div className="mt-[25px] mb-[30px] w-full overflow-x-hidden">
      <Title title={'즐겨찾기'} />
      <div className="flex justify-between overflow-hidden">
        <FavoriteButton />
        <FavoriteButton />
        <FavoriteButton />
        <FavoriteButton />
        <FavoriteButton />
      </div>
    </div>
  );
};

export default Favorite;
