import React from 'react';
import Swal from 'sweetalert2';

import BackButton from '../components/common/navBar/BackButton';
import FriendsProfile from '../components/common/FriendsProfile';

import {
  JOIN_ALERT,
  CONFIRM,
  CANCEL,
  SUM,
  WON,
  BEFORE,
  DIVISION,
  ACTUAL_PAYMENT_AMOUNT,
  JOIN,
} from '../static/constants';

function PostsPage() {
  const joinAsMember = () => {
    Swal.fire({
      text: JOIN_ALERT,
      showCancelButton: true,
      confirmButtonColor: '#2572E5',
      cancelButtonColor: '#9D9D9D',
      confirmButtonText: CONFIRM,
      cancelButtonText: CANCEL,
      reverseButtons: true,
    });
  };

  return (
    <div class="relative">
      <div class="w-[100%] h-[340px] bg-gray"></div>
      <div class="top-[47px] absolute">
        <BackButton />
      </div>

      <div class="overflow-scroll h-[400px]">
        <FriendsProfile />
        <div class="mt-[15px] mx-[15px] mb-[3px] text-[16px] font-semibold">
          {'프로틴 바/ 다크 초코씨솔트&카라멜넛, 마이프로틴 바'}
        </div>
        <div class="mx-[15px] text-[10px] text-smokeGray">{`${'과자/간식/시리얼/빙과'} | ${'20분'}${BEFORE}`}</div>
        <div class="pt-[34px] mb-[9px] mx-[15px] text-[13px]">
          {
            '정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~정말 맛있어요~~~'
          }
        </div>

        <div class="w-[360px] h-[200px] p-[14px] mx-[15px] mb-[93px] rounded-[10px] bg-hexGray">
          <div class="w-[332px] h-[113px] p-[13px] rounded-[10px] bg-white font-medium text-[13px]">
            <div class="flex justify-between pb-[13px] border-b-[0.5px] border-gray font-medium">
              <div>{SUM}</div>
              <div>
                <div>{`${'20,000'}${WON}`}</div>
                <div class="float-right">{DIVISION}</div>
              </div>
            </div>

            <div class="flex justify-between items-center h-[47px] font-bold text-[16px] text-mainColor">
              <div>{ACTUAL_PAYMENT_AMOUNT}</div>
              <div>{`${'5,000'}${WON}`}</div>
            </div>
          </div>

          <div class="flex justify-between px-[13px] pt-[10px] text-[13px] font-medium">
            <div>{`내 1/${'4'} 부담금`}</div>
            <div>{`${'5,000'}${WON}`}</div>
          </div>

          <div class="flex justify-between px-[13px] pt-[10px] text-[13px] font-medium">
            <div>{`파티원 ${'3'}명의 몫`}</div>
            <div>{`${'15,000'}${WON}`}</div>
          </div>
        </div>
      </div>

      <div class="flex justify-between w-[100%] h-[107px] px-[15px] pt-[18px] fixed bottom-0 border-t-[0.2px] border-gray bg-white">
        <div class="flex flex-col h-[50px]">
          <div class="text-[10px] text-smokeGray">{`${SUM} ${'20,000'}${WON}`}</div>
          <div class="font-bold text-[16px] text-mainColor">{`${ACTUAL_PAYMENT_AMOUNT} ${'5,000'}${WON}`}</div>
        </div>
        <button onClick={joinAsMember} class="w-[133px] h-[36px] rounded-[5px] bg-mainColor text-white text-[13px]">
          {JOIN}
        </button>
      </div>
    </div>
  );
}

export default PostsPage;
