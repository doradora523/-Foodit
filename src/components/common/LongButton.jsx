import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 55px;
  background: ${props => props.background || '#2572E5'};
  color: FFFFFF;
  text-align: center;
`;

function LongButton({ type, contents, onClick, background }) {
  return (
    <div className="w-[360px] h-[50px] fixed bottom-[56px] left-1/2 translate-x-[-50%] text-white">
      <StyledButton type={type} onClick={onClick} background={background}>
        {contents}
      </StyledButton>
    </div>
  );
}

export default LongButton;
