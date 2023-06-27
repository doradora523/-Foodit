import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  transition: all 0.3s;
  background: ${(props) => props.background || '#2572E5'};
`;

function Carousel({ carouselColor }) {
  return <Circle background={carouselColor} />;
}

export default Carousel;
