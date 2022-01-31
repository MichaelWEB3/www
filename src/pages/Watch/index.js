import React, { useState } from "react";
import Player from "../../components/Player";
import Section from "../../components/Section";
import Card from "../../components/Card";
import HorizontalList from "../../components/HorizontalList";
import { SwiperSlide } from "swiper/react";

import * as S from "./styles";

import BaseScreen from "../../components/BaseScreen";

import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import elo from "../../assets/elo.png";
import americanExpress from "../../assets/american-express.png";
import hipercard from "../../assets/hipercard.png";

import applepay from "../../assets/applepay.png";
import gpay from "../../assets/gpay.png";
import pagseguro from "../../assets/pagseguro.png";
import { FaHeart } from "react-icons/fa";

import Channel from "../../Connections/channel";

function Watch() {
  // const history = useHistory();
  // const location = useLocation();

  const [donationPoupUp, setDonatioPoupUp] = useState({
    text: "",
    status: false,
  });

  const [refresh, setRefresh] = useState(false);
  const channel = new Channel();
  const [cards, setCards] = useState([]);


  const getContent = async () => {
    try {
      const received = await channel.getContent();
      setCards(received.data);
    } catch (e) {
    }
  };
    getContent();


  const handleDonation = (value) => {
    setDonatioPoupUp(value);
    setRefresh(!refresh);
  };

  const card1 = cards.length < 5 ? cards.concat(["", "", "", "", ""]) : cards;

  return (
    <BaseScreen>
      <S.Container>
        {donationPoupUp.status ? (
          <>
            <div className="poupUp" />

            <div className="poupUpContent">
              <p>
                eu vou doar <span>{donationPoupUp.text}</span>
              </p>
              <br />
              <p>método de pagamento</p>
              <br />
              <br />
              <div className="logos">
                <img src={visa} alt="logo visa" />
                <img src={mastercard} alt="logo mastercard" />
                <img src={elo} alt="logo elo" />
                <img src={americanExpress} alt="logo american express" />
                <img src={hipercard} alt="logo hipercard" />
                <img src={pagseguro} alt="logo pagseguro" />
                <img src={applepay} alt="logo applepay" />
                <img src={gpay} alt="logo gpay" />
              </div>
              <br />
              <p
                className="buttonPoupUp"
                onClick={() => setDonatioPoupUp({ text: "", status: false })}
              >
                <FaHeart className="icon" /> FINALIZAR DOAÇÂO
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="player">
          <Player handleDonation={handleDonation} />
          {/* pass live prop for live prouposes on player */}
        </div>
        <div className="section">
          <Section title="asssitir também">
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
        </div>
      </S.Container>
    </BaseScreen>
  );
}

export default Watch;
