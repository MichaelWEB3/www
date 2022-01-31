import React, { useState } from "react";

import * as S from "./styles";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaStar,
  FaEyeSlash,
  FaHeart,
  FaFacebookMessenger,
  FaTicketAlt,
  FaGift,
  FaMoneyCheck,
} from "react-icons/fa";

import BaseScreen from "../../components/BaseScreen";
import PlayerTrailer from "../../components/PlayerTrailer";
import Button from "../../components/Button";
import Section from "../../components/Section";
import Popup from "../../components/Popup";
import Statistics from "../../components/Statistics";

import { useHistory } from "react-router-dom";
import Preview from "../../components/preview";

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
        <strong>5.286</strong> vezes favoritados
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

function ContentManagement() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [contentInfo ] = useState();
  const [isOwner ] = useState(false);
  return (
    <BaseScreen>
      {isOwner ? (
        <>
          {visible ? <Popup changeVisible /> : null}
          <S.Container>
            <PlayerTrailer />
            <S.Buttons>
              <S.Back className="arrowBack" onClick={() => history.goBack()}>
                <BsArrowLeft />
                <p>Voltar</p>
              </S.Back>
              <div className="impulsionar">
                <Button text="Impulsionar" onClick={() => setVisible(true)} />
              </div>

              <div className="delete">
                <AiOutlineClose />
                <p
                  onClick={() => {
                  }}
                >
                  excluir espetáculo
                </p>
              </div>
            </S.Buttons>

            <span className="division" />

            <Section title="análise">
              <div className="section">
                <Statistics
                  card={contentInfo}
                  data={arrInfo}
                  total={"52.425.265"}
                />
              </div>
            </Section>
          </S.Container>
        </>
      ) : (
        <>
          <Preview />
        </>
      )}
    </BaseScreen>
  );
}

export default ContentManagement;
