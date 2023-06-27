import React from 'react';
import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';

const SelectBox = styled.select`
  position: relative;
  width: 113px;
  height: 48px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  -webkit-appearance: none; /* Safari에서 기본 화살표 숨김 */
  -moz-appearance: none; /* Firefox에서 기본 화살표 숨김 */
  appearance: none; /* 기본 화살표 숨김 */
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const MonthSelectBox = () => {
  const months = Array.from({ length: 12 }, (_, index) => {
    const monthIndex = index + 1;
    const monthName = new Date(0, monthIndex).toLocaleString('default', { month: 'long' });
    return { id: monthName.toUpperCase(), value: `${monthIndex}월` };
  });

  return (
    <div className="relative">
      <SelectBox id="month" defaultValue="월">
        <option disabled>월</option>
        {months.map(month => (
          <option key={month.id} value={month.value}>
            {month.value}
          </option>
        ))}
      </SelectBox>
      <IconWrapper>
        <SlArrowDown />
      </IconWrapper>
    </div>
  );
};

export const DaySelectBox = () => {
  const days = Array.from({ length: 31 }, (_, index) => ({ id: `${index + 1}day`, value: `${index + 1}일` }));

  return (
    <div className="relative">
      <SelectBox id="day" defaultValue="일">
        <option disabled>일</option>
        {days.map(day => (
          <option key={day.id} value={day.value}>
            {day.value}
          </option>
        ))}
      </SelectBox>
      <IconWrapper>
        <SlArrowDown />
      </IconWrapper>
    </div>
  );
};

export const GenderSelectBox = () => {
  return (
    <div className="relative">
      <SelectBox defaultValue="성별" style={{ width: `360px` }}>
        <option disabled>성별</option>
        <option>남</option>
        <option>여</option>
      </SelectBox>
      <IconWrapper>
        <SlArrowDown />
      </IconWrapper>
    </div>
  );
};
