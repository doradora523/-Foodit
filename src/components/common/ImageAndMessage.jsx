import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: ${(props) => props.opacity};
`;

const SubTitle = styled.h1`
  color: ${(props) => props.color || '#00c92c'};
`;

function ImageAndMessage({ mainMessage, subMessage, color, opacity, src }) {
  return (
    <Wrapper className="mt-[180px] w-full transition-all duration-500 ease" opacity={opacity}>
      <div
        className="w-[208px] h-[208px] mx-auto bg-gray"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      />
      <div className="w-230px text-center mt-[18px]">
        <SubTitle className="text-[32px] font-bold text-center mb-[20px]" color={color}>
          {mainMessage}
        </SubTitle>
        <p className="text-center leading-7">{subMessage}</p>
      </div>
    </Wrapper>
  );
}

export default ImageAndMessage;
