import React, { useState } from 'react';

import * as S from './styles';

import SwiperCore, { Navigation, Pagination, Controller } from 'swiper';
import { Swiper } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Controller]);

function HorizontalList({children, id}) {

  const [swiper, setSwiper] = useState(null);
  return (
    <S.Container>
      <Swiper 
          onSwiper={setSwiper} 
          controller={{ control: swiper }}
          navigation
          className='cards'
          id={id}
          
          tag='section'
         
          freeMode
          breakpoints={{
            // when window width is <= 320px
            767: {
              slidesPerView: 1,
              width: "100vw"
            },
            768: {
              slidesPerView: 2,
              
            },
            850: {
              slidesPerView: 3,
              
            },
            // when window width is <= 640px
            1200: {
              slidesPerView: 4,
              spaceBetween:-30,
            },

            1500: {
              slidesPerView: 5,
              spaceBetween:-30,
            },

           1800: {
              slidesPerView: 6,
              spaceBetween: -30,
            },
          }}
      >
        {children}
      </Swiper>
    </S.Container>
  );
}

export default HorizontalList;