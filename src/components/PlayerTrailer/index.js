import React, { useState } from "react";
import ReactPlayer from "react-player";

import { MdShoppingCart } from "react-icons/md";
import { AiOutlineVideoCamera } from "react-icons/ai";

import * as S from "./styles";

import User from "../../Connections/user";
import Channel from "../../Connections/channel";

import { useHistory, useParams } from "react-router-dom";

// import ticket1 from '../../assets/ticket1.png'
// import ticket2 from '../../assets/ticket2-backstage.png';

const PlayerTrailer = () => {
  const [buyShow, setBuyShow] = useState(false);
  const [viewFav, setViewFav] = useState(false);
  const [fav, setFav] = useState(false);
  const [viewMarket, setviewMarket] = useState(false);
  const [favFav, setfavFav] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [channelId, setChannelId] = useState();
  const [content, setContent] = useState(null);
  const [more, setMore] = useState(false);

  const user = new User();
  const channel = new Channel();
  const history = useHistory();
  const { id } = useParams();

  const getContent = async () => {
    try {
      const recieved = await channel.getContent(id);

      setContent(recieved.data);
    } catch (e) {
    }
  };

  const userInfo = async () => {
    const recieved = await user.me();
    recieved.data.channel.user_id === recieved.data.id && setIsOwner(true);
    setChannelId(recieved.data.channel.key);
  };

    userInfo();
    getContent();


  const parsedcast = content
    ? content.cast !== null
      ? JSON.parse(content.cast).toString()
      : null
    : null;
  const parseddirection = content
    ? content.direction !== null
      ? JSON.parse(content.direction).toString()
      : null
    : null;
  const parsedproduction = content
    ? content.production !== null
      ? JSON.parse(content.production).toString()
      : null
    : null;
  const parsedwriters = content
    ? content.writers !== null
      ? JSON.parse(content.writers).toString()
      : null
    : null;

  return (
    <>
      {content ? (
        <>
          {buyShow ? (
            <>
              <S.Container>
                <div className="reactplayer">
                  <ReactPlayer
                    url={
                      content
                        ? content.teaser
                          ? content.teaser.url
                          : null
                        : null
                    }
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={false}
                  />{" "}
                </div>

                {/* <S.Transition /> */}
                <S.ContentShow>
                  <S.Ticket>
                    <S.MarketIcon>
                      {!viewFav && !fav ? (
                        <MdShoppingCart onMouseEnter={() => setViewFav(true)} />
                      ) : (
                        <MdShoppingCart
                          onMouseLeave={() => setViewFav(false)}
                          onClick={() => setFav(!fav)}
                          style={{ color: "yellow" }}
                        />
                      )}
                    </S.MarketIcon>
                    <S.TicketBackground>
                      <S.ContentTicket>
                        <div className="header">
                          <h1>{content.title}</h1>
                          <h3>com {content.cast}</h3>
                        </div>
                        {/* <div className='price' >
                <p>R$ 39,90</p>
              </div> */}
                        <div className="boxAge">
                          <p>{content.indication}</p>
                        </div>

                        <p className="question">Quando quer assistir?</p>

                        <div className="dataAndTime">
                          <input type="date" />
                          <input type="time" />
                        </div>
                      </S.ContentTicket>
                    </S.TicketBackground>
                  </S.Ticket>

                  <S.TicketTwo>
                    <S.MarketIcon>
                      {!viewMarket && !favFav ? (
                        <MdShoppingCart onMouseEnter={() => setfavFav(true)} />
                      ) : (
                        <MdShoppingCart
                          onMouseLeave={() => setfavFav(false)}
                          onClick={() => setviewMarket(!viewMarket)}
                          style={{ color: "yellow" }}
                        />
                      )}
                    </S.MarketIcon>
                    <S.TicketBackground2>
                      <S.ContentTicketBackStage>
                        <h1>BACKSTAGE</h1>
                        <p className="subTitle">com {content.cast}</p>
                        <p className="price">R$ 19,90</p>
                      </S.ContentTicketBackStage>
                    </S.TicketBackground2>
                  </S.TicketTwo>

                  <S.Buttons>
                    <button
                      className="button-BackStage"
                      onClick={() => setBuyShow(false)}
                    >
                      <MdShoppingCart className="icon" />
                      COMPRAR R$ {content.price}
                    </button>
                  </S.Buttons>
                </S.ContentShow>
              </S.Container>
            </>
          ) : (
            <>
              <S.Container>
                <div className="reactplayer">
                  <ReactPlayer
                    url={
                      content
                        ? content.teaser
                          ? content.teaser.url
                          : null
                        : null
                    }
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={false}
                  />
                </div>
                {isOwner ? (
                  <div className="absolute">
                    <div
                      className="modeAdmin"
                      onClick={() =>
                        history.push(`/newshow/${content.key}`, `${channelId}`)
                      }
                    >
                      <p>editar espetáculo</p>
                      <AiOutlineVideoCamera />
                    </div>
                  </div>
                ) : (
                  <> </>
                )}

                {/* <S.Transition /> */}
                <S.ContentShow>
                  <h2>{content.title}</h2>
                  {parsedcast ? (
                    <h3>com {JSON.parse(content.cast)[0].toString() + "."}</h3>
                  ) : null}

                  {/* <p className='subTitle' > A adaptação de um dos maiores sucessos
        da Broadway de todos os tempos</p> */}

                  {parsedcast &&
                  parsedproduction &&
                  parseddirection &&
                  parsedwriters ? (
                    <span>
                      {more ? (
                        <p>
                          {content.synopsis}
                          <span
                            onClick={() => setMore(false)}
                            className="vermais"
                          >
                            Ver Menos
                          </span>
                        </p>
                      ) : (
                        <p>
                          {content.synopsis.substring(0, 500)}{" "}
                          {content.synopsis.length > 500 ? (
                            <span
                              onClick={() => setMore(true)}
                              className="vermais"
                            >
                              Ver Mais
                            </span>
                          ) : null}
                        </p>
                      )}
                      <p>
                        <strong>Elenco:</strong>{" "}
                        {parsedcast.split(",").join(", ") + "."}{" "}
                      </p>
                      <p>
                        <strong>Produção:</strong>{" "}
                        {parsedproduction.split(",").join(", ") + "."}{" "}
                      </p>
                      <p>
                        <strong>Direção:</strong>{" "}
                        {parseddirection.split(",").join(", ") + "."}{" "}
                      </p>
                      <p>
                        <strong>Texto(versão):</strong>{" "}
                        {parsedwriters.split(",").join(", ") + "."}
                      </p>
                    </span>
                  ) : null}

                  {isOwner ? null : (
                    <S.Buttons>
                      <button onClick={() => setBuyShow(true)}>
                        <MdShoppingCart />
                        {`COMPRAR R$ ${content.price}`}
                      </button>
                    </S.Buttons>
                  )}
                </S.ContentShow>
              </S.Container>
            </>
          )}{" "}
        </>
      ) : null}
    </>
  );
};

export default PlayerTrailer;
