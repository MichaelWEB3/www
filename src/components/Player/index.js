import React, { useState } from "react";
import ReactPlayer from "react-player";
import * as S from "./styles";
import Ticket from "../Ticket";
import { MdChat } from "react-icons/md";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import Chat from "../Chat";
import Channel from "../../Connections/channel";
import { useParams, useHistory } from "react-router-dom";

function Player({ live, handleDonation }) {
  const [overlay, setOverlay] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [side, setSide] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backstage, setBackstage] = useState(false);
  const [chat, setChat] = useState(false);
  const [donation, setDonation] = useState(false);
  const [likes, setLikes] = useState([]);
  const [content, setContent] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);

  const { id } = useParams();
  const history = useHistory();
  const channel = new Channel();

  const getContent = async () => {
    try {
      const recieved = await channel.getContent(id);
      const infochannel = await channel.getChannel(recieved.data.channel.key);

      setChannelInfo(infochannel.data);

      setContent(recieved.data);
    } catch (e) {
    }
  };
  getContent();
  window.addEventListener("resize", function () {
    setWindowWidth(window.innerWidth);
  });

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

  const sideInfo = (value) => {
    if (value === "ticket") {
      setSide(true);
      setChat(false);
      setBackstage(true);
    }
    if (value === "chat") {
      setSide(true);
      setBackstage(false);
      setChat(true);
    }
  };

  const sendLikes = (value) => {
    setLikes((old) => [...old, value]);
  };

  return content ? (
    <S.Container
      side={side}
      mouse={animation}
      img={channelInfo.thumbnail ? channelInfo.thumbnail.url : null}
      onMouseEnter={() => {
        setOverlay(true);
        setAnimation(true);
      }}
      onMouseLeave={() => {
        setAnimation(false);
        setOverlay(false);
      }}
    >
      <ReactPlayer
        className="reactPlayer"
        url={content.file ? content.file.url : null}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
      />

      {likes.map((item, index) => {
        return (
          <S.Reaction number={index} key={`${index}`} className="reaction">
            <img src={item} alt="emoji" />
          </S.Reaction>
        );
      })}

      {live ? (
        <>
          {overlay ? (
            <>
              <div className="titleContent">
                <p>
                  <strong>{content.title}</strong> com{" "}
                  {parsedcast.split(",").join(" - ") + " ."}{" "}
                  <span>{content.indication}</span>
                </p>
              </div>
              <div className="iconChat" onClick={() => sideInfo("chat")}>
                <MdChat />
              </div>
              <div className="buttonLiveContent">
                <p className="textLive">Apoie a arte nacional.</p>
                <p
                  className="buttonLive"
                  onClick={() => {
                    sideInfo("chat");
                    setDonation(true);
                  }}
                >
                  <FaHeart className="liveIcon" size={15} /> FAÇA UMA DOAÇÃO
                </p>
              </div>
            </>
          ) : null}
        </>
      ) : (
        <>
          {overlay ? (
            <>
              <div
                className="logoChannel"
                onClick={() => history.push(`/channel/${content.channel.key}`)}
              />

              <div className="titleContent">
                <p>
                  <strong>{content.title}</strong> com{" "}
                  {parsedcast && (
                    <>{parsedcast.split(",").join(" - ") + " ."}</>
                  )}
                  <span>{content.indication}</span>
                </p>
                <div className="Tiket" onClick={() => sideInfo("ticket")}>
                  <Ticket size={windowWidth * 0.013} gold />
                </div>
              </div>
              <div className="iconChat" onClick={() => sideInfo("chat")}>
                <MdChat />
              </div>
              {/* <div className="giftSectionContainer">
                <span className="textGift">giftshop</span>
                <div className="giftSection">
                  <p />
                  <p />
                  <p />
                  <p />
                  <p />
                </div>
                <span
                  onClick={() => {
                    sendLikes();
                  }}
                  className="plusButton"
                >
                  <FaPlus size={12} />
                </span>
              </div> */}
            </>
          ) : null}
        </>
      )}

      {side ? (
        <>
          <div
            className="sideContent"
            onMouseEnter={() => {
              setOverlay(true);
              setAnimation(true);
            }}
            onMouseLeave={() => {
              setAnimation(false);

              setOverlay(false);
            }}
          >
            {backstage ? (
              <>
                <div className="topIcons">
                  <div className="left">
                    <FaArrowLeft
                      className="icons-set"
                      color={"#fff"}
                      onClick={() => {
                        setSide(false);
                        setOverlay(true);
                      }}
                    />
                    <FaHeart className="icons-set" color={"red"} />
                    <span className="boxAge">{content.indication}</span>
                  </div>
                  <div className="right">
                    {/* <div className="iconBox">
                      <MdChat />
                    </div> */}
                  </div>
                </div>
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
                      <p>{content.synopsis.substring(0, 500) + " ..."}</p>
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
                </S.ContentShow>
                <div className="bottomELement">
                  <Ticket size={30} gold />
                </div>
              </>
            ) : null}

            {chat ? (
              <>
                <div className="topIconsChat">
                  <FaArrowLeft
                    color={"#fff"}
                    onClick={() => {
                      setSide(false);
                      setOverlay(true);
                    }}
                  />
                  <p>
                    <strong>{content.title}</strong>{" "}
                    {parsedcast.split(",").join(" - ") + " ."}{" "}
                  </p>
                  <span className="boxAge">{content.indication}</span>
                </div>

                <div className="chat">
                  <Chat like={sendLikes} />
                </div>

                <div className="chatBottom">
                  {live ? (
                    <>
                      {donation ? (
                        <div className="donation">
                          <p>
                            <strong>Doar</strong>
                          </p>

                          <p>
                            <span
                              onClick={() =>
                                handleDonation({ text: "R$10", status: true })
                              }
                            >
                              R$10
                            </span>{" "}
                            <span
                              onClick={() =>
                                handleDonation({ text: "R$25", status: true })
                              }
                            >
                              R$25
                            </span>{" "}
                            <span
                              onClick={() =>
                                handleDonation({ text: "R$50", status: true })
                              }
                            >
                              R$50
                            </span>
                          </p>

                          <p>
                            <span
                              onClick={() =>
                                handleDonation({ text: "R$100", status: true })
                              }
                            >
                              R$100
                            </span>{" "}
                            <span
                              onClick={() =>
                                handleDonation({ text: "R$200", status: true })
                              }
                            >
                              R$200
                            </span>{" "}
                            <span
                              onClick={() =>
                                handleDonation({ text: "R$500", status: true })
                              }
                            >
                              R$500
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div
                          className="buttonLiveChat"
                          onClick={() => setDonation(true)}
                        >
                          <p className="textLive">Apoie a arte nacional.</p>
                          <p className="buttonLive">
                            <FaHeart className="liveIcon" size={15} /> FAÇA UMA
                            DOAÇÃO
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <Ticket gold size={15} />
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </S.Container>
  ) : null;
}

export default Player;
