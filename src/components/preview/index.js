import React, { useState} from 'react';

import { SwiperSlide } from 'swiper/react';

import Player from '../PlayerTrailer';
import Section from '../Section';
import HorizontalList from '../HorizontalList';
import Card from '../Card';
import BannerChannel from '../BannerChannel';
import GiftCard from '../GiftCard';


import * as S from './styles';

const Preview = () => {

  const [cards, setCards] = useState([])
  const [gift] = useState([1,2,3,4,5,6,7,8,9,10])

 
    const received = "channel.getContent()"
    setCards(received.data)
 
  
  const card1 = cards.length < 5 ? cards.concat(["", "", "", "", ""]) : cards;

  return (
    <S.Container>
      <Player/>

      <Section title='giftshop' >
        <HorizontalList id='assista'>
            { 
              gift.map((card, index) => {
                return (
                  <SwiperSlide key={String(index)}>
                    <GiftCard/>
                  </SwiperSlide>
                )
              })
            }
          </HorizontalList>
        </Section>

      <Section title='canal' >
        <BannerChannel ViewSocialButtons={true} />
      </Section>

      <Section title='assista também'>
          <HorizontalList id='assista'>
          {card1.map((card, index) => {
                return (
                  <SwiperSlide key={String(index)}>
                    {card === "" ? (
                        <Card noContent />
                      ) : (
                        <Card index={index} info={card} />
                      )}
                  </SwiperSlide>
                );
              })}
          </HorizontalList>
        </Section>

    </S.Container>
  );
}

export default Preview;