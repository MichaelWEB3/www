import React from "react";

import BaseScreen from "../../components/BaseScreen";

import * as S from "./styles";
// import Chart from "../../components/Chart";
import Statistics from "../../components/Statistics";

import cabaret from "../../assets/cabaret.png";
import cardGift from "../../assets/cardGift.png";

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

function Authentication() {

  let arrInfo2 = [
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
      text: (
        <span>
          produto mais vendido
        </span>
      ),
    },
  ];

  let arrInfo = [
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
          <strong>253.562.251</strong> menssagens no chat
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

  return (
    <BaseScreen>
      <S.Container>
        <Statistics photo={cardGift} data={arrInfo2} total={"20.254.146"} />
        <Statistics photo={cabaret} data={arrInfo} total={"52.425.265"} show />
      </S.Container>
    </BaseScreen>
  );
}

export default Authentication;
