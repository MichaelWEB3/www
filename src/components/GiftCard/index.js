import React, { useState } from "react";

import {
  MdFavoriteBorder,
  MdShare,
  MdFavorite,
  MdShoppingCart,
  MdStarBorder,
  MdAttachMoney,
} from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";

import * as S from "./styles";

function CardGift({ onClick, admin }) {
  const [hover, setHover] = useState(false);
  const [viewFav, setViewFav] = useState(false);
  const [fav, setFav] = useState(false);

  return (
    <S.Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && !admin && (
        <S.Modal>
          <S.Header>
            <MdShare />
          </S.Header>

          <S.Content>
            {!viewFav && !fav ? (
              <MdFavoriteBorder onMouseEnter={() => setViewFav(true)} />
            ) : (
              <MdFavorite
                onMouseLeave={() => setViewFav(false)}
                onClick={() => setFav(!fav)}
                style={{ color: "red" }}
              />
            )}

            <S.Button onClick={onClick}>
              <MdShoppingCart />
              COMPRAR R$ 39,90
            </S.Button>

            <S.Info>
              <AiOutlineEye />
              mais informações
            </S.Info>
          </S.Content>
        </S.Modal>
      )}
      {hover && admin && (
        <S.Modal>
          <S.Header>
            <MdShare />
          </S.Header>

          <S.ContentAdmin>
            <S.Line>
              <MdStarBorder />
              5,0 classificação geral
            </S.Line>
            <S.Line>
              <AiOutlineEye />
              1.345.986 visualizações
            </S.Line>
            <S.Line>
              <MdFavorite />
              2.690.879 vezes favoritado
            </S.Line>
            <S.Line color>
              <MdAttachMoney />
              produto mais vendido
            </S.Line>
          </S.ContentAdmin>

          <S.Info>
            <AiOutlineEye />
            ver detalhes
          </S.Info>
        </S.Modal>
      )}
    </S.Container>
  );
}

export default CardGift;
