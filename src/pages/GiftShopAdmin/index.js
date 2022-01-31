import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillTag, AiOutlinePlus } from "react-icons/ai";

import * as S from "./styles";

import logoChaim from "../../assets/logo-chaim.png";

import instagram from "../../assets/instagram-yellow.png";
import youtube from "../../assets/youtube-yellow.png";
import linkedin from "../../assets/linkedin-yellow.png";
import tiktok from "../../assets/tiktok-yellow.png";
import facebook from "../../assets/facebook-yellow.png";
import twitter from "../../assets/twitter-yellow.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GiftCard from "../../components/GiftCard";
import PopupGiftShop from "../../components/PopupGiftShop";

function GiftShopAdmin() {
  const [modal, setModal] = useState(false);

  const changeModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal && <PopupGiftShop changeModal={changeModal} />}
      <Header page={2} />
      <S.Container>
        <S.Infos>
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

        <S.Menu>
          <h3>feminino</h3>
          <h3>masculino</h3>
          <h3>infantil</h3>
          <h3>acessórios</h3>
          <h3>decoração</h3>
          <h3>promoção</h3>
          <h3>novidades</h3>
        </S.Menu>

        <S.Filter>
          <BsFilter />
          <S.Ordenar>
            Ordenar por
            <MdKeyboardArrowDown />
          </S.Ordenar>
        </S.Filter>

        <S.Grid>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
          <S.Card>
            <GiftCard admin />
          </S.Card>
        </S.Grid>

        <S.Button onClick={changeModal}>
          <AiOutlinePlus />
          <AiFillTag />
          NOVO ITEM
        </S.Button>
      </S.Container>
      <Footer />
    </>
  );
}

export default GiftShopAdmin;
