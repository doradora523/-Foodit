import React, { useState } from 'react';
import Carousel from '../components/common/Carousel';
import ImageAndMessage from '../components/common/ImageAndMessage';
import LongButton from '../components/common/LongButton';

const WalkthroughPage = () => {
  const [carouselColor, setCarouselColor] = useState(['#2572e5', '#d9d9d9']);
  const [walkthroughPosition, setWalkthroughPosition] = useState(0);
  const [firstImageVisible, setFirstImageVisible] = useState(true);

  const PageChangeHandler = () => {
    setCarouselColor(['#d9d9d9', '#2572e5']);
    setFirstImageVisible(false);
    if (firstImageVisible) {
      setTimeout(() => {
        setWalkthroughPosition(-50);
      }, 100);
    }
  };

  return (
    <div className="relative w-[390px] overflow-hidden">
      <div
        className="walkthroughWrapper w-[780px] flex transition-all duration-500 ease"
        style={{
          transform: `translateX(${walkthroughPosition}%)`,
        }}
      >
        <ImageAndMessage
          opacity={firstImageVisible ? 1 : 0}
          // image 추가할때 props 전달
          mainMessage={'우리동네'}
          subMessage={
            <>
              가까운 동네 친구들과 물건을
              <br /> 나눠가져요 가까운 동네 친구들과
              <br /> 물건을 나눠가져요
            </>
          }
        />
        <ImageAndMessage
          opacity={firstImageVisible ? 0 : 1}
          imgLeft={'480px'}
          msgLeft={'470px'}
          // image 추가할때 props 전달
          mainMessage={'함께사요'}
          color={'#EE0707'}
          subMessage={
            <>
              한번에 많은 물건을 혼자사기
              <br />
              부담스럽다면 동네 친구들과 함께
              <br />
              구입하고 먹을만큼 나눠가져요
            </>
          }
        />
      </div>
      <div className="flex justify-between w-[30px] fixed bottom-[125px] left-1/2 translate-x-[-50%]">
        <Carousel carouselColor={carouselColor[0]} />
        <Carousel carouselColor={carouselColor[1]} />
      </div>
      <LongButton type={'button'} contents={'시작하기'} onClick={PageChangeHandler} />
    </div>
  );
};

export default WalkthroughPage;
