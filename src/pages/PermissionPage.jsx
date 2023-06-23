import React from 'react';

import OptionalPermission from '../components/permissionPage/OptionalPermission';

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
import MainButton from '../components/common/MainButton';

function PermissionPage() {
  return (
    <div class="pl-[16px] pt-[136px]">
      <div class="border">
        <div class="border">{PERMISSION_FIRST_TITLE}</div>
        <div class="border">{PERMISSION_SECOND_TITLE}</div>
      </div>
      <div class="border mt-[20px] text-deepGray">{SELECT_PERMISSION}</div>

      <div class="border flex flex-col mt-[20px] h-[280px] justify-between">
        <OptionalPermission src={TEMPORARY_SRC} title={NOTIFICATION} description={NOTIFICATION_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={LOCATION} description={LOCATION_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={CAMERA} description={CAMERA_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={MIKE} description={MIKE_DESCRIPTION} />
        <OptionalPermission src={TEMPORARY_SRC} title={STORAGE} description={STORAGE_DESCRIPTION} />
      </div>

      <div class="border flex w-[360px] h-[50px] items-center mt-[20px] px-[30px] rounded-[10px] text-xs bg-lightGray text-deepGray">
        {PERMISSION_MESSAGE}
      </div>

      <MainButton name={CONFIRM} customClass="mt-[140px] text-white" />
    </div>
  );
}

export default PermissionPage;
