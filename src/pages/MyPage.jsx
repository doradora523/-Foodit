import React from 'react';
import MyPageCategory from '../components/myPage/MyPageCategory';
import { MY_PAGE, SETTING_LOCATION, CHANGE_INFO, LOGOUT } from '../static/constants';
import MyProfile from '../components/common/MyProfile';

function MyPage() {
  return (
    <div class="mt-[47px]">
      <div class="flex flex-col justify-center items-center">
        <div class="text-[16px] font-medium">{MY_PAGE}</div>
        <MyProfile
          svg={
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.1677 0.732422L12.2771 2.62305L17.3552 7.70117L19.2458 5.81055C20.2224 4.83398 20.2224 3.25195 19.2458 2.27539L17.7068 0.732422C16.7302 -0.244141 15.1482 -0.244141 14.1716 0.732422H14.1677ZM11.3943 3.50586L2.28879 12.6152C1.88254 13.0215 1.58567 13.5254 1.4216 14.0762L0.0387918 18.7754C-0.0588645 19.1074 0.0309793 19.4629 0.273167 19.7051C0.515354 19.9473 0.870823 20.0371 1.19895 19.9434L5.89817 18.5605C6.44895 18.3965 6.95285 18.0996 7.3591 17.6934L16.4724 8.58398L11.3943 3.50586Z"
                fill="#9D9D9D"
              />
            </svg>
          }
        />
      </div>

      <div>
        <MyPageCategory name={SETTING_LOCATION} />
        <MyPageCategory name={CHANGE_INFO} />
        <MyPageCategory name={LOGOUT} color={'#EE0707'} />
      </div>

      {/* TODO: 하단 NavBar 추가 예정 */}
    </div>
  );
}

export default MyPage;
