import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdShare,
  MdShoppingCart,
} from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import * as S from "./styles";

import { SwiperSlide, Swiper } from "swiper/react";

import logoChaim from "../../assets/logo-chaim.png";

import SwiperCore, { Navigation, Pagination, Controller } from "swiper";

import instagram from "../../assets/instagram-yellow.png";
import youtube from "../../assets/youtube-yellow.png";
import linkedin from "../../assets/linkedin-yellow.png";
import tiktok from "../../assets/tiktok-yellow.png";
import facebook from "../../assets/facebook-yellow.png";
import twitter from "../../assets/twitter-yellow.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GridList from "../../components/GridList";
import Section from "../../components/Section";
import GiftCard from "../../components/GiftCard";
import BaseScreend from "../../components/BaseScreen";

import bone from "../../assets/bone.png";
import girl from "../../assets/girl.png";
import mug from "../../assets/mug.png";

SwiperCore.use([Navigation, Pagination, Controller]);

function GiftShop() {
  const [buys, setBuys] = useState(true);
  const [viewFav, setViewFav] = useState(false);
  const [fav, setFav] = useState(false);
  const [firstSwiper, setFirstSwiper] = useState(null);

  const slides = [
    <SwiperSlide>
      <img src={bone} alt="Imagem 1" />
    </SwiperSlide>,
    <SwiperSlide>
      <img src={girl} alt="Imagem 2" />
    </SwiperSlide>,
    <SwiperSlide>
      <img src={mug} alt="Imagem 3" />
    </SwiperSlide>,
  ];

  if (buys === true) {
    return (
      <BaseScreend>
        <S.BackgroundShop>
          <S.LogoSocial className="logoSocial">
            <img src={logoChaim} alt="logotipo Chaim Entretenimento" />
            <S.Social>
              <a href="https://www.facebook.com">
                <img src={facebook} alt="logo do facebook" />
              </a>
              <a href="https://www.facebook.com">
                <img src={instagram} alt="logo do instagram" />
              </a>

              <a href="https://www.facebook.com">
                <img src={twitter} alt="logo do twitter" />
              </a>

              <a href="https://www.facebook.com">
                <img src={tiktok} alt="logo do tiktok" />
              </a>

              <a href="https://www.facebook.com">
                <img src={linkedin} alt="logo do linkedin" />
              </a>

              <a href="https://www.facebook.com">
                <img src={youtube} alt="logo do youtube" />
              </a>
            </S.Social>
          </S.LogoSocial>

          <S.Buy>
            <S.Pagination>
              <Swiper
                onSwiper={setFirstSwiper}
                controller={{ control: firstSwiper }}
                id="main"
                tag="section"
                speed={800}
                effect="fade"
                loop
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                fadeEffect={{
                  crossFade: true,
                }}
                currentClass="#fff"
              >
                {slides}
              </Swiper>
            </S.Pagination>

            <S.Information>
              <p>
                Titulo: <strong>Camiseta melhores do mundo unisex</strong>{" "}
              </p>
              <p>
                Tamanho: <strong></strong> Único{" "}
              </p>
              <p>
                Data de Compra: <strong>29/06/2020</strong>{" "}
              </p>
              <p>
                Meio de pagamento: <strong>**** **** **** 5435</strong>
              </p>
              <p>
                Valor: <strong>R$ 35,00</strong>{" "}
              </p>

              <span>
                {!viewFav && !fav ? (
                  <MdFavoriteBorder onMouseEnter={() => setViewFav(true)} />
                ) : (
                  <MdFavorite
                    onMouseLeave={() => setViewFav(false)}
                    onClick={() => setFav(!fav)}
                    style={{ color: "yellow" }}
                  />
                )}
                <MdShare />
              </span>
            </S.Information>
          </S.Buy>

          <S.Buttons>
            <S.Back className="arrowBack" onClick={() => setBuys(false)}>
              <BsArrowLeft />
              <p>Voltar</p>
            </S.Back>

            <button onClick={() => alert("compra efetuada")}>
              <MdShoppingCart />
              COMPRAR R$139,60
            </button>
          </S.Buttons>
          <span className="division" />
          <Section title="giftshop">
            <GridList>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
            </GridList>
          </Section>
        </S.BackgroundShop>
      </BaseScreend>
    );
  }

  return (
    <>
      <Header page={2} />
      <S.Container>
        <S.Infos>
          <S.Filter>
            <h2>filtrar por</h2>
            <BsFilter />
          </S.Filter>
          <S.LogoSocial>
            <img src={logoChaim} alt="logotipo Chaim Entretenimento" />
            <S.Social>
              <a href="https://www.facebook.com">
                <img src={facebook} alt="logo do facebook" />
              </a>
              <a href="https://www.facebook.com">
                <img src={instagram} alt="logo do instagram" />
              </a>

              <a href="https://www.facebook.com">
                <img src={twitter} alt="logo do twitter" />
              </a>

              <a href="https://www.facebook.com">
                <img src={tiktok} alt="logo do tiktok" />
              </a>

              <a href="https://www.facebook.com">
                <img src={linkedin} alt="logo do linkedin" />
              </a>

              <a href="https://www.facebook.com">
                <img src={youtube} alt="logo do youtube" />
              </a>
            </S.Social>
          </S.LogoSocial>
        </S.Infos>
        <S.Content>
          <Section title="giftshop">
            <GridList>
              <SwiperSlide>
                <GiftCard onClick={() => setBuys(true)} />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
              <SwiperSlide>
                <GiftCard />
              </SwiperSlide>
            </GridList>
          </Section>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
}

export default GiftShop;
