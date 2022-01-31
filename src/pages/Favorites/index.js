import React, {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./styles";
import { MdFavorite } from "react-icons/md";
import BaseScreen from "../../components/BaseScreen";
import Section from "../../components/Section";
import Card from "../../components/Card";
import HorizontalList from "../../components/HorizontalList";
import GiftCard from "../../components/GiftCard";
import GridList from "../../components/GridList";
import RoundedImage from "../../components/RoundedImage";
import Channel from "../../Connections/channel";
import { useHistory } from "react-router-dom";
function Favorites() {
  const history = useHistory();
  const [swiper, setSwiper] = useState(null);

  const channel = new Channel();

  const [cards, setCards] = useState([]);
  const [channels, setChannels] = useState([]);

  
  const getContent = async () => {
    const received = await channel.getContent();

    setCards(received.data);
  };

  const getChannels = async () => {
    const recieved = await channel.getChannel();
    
    setChannels(recieved.data);
  };

  getContent();
  getChannels();
  
  const gift = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  const card1 = cards.length < 5 ? cards.concat(["", "", "", "", ""]) : cards;

  return (
    <BaseScreen>
      <S.Container>
        <S.Title>
          <h1>seus favoritos</h1> <MdFavorite />
        </S.Title>

        <Section title="canais">
          <Swiper
            onSwiper={setSwiper}
            controller={{ control: swiper }}
            navigation
            className="cards"
            tag="section"
            breakpoints={{
              550: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              850: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },

              1500: {
                slidesPerView: 5,
                spaceBetween: -80,
              },

              1800: {
                slidesPerView: 8,
                spaceBetween: -80,
              },
            }}
          >
            {channels.map((item, index) => {
              const banner =
                item.thumbnail_id === null
                  ? "https://palcoweb-dev.s3.amazonaws.com/4ea2c2f4bcafa746a848908a130698df%20-%20decoracao.png"
                  : item.thumbnail.url;
              return (
                <SwiperSlide key={String(index)}>
                  <RoundedImage
                    image={banner}
                    color="#fff"
                    onClick={() => history.push(`channel/${item.key}` )}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Section>

        <Section title="espetáculos">
          <HorizontalList id="emAlta">
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
        <Section title="produtos">
          <GridList>
            {gift.map((item, index) => {
              return (
                <SwiperSlide key={String(index)}>
                  <GiftCard />
                </SwiperSlide>
              );
            })}
          </GridList>
        </Section>
      </S.Container>
    </BaseScreen>
  );
}

export default Favorites;
