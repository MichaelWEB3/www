import React from "react";

import * as S from "./styles";

import Button from "../../components/Button";

function CardAdvantages({ text, img, press }) {
  return (
    <S.Container>
      <S.Card>
        <S.ImageRound>
          <img src={img} alt="logo card vantagens" />
        </S.ImageRound>

        <h2>{text}</h2>

        <S.Action>
          <Button
            text={"Veja Mais Vantagens"}
            onClick={() => press({ status: true, text: text })}
          />
        </S.Action>
      </S.Card>
    </S.Container>
  );
}

export default CardAdvantages;
