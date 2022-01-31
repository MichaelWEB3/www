/* eslint-disable array-callback-return */
import React, { useState } from "react";

import {
  MdFavoriteBorder,
  MdShare,
  MdFavorite,
  MdStarBorder,
  MdStar,
} from "react-icons/md";

import { BsFillInfoCircleFill } from "react-icons/bs";


import { useHistory } from "react-router-dom";

import background from '../../assets/logoPalcoweb.png';

import * as S from "./styles";
import Loading from "../Loading";

function Card({ info, index, isOwner, noContent }) {
  const [hover, setHover] = useState(false);
  const [stars, setStars] = useState(0);
  const [viewFav, setViewFav] = useState(false);
  const [fav, setFav] = useState(false);


  const history = useHistory();

  const parsed = info ? JSON.parse(info.cast) : null;

  return (
    <>
      {noContent ? (    
          <S.CardEmpty>
           <img src={background} alt=''/>
          </S.CardEmpty>
        ) : (
          <>
          {info ? (        
        <S.Container
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          img={info.thumbnail ? info.thumbnail.url : null}
        >
          {hover && (
            <S.Modal>
              <S.Header>
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
              </S.Header>

              <S.Content>
                <h1>{info.title ? info.title : null}</h1>
                <h2>com {parsed ? parsed[0] : null}</h2>

                <p>
                  {info.synopsis
                    ? info.synopsis.substring(0, 75) + " ..."
                    : null}
                </p>

                <S.Stars>
                  {[1, 2, 3, 4, 5].map((index, item) => {
                    if (stars < item) {
                      return (
                        <MdStarBorder
                          key={`${index}-icon`}
                          onClick={() => setStars(item)}
                          // onMouseEnter={() => {setViewStars(item)}}
                        />
                      );
                    } else if (stars >= item) {
                      return (
                        <MdStar
                          key={`${index}-icon`}
                          onClick={() => setStars(item)}
                          // onMouseLeave={() => {setViewStars(0)}}
                        />
                      );
                    }
                  })}
                </S.Stars>

                {isOwner ? null : (
                  <>
                    {" "}
                    <S.Button
                      onClick={() => {
                        // store.sendToKart(String(index));
                        // history.push("/cart");

                        history.push(`/watch/${info.key ? info.key : null}`);
                      }}
                    >
                      {/* <MdShoppingCart /> */}
                      Assitir
                    </S.Button>
                  </>
                )}

                <S.Info
                  onClick={() => {
                    history.push(
                      `/content/management/${info.key ? info.key : null}`
                    );
                  }}
                >
                  <BsFillInfoCircleFill />
                  mais informações
                </S.Info>
              </S.Content>
            </S.Modal>
          )}
        </S.Container>
        
      ) : (
        <Loading size={50} />
      )}
      </>
      )}
    </>
  );
}

export default Card;
