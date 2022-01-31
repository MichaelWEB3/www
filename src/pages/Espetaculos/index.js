import React, { useContext, useEffect } from "react";

import * as S from "./styles";

import { SwiperSlide } from "swiper/react";
import HorizontalList from "../../components/HorizontalList";
import Card from "../../components/Card";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import ListaTeste from "./lista";
import listaCanais from "./listaCard";
import firebase from "firebase";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import * as SCard from "../Canais/styles";

function Espetaculos() {
  const { currentUser } = useContext(AuthContext);
  const ListaCanais = listaCanais;

  const api = axios.create({
    baseURL: "https://json-serverepw.herokuapp.com/user",
  });


  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      const userId = firebase.auth().currentUser.uid;

      async function fav() {
        const { data } = await api.get("/" + userId);

        if (data.fav !== undefined) {
          localStorage.setItem("fav", JSON.stringify(data.fav));
        } else {
          localStorage.setItem("fav", []);
        }
        if (data.assistidos !== undefined) {
          localStorage.setItem("assistidos", JSON.stringify(data.assistidos));
        } else {
          localStorage.setItem("assistidos", []);
        }
        if (data.comprados !== undefined) {
          localStorage.setItem("comprados", JSON.stringify(data.comprados));
          console.log(data.comprados)
        } else {
          localStorage.setItem("comprados", []);
        }
        if (data.favCanais !== undefined) {
          localStorage.setItem(
            "canaisFavoritos",
            JSON.stringify(data.favCanais)
          );
        } else {
          localStorage.setItem("canaisFavoritos", []);
        }
      }
      fav();
    } else {
      history.push("/login");
    }
  }, [api, currentUser, history]);

  function PaginaAssitir(dia, mes, ano, horas, videoID, videoID2, key) {
    history.push(`/playespetaculo/${videoID}/${videoID2}/${key}`);
  }


  return (
    <>
      <Header />

      <S.Container>
        <h2>Meus Espetáculos</h2>
        <Section title="Adquiridos" filter>
          <HorizontalList id="emAlta">
            {ListaTeste?.map((card, index) => {
              if (!localStorage.getItem("comprados"))
                return (
                  <SwiperSlide key={String(index)}>
                    <Card noContent />
                  </SwiperSlide>
                );
              return (
                <SwiperSlide key={String(index)}>
                  {!localStorage.getItem("comprados").includes(card?.title) ? (
                    <>
                      <Card noContent />
                      {/* <S.A onClick={() => validacaoHorario(card)} > Assistir</S.A> */}
                    </>
                  ) : (
                    <S.CardTest>
                      <S.Img
                        src={card?.thumbnail}
                        style={{
                          position: "absolute",
                          width: 250,
                          height: 400,
                        }}
                        value={card?.key}
                      />

                      <S.InfoCard>
                        <S.InfoCardConteudo>
                          <S.Classificacao>
                            {card?.classificacao}
                          </S.Classificacao>
                          <S.Coracao>
                            <i className="bi bi-suit-heart-fill"></i>
                          </S.Coracao>

                          <S.Compartilhar>
                            <i className="bi bi-share-fill"></i>
                          </S.Compartilhar>
                        </S.InfoCardConteudo>

                        <S.Titulo>{card?.tituloEsp} </S.Titulo>
                        
                        <S.ConteudoCard>Com {card?.artista}</S.ConteudoCard>

                        {/* <S.ConteudoCard>
                          <i className="bi bi-star-fill"></i>{" "}
                          <i className="bi bi-star-fill"></i>{" "}
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </S.ConteudoCard> */}
                        <S.ConteudoCard>{card?.categoria}</S.ConteudoCard>
                        <S.Sinopsia style={{ overflow: "hidden" }}>
                          {card?.synopsis}
                        </S.Sinopsia>

                        <S.ButtonAcessar
                          onClick={() => {
                            PaginaAssitir(
                              card?.valorHorarioSe?.dia,
                              card?.valorHorarioSe?.mes,
                              card?.valorHorarioSe?.ano,
                              card?.valorHorarioSe?.horas,
                              card?.videoID,
                              card?.videoID2,
                              card?.key
                            );
                          }}
                          className="btn btn-warning"
                          style={{color: "#000"}}
                        >
                          {" "}
                          Assistir{" "}
                        </S.ButtonAcessar>
                      </S.InfoCard>
                    </S.CardTest>
                  )}
                </SwiperSlide>
              );
            })}
          </HorizontalList>
        </Section>
        <Section title="Favoritos" filter>
          <HorizontalList id="emAlta">
            {ListaTeste?.map((card, index) => {
              if (!localStorage.getItem("fav"))
                return (
                  <SwiperSlide key={String(index)}>
                    <Card noContent />
                  </SwiperSlide>
                );
              return (
                <SwiperSlide key={String(index)}>
                  {!localStorage.getItem("fav").includes(card.title) ? (
                    <Card noContent />
                  ) : (
                    <S.CardTest>
                      <S.Img
                        src={card?.thumbnail}
                        style={{
                          position: "absolute",
                          width: 250,
                          height: 400,
                        }}
                        value={card?.key}
                      />

                      <S.InfoCard>
                        <S.InfoCardConteudo>
                          <S.Classificacao>
                            {card?.classificacao}
                          </S.Classificacao>
                          <S.Coracao>
                            <i className="bi bi-suit-heart-fill"></i>
                          </S.Coracao>

                          <S.Compartilhar>
                            <i className="bi bi-share-fill"></i>
                          </S.Compartilhar>
                        </S.InfoCardConteudo>

                        <S.Titulo>{card?.title}</S.Titulo>
                        <S.ConteudoCard>Com {card?.Artista}</S.ConteudoCard>
                        {/* <S.ConteudoCard>
                          <i className="bi bi-star-fill"></i>{" "}
                          <i className="bi bi-star-fill"></i>{" "}
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </S.ConteudoCard> */}
                        <S.ConteudoCard>{card?.categoria}</S.ConteudoCard>
                        <S.Sinopsia style={{ overflow: "hidden" }}>
                          {card?.synopsis}
                        </S.Sinopsia>

                        <S.ButtonAcessar
                          className="btn btn-warning"
                          onClick={() => {
                            history.push(`/cardezao/${card?.key}`);
                            window.location.reload();
                          }}
                        >
                          Saiba Mais
                        </S.ButtonAcessar>
                      </S.InfoCard>
                    </S.CardTest>
                  )}
                </SwiperSlide>
              );
            })}
          </HorizontalList>
        </Section>
        <Section title="Assistidos" filter>
          <HorizontalList id="emAlta">
            {ListaTeste?.map((card, index) => {
              if (!localStorage.getItem("assistidos"))
                return (
                  <SwiperSlide key={String(index)}>
                    <Card noContent />
                  </SwiperSlide>
                );
              return (
                <SwiperSlide key={String(index)}>
                  {!localStorage.getItem("assistidos").includes(card?.title) ? (
                    <>
                      <Card noContent />
                      {/* <S.A onClick={() => validacaoHorario(card)} > Assistir</S.A> */}
                    </>
                  ) : (
                    <S.CardTest>
                      <S.Img
                        src={card?.thumbnail}
                        style={{
                          position: "absolute",
                          width: 250,
                          height: 400,
                        }}
                        value={card?.key}
                      />

                      <S.InfoCard>
                        <S.InfoCardConteudo>
                          <S.Classificacao>
                            {card?.classificacao}
                          </S.Classificacao>
                          <S.Coracao>
                            <i className="bi bi-suit-heart-fill"></i>
                          </S.Coracao>

                          <S.Compartilhar>
                            <i className="bi bi-share-fill"></i>
                          </S.Compartilhar>
                        </S.InfoCardConteudo>

                        <S.Titulo>{card?.tituloEsp} </S.Titulo>
                        <S.ConteudoCard>Com {card?.artista}</S.ConteudoCard>
                        {/* <S.ConteudoCard>
                          <i className="bi bi-star-fill"></i>{" "}
                          <i className="bi bi-star-fill"></i>{" "}
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </S.ConteudoCard> */}
                        <S.ConteudoCard>{card?.categoria}</S.ConteudoCard>
                        <S.Sinopsia style={{ overflow: "hidden" }}>
                          {card?.sinopsiaEsp}
                        </S.Sinopsia>

                        <S.ButtonAcessar
                          onClick={() => {
                            PaginaAssitir(
                              card?.valorHorarioSe?.dia,
                              card?.valorHorarioSe?.mes,
                              card?.valorHorarioSe?.ano,
                              card?.valorHorarioSe?.horas,
                              card?.videoID,
                              card?.videoID2,
                              card?.key
                            );
                          }}
                          className="btn btn-warning"
                        >
                          {" "}
                          Assistir{" "}
                        </S.ButtonAcessar>
                      </S.InfoCard>
                    </S.CardTest>
                  )}
                </SwiperSlide>
              );
            })}
          </HorizontalList>
        </Section>
        <Section title="Canais Favoritos" filter>
          <HorizontalList id="canais">
            {ListaCanais.map((card, index) => {
              if (!localStorage.getItem("canaisFavoritos"))
                return (
                  <SwiperSlide key={String(index)}>
                    <Card noContent />
                  </SwiperSlide>
                );
              return (
                <SwiperSlide key={String(index)}>
                  {!localStorage
                    .getItem("canaisFavoritos")
                    .includes(card?.nome) || null ? (
                    <Card noContent />
                  ) : (
                    <SCard.CardCanais>
                      <SCard.Img
                        src={card?.thumbnail}
                        style={{
                          position: "absolute",
                          width: 250,
                          height: 250,
                          borderRadius: "50%",
                        }}
                        value={card?.key}
                        alt="imagem referente ao canal"
                      />
                      <SCard.InfoCard>
                        <SCard.Span size="18" style={{ marginBottom: "15px" }}>
                          <SCard.Coracao>
                            <i className="bi bi-suit-heart"></i>
                          </SCard.Coracao>
                        </SCard.Span>
                        <SCard.Span size="20">{card?.nome}</SCard.Span>

                        <SCard.Span size="10">
                          <i className="bi bi-circle-fill"></i>{" "}
                          <SCard.Span size="15">{card?.categoria}</SCard.Span>{" "}
                        </SCard.Span>
                        <SCard.Span></SCard.Span>
                        <SCard.verMais
                          size="18"
                          style={{ marginTop: "15px" }}
                          onClick={() => {
                            history.push(`/FichaCanal/${card?.key}`);
                            window.location.reload();
                          }}
                        >
                          Ver mais
                        </SCard.verMais>
                      </SCard.InfoCard>
                    </SCard.CardCanais>
                  )}
                </SwiperSlide>
              );
            })}
          </HorizontalList>
        </Section>
      </S.Container>
      <Footer />
    </>
  );
}

export default Espetaculos;
