import React, { useState, useEffect } from "react";

import * as S from "./styles";
import BaseScreen from "../../components/BaseScreen";
import Section from "../../components/Section";
import Statistics from "../../components/Statistics";

import cardGift from "../../assets/cardGift.png";
import GiftCard from "../../components/GiftCard";
import Card from "../../components/Card";

import {
  FaStar,
  FaEyeSlash,
  FaHeart,
  FaFacebookMessenger,
  FaTicketAlt,
  FaGift,
  FaMoneyCheck,
  FaDollarSign, 
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import Channel from "../../Connections/channel";

import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function Stats() {
  const channel = new Channel();
  const { id } = useParams();

  let arrgift = [
    {
      icon: <FaStar />,
      text: (
        <span>
          <strong>5.0</strong> classificação geral
        </span>
      ),
    },
    {
      icon: <FaEyeSlash />,
      text: (
        <span>
          <strong>1.000</strong> visualizações
        </span>
      ),
    },
    {
      icon: <FaHeart />,
      text: (
        <span>
          <strong>5.286</strong> vezes favoritado
        </span>
      ),
    },
    {
      icon: <FaDollarSign />,
      text: <span>produto mais vendido</span>,
    },
  ];

  let arrshow = [
    {
      icon: <FaStar />,
      text: (
        <span>
          <strong>5.0</strong> classificação geral
        </span>
      ),
    },
    {
      icon: <FaEyeSlash />,
      text: (
        <span>
          <strong>1.000</strong> telespectadores
        </span>
      ),
    },
    {
      icon: <FaHeart />,
      text: (
        <span>
          <strong>5.286</strong> vezes favoritado
        </span>
      ),
    },
    {
      icon: <FaFacebookMessenger />,
      text: (
        <span>
          <strong>253.562.251</strong> mensagens no chat
        </span>
      ),
    },
    {
      icon: <FaTicketAlt />,
      text: (
        <span>
          <strong>562.521</strong> backstages vendidos
        </span>
      ),
    },
    {
      icon: <FaGift />,
      text: (
        <span>
          <strong>40.251.121</strong> em itens de gift shop
        </span>
      ),
    },
    {
      icon: <FaMoneyCheck />,
      text: (
        <span>
          <strong>659.126.165</strong> em patrocínio
        </span>
      ),
    },
  ];


  let showGift = [
    cardGift,
    cardGift,
    cardGift,
    cardGift,
    
  ];
  let arrTitle = [
    {
      text: "espetáculo",
      status: false,
    },
    {
      text: "giftshop",
      status: false,
    },
  ];

  const [swiper, setSwiper] = useState(null);
  const [mode, setMode] = useState(arrTitle);
  const [options, setOptions] = useState({
    text: "espetáculo",
    status: true,
  });

  const [channelData, setChannelData] = useState();
  const [showItem , setShowItem] = useState([]);

  useEffect(() => {
    let arrTitle = [
      {
        text: "espetáculo",
        status: false,
      },
      {
        text: "giftshop",
        status: false,
      },
    ];

    arrTitle.splice(0, 1, {
      text: "espetáculo",
      status: true,
    });

    setMode(arrTitle);
  }, [channel, id]);

  useEffect(() => {
    channel
      .getChannel(id)
      .then((res) => {
        setChannelData(res.data);
        setShowItem(res.data.contents)
      })
      .catch((err) =>[]);
  }, [channel, id]);

  const card1 = showItem.length < 5 ? showItem.concat(["", "", "", "", ""]) : showItem;

  const setRender = (value) => {
    if (value === "espetáculo") {
      return (
        <>
          <Section title="Sucesso de Público">
            <Statistics
              card={channelData.contents[0]}
              data={arrshow}
              total={"R$ 52.425.265"}
              show
            />
          </Section>
          <Section title="Todos os Espetáculos">
            <Swiper
              onSwiper={setSwiper}
              controller={{ control: swiper }}
              navigation
              className="cards"
              tag="section"
              freeMode
              breakpoints={{
                // when window width is <= 320px
                550: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                850: {
                  slidesPerView: 3,
                },
                // when window width is <= 640px
                1200: {
                  slidesPerView: 4,
                },

                1500: {
                  slidesPerView: 5,
                  spaceBetween: -80,
                },

                1800: {
                  slidesPerView: 6,
                  spaceBetween: -80,
                },
              }}
            >
              {card1.map((item, index) => {
                return (
                  <SwiperSlide key={String(index) }>
                     {item === "" ? (
                        <Card noContent />
                      ) : (
                        <Card index={index} info={item} />
                      )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Statistics
               card={channelData.contents[0]}
              data={arrshow}
              total={"R$ 52.425.265"}
              show
            />
          </Section>
        </>
      );
    }

    if (value === "giftshop") {
      return (
        <>
          <Section title="Sucesso de Vendas">
            <Statistics
              photo={cardGift}
              data={arrgift}
              total={"R$ 52.425.265"}
            />
          </Section>
          <Section title="Todos os Produtos">
            <Swiper
              onSwiper={setSwiper}
              controller={{ control: swiper }}
              navigation
              className="cards"
              tag="section"
              // freeMode
              breakpoints={{
                // when window width is <= 320px
                550: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                850: {
                  slidesPerView: 3,
                },
                // when window width is <= 640px
                1200: {
                  slidesPerView: 4,
                },

                1500: {
                  slidesPerView: 5,
                  spaceBetween: -80,
                },

                1800: {
                  slidesPerView: 6,
                  spaceBetween: -80,
                },
              }}
            >
              {showGift.map((item, index) => {
                return (
                  <SwiperSlide key={String(index)}>
                    <GiftCard  stats/>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <Statistics
              photo={cardGift}
              data={arrgift}
              total={"R$ 52.425.265"}
            />
          </Section>
        </>
      );
    }
  };

  return (
    <BaseScreen>
   
      {channelData ? (
        <S.Container>
          <div className="title">
            {mode.map((item, index) => {
              return (
                <S.Title
                  key={String(index)}
                  line={item.status}
                  onClick={() => {
                    arrTitle.splice(index, 1, {
                      text: item.text,
                      status: true,
                    });
                    setMode(arrTitle);
                    setOptions({ text: item.text, status: true });
                  }}
                >
                  {item.text}
                </S.Title>
              );
            })}
          </div>
          <div className="subTitle">
            <h4>faturamento total</h4>
            <p>R$ 20.564.451</p>
          </div>
          {options.status ? <>{setRender(options.text)}</> : null}
        </S.Container>
      ) : <Loading size={400}/>}
    </BaseScreen>
  );
}

export default Stats;
