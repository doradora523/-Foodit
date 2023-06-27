import React from 'react';

import TextBar from '../components/common/navBar/TextBar';
import MyProfile from '../components/common/MyProfile';
import LongButton from '../components/common/LongButton';

import { EDIT } from '../static/constants';

function ProfileEditPage() {
  return (
    <div>
      {/* TODO: 공통 컴포넌트로 추후 생성되면 추가 예정 */}
      <TextBar />
      <MyProfile />
      {/* TODO: 공통 컴포넌트로 추후 생성되면 추가 예정 */}
      <LongButton contents={EDIT} />
    </div>
  );
}

export default ProfileEditPage;
