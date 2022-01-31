import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import HorizontalList from "../../components/HorizontalList";
import * as S from "./styles";
import "./style.css";
import { useHistory } from "react-router-dom";
import ListaHok from "../../dados/hooks/listaHok";

function Horarios(props) {
  const listaHok = ListaHok();
  const [checado, setchecado] = useState(false);

  const [valorDia, setvalorDia] = useState("");
  const [valorHorarioSe, setvalorHorarioSe] = useState("");
  const [valorPreco, setvalorPreco] = useState("");

  const history = useHistory();

  function radiovalue(horario, dia, valor) {
    setvalorHorarioSe(horario);
    setvalorDia(dia);
    setvalorPreco(valor);
    setchecado(true);
  }

  function proximo() {
    if (checado) return history.push(`/LoginCart/id`);
    alert("Escolha um horario");
  }

  return (
    <>
      <S.Container>
        <img
          alt=""
          id="vireSeuTelefone"
          src="http://i.stack.imgur.com/sValK.png%22/%3E"
        />
        <S.cardZinho>
          <S.cardzinhoItem>
            <S.Thumbnail src={props.img} />
            <S.cardzinhoItemSobre>
              <S.CardFilmeTitle>{props.tituloEsp}</S.CardFilmeTitle>
              <S.CardFilmeSubTitle>{props.artistaEsp}</S.CardFilmeSubTitle>
              <S.CardFilmeData>
                <S.Text> {valorDia}</S.Text>
                <S.Text> {valorHorarioSe}</S.Text>
              </S.CardFilmeData>
              <S.CardFilmeValue> R$: {valorPreco}</S.CardFilmeValue>
            </S.cardzinhoItemSobre>
          </S.cardzinhoItem>
        </S.cardZinho>
        <S.Horarios>
          <Section title="Selecione um horário disponível">
            <HorizontalList id="canais">
              {props.datas.map((card, index) => {
                return (
                  <SwiperSlide key={String(index)}>
                    {card === "" ? (
                      <Card noContent />
                    ) : (
                      <S.Card>
                        <S.data>
                          <S.Span size="20">
                            {" "}
                            Data
                            <br />
                            {card.dia}
                          </S.Span>
                        </S.data>

                        <S.dia>
                          <S.HorarioScroll>
                            {card.horarios.map((horarisPg, ind) => {
                              return (
                                <>
                                  {" "}
                                  <input
                                    key={ind}
                                    className="radio"
                                    onClick={() => {
                                      radiovalue(
                                        horarisPg.horario,
                                        card.dia,
                                        horarisPg.preco
                                      );
                                    }}
                                    type="radio"
                                    id="huey"
                                    name="drone"
                                    value={valorHorarioSe}
                                  />
                                  <S.Span size="17">
                                    {horarisPg.horario} H
                                  </S.Span>{" "}
                                  <S.Span size="15" cor="#FDCC12">
                                    R$ : {horarisPg.preco}
                                  </S.Span>{" "}
                                </>
                              );
                            })}
                          </S.HorarioScroll>
                          <S.Span></S.Span>
                        </S.dia>
                      </S.Card>
                    )}
                    s
                  </SwiperSlide>
                );
              })}
            </HorizontalList>
          </Section>
          <S.Buttons>
            <S.Button className="btn" onClick={() => props.voltar()}>
              <S.Span size="20" cor="#FFF">
                {" "}
                <i className="bi bi-chevron-left"></i>Voltar{" "}
              </S.Span>
            </S.Button>{" "}
            <S.ButtonContinuar
              className="btn btn-warning"
              onClick={() => {
                proximo();
                listaHok.AdicionarEspetaculos({
                  key: props.aidKey,
                  valorDia,
                  valorHorarioSe,
                  valorPreco,
                  link: props.link,
                  direcao: props.direcao,
                  producao: props.producao,
                  elenco: props.elenco,
                  artista: props.artista,
                  sinopsiaEsp: props.sinopsiaEsp,
                  descricaoClassifica: props.descricaoClassifica,
                  classificacao: props.classificacao,
                  thumbnail: props.img,
                  tituloEsp: props.tituloEsp,
                  artistaEsp: props.artistaEsp,
                  categoria: props.categoria,
                  videoID: props.videoID,
                  videoID2: props.videoID2,
                });
              }}
            >
              Continuar
            </S.ButtonContinuar>
          </S.Buttons>
        </S.Horarios>
      </S.Container>
    </>
  );
}

export default Horarios;
