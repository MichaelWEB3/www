/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BaseScreen from "../../components/BaseScreen";

import * as S from "./styles";
import Chat from "../../components/Chat";
import ReactPlayer from "react-player";
import { BsPencilSquare } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineReload,
  AiOutlineCopy,
} from "react-icons/ai";
import { MdKeyboardArrowDown, MdRemoveRedEye } from "react-icons/md";
import Switch from "../../components/Switch";

function AdmLive() {
  useEffect(() => {
    handleLine("configurações", 0);
  }, []);

  let arr = [
    {
      text: "configurações",
      status: false,
    },
    {
      text: "análise",
      status: false,
    },
    {
      text: "stream",
      status: false,
    },
  ];

  let arrlat = [
    {
      text: "latência normal",
      status: false,
    },
    {
      text: "baixa latência",
      status: false,
    },
    {
      text: "latência ultrabaixa",
      status: false,
    },
  ];

  const [refresh, setRefresh] = useState(false);
  const [options, setOptions] = useState(arr);
  const [latency, setLatency] = useState(arrlat);
  const [optionStatus, setOptionStatus] = useState({
    text: "configurações",
    status: true,
  });

  const handleSwitch = (value, status) => {
  };

  const changeLatency = (index, value, status) => {
    let newArrlat = arrlat;

    newArrlat.splice(index, 1, {
      text: value,
      status: true,
    });

    setRefresh(!refresh);
    setLatency(newArrlat);
  };

  const handleOptions = (value, status) => {
    if (value === "configurações") {
      return (
        <div className="downContent">
          <div className="inputsconfig">
            <div className="inputs">
              <div className="selectionBox">
                <p>teste</p>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="inputBox">
                <div className="inputPoint">
                  <span>XXXXXXXXXXXXX</span>
                  <MdRemoveRedEye />
                  <AiOutlineReload />
                  <AiOutlineCopy />
                </div>
                <p>(cole esta chave no codificador)</p>
              </div>
              <div className="inputBox">
                <div className="inputPoint">
                  <span>rtmp://a.rtmp.palcoweb.com/live2</span>
                  <AiOutlineCopy />
                </div>
                <p>(URL de stream)</p>
              </div>
              <div className="inputBox">
                <div className="inputPoint">
                  <span>rtmp://b.rtmp.youtube.com/live2?backup=1</span>
                  <AiOutlineCopy />
                </div>
                <p>(URL do servidor de backup)</p>
              </div>
            </div>
            <div className="inputs">
              <div className="switch">
                <p>ativar o início automático</p>
                <Switch size={40} handlePress={handleSwitch} id={"1"} />
              </div>
              <div className="switch">
                <p>ativar a interrupção automática</p>
                <Switch size={40} handlePress={handleSwitch} id={"2"} />
              </div>
              <div className="switch">
                <p>ativar DVR</p>
                <Switch size={40} handlePress={handleSwitch} id={"3"} />
              </div>
              <div className="switch">
                <p>vídeo em 360°</p>
                <Switch size={40} handlePress={handleSwitch} id={"4"} />
              </div>
              <div className="switch">
                <p>legendas ocultas</p>
                <Switch size={40} handlePress={handleSwitch} id={"5"} />
              </div>
              <div className="selectionBox">
                <p>teste</p>
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            <div className="inputs">
              <p>latência da trasmissão</p>
              {latency.map((item, index) => {
                return (
                  <div
                    key={`${index}`}
                    className="roundItem"
                    onClick={() => changeLatency(index, item.text, item.status)}
                  >
                    <S.RoundIndicator latency={item.status} />
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (value === "análise") {
      return (
        <div className="downContent">
          <div className="stats">
            <span>
              Espectadores simultâneos <p>0</p>
            </span>
            <span>
              Taxa de chat <p>0</p>
            </span>
            <span>
              Reproduções <p>0</p>
            </span>
            <span>
              Tempo médio de exibição <p>0</p>
            </span>
          </div>
        </div>
      );
    }

    if (value === "stream") {
      return (
        <div className="downContent">
          <br />
          <br />
          <p>Status da transmissão</p>
          <br />
          <p> Não há dados para mostrar.</p>
          <br />
          <br />
          <p>Menssagens</p>
          <br />
          <p>
            14:45 o palcoweb não está recebendo dados no momento. se isso não
            deveria estar acontecendo, veja se você iniciou a transmissão e se
            ela está configurada com a chave correta.
          </p>
        </div>
      );
    }
  };

  const handleLine = (value, index) => {
    let newArr = arr;

    newArr.splice(index, 1, {
      text: value,
      status: true,
    });

    setRefresh(!refresh);
    setOptions(newArr);
  };

  return (
    <BaseScreen>
      <S.Container circlecolor={"red"}>
        <div className="first">
          <div className="up">
            <div className="upleft">
              <div className="live">
                <div className="circle" />
                <p>ao vivo</p>
              </div>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=sfM7_JLk-84&t=6s"
                width="100%"
                height="100%"
                controls={false}
                playing={false}
              />
            </div>
            <div className="upright">
              <div className="icons">
                <BsPencilSquare />
                <FaShareAlt />
              </div>
              <br />
              <p>
                <strog>Título</strog>
              </p>
              <p>pré-carnaval da mangueira</p>
              <br />
              <p>Telespectadores</p>
              <p>0</p>
              <br />
              <div className="icons">
                <div>
                  <AiOutlineLike />
                  <p>0</p>
                </div>
                <div>
                  <AiOutlineDislike />
                  <p>0</p>
                </div>
              </div>
              <br />
              <p className="help">precisa de ajuda?</p>
            </div>
          </div>
          <div className="down">
            <div className="selector">
              {options.map((item, index) => {
                return (
                  <S.ItemSelector
                    line={item.status}
                    key={`${index}`}
                    onClick={() => {
                      handleLine(item.text, index);
                      setOptionStatus({ text: item.text, status: true });
                    }}
                  >
                    {item.text}
                  </S.ItemSelector>
                );
              })}
            </div>
            {optionStatus.status ? handleOptions(optionStatus.text) : <> </>}
          </div>
        </div>
        <div className="second">
          <div className="title">
            <p>chat ao vivo</p>
          </div>
          <Chat color="#343434" />
        </div>
      </S.Container>
    </BaseScreen>
  );
}

export default AdmLive;
