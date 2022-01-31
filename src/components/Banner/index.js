import React, { useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Controller,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import * as S from "./styles";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Controller]);

const Banner = ({ onSwiper, controller }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);

  const slides = [
    "https://player.vimeo.com/video/666905011?h=9ccc764f4b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=0&loop=0&",
  ];

  return (
    <S.Container>
      <Swiper
        onSwiper={setFirstSwiper}
        controller={{ control: firstSwiper }}
        id="main"
        tag="section"
        speed={800}
        effect="flip"
        loop
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {slides.map((item, index) => {
          return (
            <SwiperSlide key={String(index)}>
              <iframe
                style={{width: '100%',padding:'0px',margin:'0px'}}
                src={item}
                allow="autoplay"
              
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                title="unique rs"
              ></iframe>
            </SwiperSlide>
          )
        })}
     
      </Swiper>
    </S.Container>
  );
};

export default Banner;
