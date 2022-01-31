import React, { useState } from "react";

import * as S from "./styles";

import { MdFavoriteBorder, MdFavorite, MdShare } from "react-icons/md";

const CardChannels = ({ title, logoCircular, callBack }) => {
  const [viewFav, setViewFav] = useState(false);
  const [fav, setFav] = useState(false);

  return (
    <S.Container>
      <S.Card onClick={callBack}>
        <S.CircularImg logoCircular={logoCircular}>
          {logoCircular ? (
            <img src={logoCircular} alt="logo" />
          ) : (
            <div className="channel-letter">{`${title[0]}${title[1]}`}</div>
          )}
          <h1>{title}</h1>
        </S.CircularImg>

        <div className="actions">
          {!viewFav && !fav ? (
            <MdFavoriteBorder onMouseEnter={() => setViewFav(true)} />
          ) : (
            <MdFavorite
              onMouseLeave={() => setViewFav(false)}
              onClick={() => setFav(!fav)}
              style={{ color: "red" }}
            />
          )}
          <MdShare />
        </div>
      </S.Card>
    </S.Container>
  );
};

export default CardChannels;
