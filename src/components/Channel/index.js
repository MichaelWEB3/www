import React, { useState, useEffect } from "react";

import { SwiperSlide } from "swiper/react";
import { GoPlus } from "react-icons/go";


import PlayerChannel from "../PlayerChannelPrevious";
import Section from "../Section";
import HorizontalList from "../HorizontalList";
import Card from "../Card";

import otherChannel from "../../Connections/channel";

// import apresentation from '../../assets/Cabaret Brasil.mp4';

import * as S from "./styles";
import BaseScreen from "../BaseScreen";
import GridList from "../GridList";
import GiftCard from "../GiftCard";
import { useParams } from "react-router-dom";



const Channel = ({data}) => {

  const { id } = useParams();

  const [cards, setCards] = useState([])

  const channel = new otherChannel()

  useEffect(() => {
    getChannel();
  }, []);

  const getChannel = async () => {
    const received = await channel.getChannel(id);

    setCards(received.data.contents)

  };
  const giftItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const card1 = cards.length < 5 ? cards.concat(["", "", "", "", ""]) : cards;

  return (
    <>
      <BaseScreen>
        <PlayerChannel info={data} />
        <S.Container>
          <Section title="espetáculos">
            <HorizontalList id="espetaculos">
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
        
          <Section title="giftshop">
          <GridList> 
            {giftItem.map((item, index) => {
              return (
                <SwiperSlide key={String(index)}>
                  <GiftCard />
                </SwiperSlide>
              );
            })}
          </GridList>
          <S.Button>
            <button onClick={() => alert(`Clicou`)}>
              {" "}
              <GoPlus /> Ver mais
            </button>
          </S.Button>
        </Section>
        </S.Container>
      </BaseScreen>
    </>
  );
};

export default Channel;
