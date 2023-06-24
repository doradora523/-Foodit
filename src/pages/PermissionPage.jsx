import React from 'react';

import OptionalPermission from '../components/permissionPage/OptionalPermission';
import LongButton from '../components/common/LongButton';

import {
  PERMISSION_FIRST_TITLE,
  PERMISSION_SECOND_TITLE,
  SELECT_PERMISSION,
  TEMPORARY_SRC,
  NOTIFICATION,
  NOTIFICATION_DESCRIPTION,
  LOCATION,
  LOCATION_DESCRIPTION,
  CAMERA,
  CAMERA_DESCRIPTION,
  MIKE,
  MIKE_DESCRIPTION,
  STORAGE,
  STORAGE_DESCRIPTION,
  PERMISSION_MESSAGE,
  CONFIRM,
} from '../static/constants';

function PermissionPage() {
  return (
    <div class="pt-[136px] relative">
      <div class="h-[50px] pl-[16px] text-[16px] font-semibold">
        <div>
          {PERMISSION_FIRST_TITLE}
          <br />
          {PERMISSION_SECOND_TITLE}
        </div>
      </div>

      <div class="flex items-center h-[26px] mt-[26px] mb-[14px] pl-[15px] text-deepGray text-[10px]">
        {SELECT_PERMISSION}
      </div>

      <div class="flex flex-col h-[280px] pl-[15px] justify-between">
        <OptionalPermission src={TEMPORARY_SRC} title={NOTIFICATION} description={NOTIFICATION_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={LOCATION} description={LOCATION_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={CAMERA} description={CAMERA_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={MIKE} description={MIKE_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={STORAGE} description={STORAGE_DESCRIPTION} />
      </div>

      <div class="flex items-center w-[360px] h-[50px] mt-[26px] ml-[15px] px-[27px] rounded-[10px] bg-lightGray text-[10px] text-deepGray">
        {PERMISSION_MESSAGE}
      </div>

      <LongButton className="start-button" contents={CONFIRM} />
    </div>
  );
}

export default PermissionPage;
