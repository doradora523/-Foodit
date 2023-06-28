import React from 'react';
import { useNavigate } from 'react-router-dom';

import TextAndBackBar from '../components/common/navBar/TextAndBackBar';
import LongButton from '../components/common/LongButton';
import ImageAndMessage from '../components/common/ImageAndMessage';

import { MOVE_TO_HOME, REGISTER_LOCATION_COMPLETE } from '../static/constants';

const RegisterLocationCompletePage = () => {
  const navigate = useNavigate();
  const moveToHomePage = () => navigate('/');

  return (
    <div className="relative w-[390px] overflow-hidden">
      <TextAndBackBar title={'위치등록'} />
      <div className="mt-[-21px]">
        <ImageAndMessage mainMessage={REGISTER_LOCATION_COMPLETE} color={'#2572e5'} />
      </div>

      <LongButton type={'button'} contents={MOVE_TO_HOME} onClick={moveToHomePage} />
    </div>
  );
};

export default RegisterLocationCompletePage;
