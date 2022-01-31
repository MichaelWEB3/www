import React from 'react';

import { Swiper } from 'swiper/react';

import * as S from './styles';

function GridList({ children }) {
  return (
    <S.Container>
      <Swiper
        // onSwiper={setSwiper}
        // controller={{ control: swiper }}

        className='cards'
        // id={id}
        // loop
        tag='section'
        pagination={{ clickable: true }}
        spaceBetween={5}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          795: {
            slidesPerView: 3,
            //spaceBetweenSlides: 5
          },
          1000: {
            slidesPerView: 4,
            //spaceBetweenSlides: 5
          },
          1199: {
            slidesPerView: 5,
            // spaceBetweenSlides: 5
          }
        }}
      >
        {children}
      </Swiper>
    </S.Container>
  );
}

export default GridList;