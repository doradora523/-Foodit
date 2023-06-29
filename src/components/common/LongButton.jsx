import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  bottom: ${(props) => props.bottom || '56px'};
`;

const StyledButton = styled.button`
  background: ${(props) => props.background || '#00c92c'};
`;

function LongButton({ type, contents, onClick, background, bottom, customStyle }) {
  return (
    <ButtonWrapper className="w-[360px] h-[50px] fixed left-1/2 translate-x-[-50%]" bottom={bottom}>
      <StyledButton
        className={`w-full h-full rounded-[55px] text-white text-center ${customStyle}`}
        type={type}
        onClick={onClick}
        background={background}
      >
        {contents}
      </StyledButton>
    </ButtonWrapper>
  );
}

export default LongButton;
