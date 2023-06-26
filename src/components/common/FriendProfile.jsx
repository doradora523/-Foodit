import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${(props) => props.color || '#2572E5'};
`;

function FriendProfile({ name = '', role = '', svg, color }) {
  return (
    <div class="flex flex-col items-center w-[56px]">
      <div class="flex flex-col items-center justify-center">
        <Div className="w-[45px] h-[45px] rounded-full" color={color}></Div>
      </div>
      {svg}
      <div class="h-[20px] text-[13px]">{name}</div>
      <div class="h-[12px] text-[9px] text-smokeGray">{role}</div>
    </div>
  );
}

export default FriendProfile;
