import React, { useState } from "react";

import * as S from "./styles";

import { BsArrowLeft } from "react-icons/bs";

import BaseScreen from "../../components/BaseScreen";
import Section from "../../components/Section";
import CardAdvanteges from "../../components/CardAdvantages";

import telespectador from "../../assets/telespectador.png";
import artista from "../../assets/artista.png";
import investidor from "../../assets/investidor.png";
import produtora from "../../assets/produtora.png";
import AnimetedInfo from "../../components/AnimetedInfo";

function Signature() {
  const [pressed, setPressed] = useState({
    status: false,
    text: "Telespectador",
  });

  let arr = [
    {
      src: telespectador,
      title: "Telespectador",
      text:
        "Assista peças teatrais, stand-ups, shows e outros espetáculos no conforto e segurança do seu lar e por um preço que cabe no seu bolso. E mais: apoie seus artistas favoritos interagindo com eles no backstage e/ou comprando produtos temáticos.",
    },
    {
      src: artista,
      title: "Artista",
      text:
        "O PalcoWeb é uma plataforma inclusiva, que permite que você promova seu trabalho em um espaço amigável e com alcance mundial. Fique mais perto dos seus fãs sem precisar se deslocar.",
    },
    {
      src: investidor,
      title: "Investidor",
      text:
        "Escolha investir em uma ideia inovadora e promissora. Oferecemos condições especiais para participação na empresa e lucros.",
    },
    {
      src: produtora,
      title: "Produtora",
      text:
        "Abra seu próprio canal e envie vídeos, faça lives, crie sua giftshop e cobre quanto quiser por isso.",
    },
  ];

  const whichIsSetted = (value) => {
    if (value === "Telespectador") {
      return <AnimetedInfo toShow={value} info={arr}/>;
    }
    if (value === "Produtora") {
      return <AnimetedInfo toShow={value} info={arr}/>;
    }
    if (value === "Investidor") {
      return <AnimetedInfo toShow={value} info={arr}/>;
    }
    if (value === "Artista") {
      return <AnimetedInfo toShow={value} info={arr}/>;
    }
  };

  return (
    <BaseScreen>
      <S.Container>
        <Section title="Torne-se um membro">
          <Section title="o palcoweb é para você">
            {pressed.status ? (
              <>{whichIsSetted(pressed.text)}</>
            ) : (
              <S.Row>
                <CardAdvanteges
                  img={telespectador}
                  text={"Telespectador"}
                  press={setPressed}
                />
                <CardAdvanteges
                  img={produtora}
                  text={"Produtora"}
                  press={setPressed}
                />
                <CardAdvanteges
                  img={investidor}
                  text={"Investidor"}
                  press={setPressed}
                />
                <CardAdvanteges
                  img={artista}
                  text={"Artista"}
                  press={setPressed}
                />
              </S.Row>
            )}
          </Section>
        </Section>
        <S.Back className="arrowBack" onClick={() => setPressed({status: false, text:""})}>
          <BsArrowLeft />
          <p>Voltar</p>
        </S.Back>
      </S.Container>
    </BaseScreen>
  );
}

export default Signature;
