import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useHistory } from "react-router";

import Section from "../../components/Section";
import Card from "../../components/Card";
import HorizontalList from "../../components/HorizontalList";
import * as S from "./styles";
import Layout from "../../layout";

import Share from "../../components/CardCompartilhar/index";

import ListaTeste from "../Home/lista";
import listarCanais from "../Home/listaCanais";
import instagram from "../../assets/instagram-yellow.png";
import facebook from "../../assets/facebook-yellow.png";

function FichaCanal() {

  const history = useHistory();
  const [compartilharFica, setcompartilharFicha] = useState(false);
  const [compartilhar, setcompartilhar] = useState(false);

  const [canais, setcanais] = useState({});
  const params = useParams("/FichaCanal/:id");
  const { id } = params;

  useEffect(() => {

    window.scrollTo(0, 0);
    listarCanais.map((canais) => {
      console.log(canais.nome)
      if (canais.key === id) {
        setcanais(canais);
      }
      return 0
    });
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
    listarCanais.map((canais) => {
      console.log(canais);
      if (canais.key == id) {
        setcanais(canais);
      }
      return 0;
    });
  }, [id]);
  return (
    <Layout>
      <S.Container>
        <S.ContainerImg>
          <S.Thumbnail src={canais?.thumbnail}></S.Thumbnail>
        </S.ContainerImg>

        <S.Conteudo>
          <S.ButtonVoltar
            onClick={() => history.push("/canais") || window.location.reload()}
          >
            {" "}
            <i className="bi bi-x-lg"></i>{" "}
          </S.ButtonVoltar>

          <S.HeaderConteudo>
            <S.Item>
              <S.Coracao>
                <i className="bi bi-suit-heart"></i>
              </S.Coracao>

              <S.Compartilhar>
                {" "}
                <i
                  className="bi bi-share-fill"
                  onClick={() => setcompartilharFicha(true)}
                  style={{ cursor: "pointer" }}
                ></i>
                {compartilharFica && (
                  <Share
                    link={`http://www.palcoweb.com.br/FichaCanal/${canais.key}`}
                    sairficha={setcompartilharFicha}
                  ></Share>
                )}
              </S.Compartilhar>
            </S.Item>
            <S.Img
              src={canais.thumbnail}
              style={{
                margin: 0,
                width: 150,
                height: 150,
                borderRadius: "50%",
              }}
              value={canais.key}
              alt="imagem referente ao canal"
            />
            <S.Item>
              <S.HeaderTitle>
                {" "}
                <S.Span size="1">{canais?.nome}</S.Span>
              </S.HeaderTitle>
              <div>
                {/*redes sociais */}
                {canais?.facebook && (
                  <a
                    href={canais.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fdcc12", textDecorationLine: "none" }}
                  >
                    {" "}
                    <img src={facebook} alt="logo do facebook" />
                  </a>
                )}
                {canais?.instagram && (
                  <a
                    href={"https://www.instagram.com/" + canais?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fdcc12", textDecorationLine: "none" }}
                  >
                    {" "}
                    <img src={instagram} alt="logo do instagram" />
                  </a>
                )}
              </div>
              {canais.site && (
                <S.Span cor="#fdcc12" size="1" style={{ cursor: "pointer" }}>
                  {" "}
                  <a
                    href={canais.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fdcc12", textDecorationLine: "none" }}
                  >
                    Site Oficial
                  </a>{" "}
                </S.Span>
              )}
            </S.Item>
          </S.HeaderConteudo>

          <S.Informacoes>
            <S.Item>
              <S.Text size="0.8"> {canais?.descricao}</S.Text>
            </S.Item>
            <S.Item>
              <S.Span size="0.8">
                <i className="bi bi-circle-fill p-1"></i> {canais?.categoria}
              </S.Span>
            </S.Item>
          </S.Informacoes>
        </S.Conteudo>
      </S.Container>

      <Section title="em alta" filter>
        <HorizontalList id="emAlta">
          {ListaTeste.map((card, index) => {
            if (card.canaisKey === canais?.key) {
              return (
                <SwiperSlide key={String(index)}>
                  {card === "" ? (
                    <Card noContent />
                  ) : (
                    <S.CardTest>
                      <S.Img
                        src={card.thumbnail}
                        style={{
                          position: "absolute",
                          width: 250,
                          height: 400,
                        }}
                        value={card.key}
                      />

                      <S.InfoCard>
                        <S.InfoCardConteudo>
                          <S.ClassificacaoCard>
                            {card.classificacao}
                          </S.ClassificacaoCard>
                          <S.Coracao>
                            <i className="bi bi-suit-heart-fill"></i>
                          </S.Coracao>

                          <S.Compartilhar>
                            <i
                              className="bi bi-share-fill"
                              onMouseEnter={() => setcompartilhar(true)}
                            ></i>
                            {compartilhar && (
                              <Share sair={setcompartilhar}></Share>
                            )}
                          </S.Compartilhar>
                        </S.InfoCardConteudo>

                        <S.Titulo>{card.title}</S.Titulo>
                        <S.ConteudoCard style={{ textTransform: "uppercase" }}>
                          {card.categoria}
                        </S.ConteudoCard>
                        <S.Sinopsia>{card.synopsis}</S.Sinopsia>

                        <S.ButtonAcessar
                          className="btn btn-warning"
                          onClick={() => {
                            history.push(`/cardezao/${card.key}`);
                            window.location.reload();
                          }}
                        >
                          Saiba Mais{" "}
                        </S.ButtonAcessar>
                      </S.InfoCard>
                    </S.CardTest>
                  )}
                </SwiperSlide>
              );
            } else {
              return false;
            }
          })}
        </HorizontalList>
      </Section>
    </Layout>
  );
}
export default FichaCanal;
