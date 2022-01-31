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
import Horarios from "../Horarios";
// import ListaHok from "../../dados/hooks/listaHok";
import app from "../../auth/config";
function Cardezaoassinatura() {
  const [espetaculo, setespetaculo] = useState({});
  const { id } = useParams("/cardezao/:id");
  const [abriu, setAbri] = useState(false);
  const [abrirCard] = useState(false);
  const history = useHistory();
  const [compartilharFica, setcompartilharFicha] = useState(false);
  const [compartilhar, setcompartilhar] = useState(false);
  // const listaHok = ListaHok();
  // const [dataSelecionada] = useState({});
  useEffect(() => {
    const isSignature = app.auth().currentUser && localStorage.getItem("signature");
    if (!isSignature) {
      history.push("/Assinatura");
    }
    ListaTeste.map((espetaculo) => {
      if (espetaculo.key === id) return setespetaculo(espetaculo);
      return 0;
    });
  }, [history, id]);

  function fechar() {
    setAbri(false);
  }

  // function proximo() {
  //   history.push(`/LoginCart/id`);
  // }
  console.log(history);
  return (
    <Layout>
      {abriu ? (
        <Horarios
          aidKey={espetaculo.key}
          link={espetaculo.link}
          direcao={espetaculo.direcao}
          producao={espetaculo.producao}
          elenco={espetaculo.elenco}
          voltar={fechar}
          sinopsiaEsp={espetaculo.synopsis}
          descricaoClassifica={espetaculo.descricaoClassifica}
          classificacao={espetaculo.classificacao}
          img={espetaculo.thumbnail}
          tituloEsp={espetaculo.title}
          artistaEsp={espetaculo.Artista}
          categoria={espetaculo.categoria}
          datas={espetaculo.datas}
          hosrios={espetaculo.datas.horarios}
          videoID={espetaculo.videoID}
          videoID2={espetaculo.videoID2}
        ></Horarios>
      ) : (
        <>
          {abrirCard ? (
            <></>
          ) : (
            <>
              <S.Container>
                <S.ContainerImg>
                  <iframe
                    src={`${espetaculo.tailher}`}
                    allow="autoplay"
                    allowfullscreen="true"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    title="unique rs"
                  ></iframe>
                </S.ContainerImg>

                <S.Conteudo>
                  <S.ButtonVoltar onClick={() => history.push("/")}>
                    {" "}
                    <i className="bi bi-x-lg"></i>{" "}
                  </S.ButtonVoltar>

                  <S.HeaderConteudo>
                    <S.Item>
                      <S.Span>
                        <S.Classificacao>
                          {espetaculo.classificacao}
                        </S.Classificacao>{" "}
                        <S.Span className="m-2">
                          {espetaculo.descricaoClassifica}
                        </S.Span>
                      </S.Span>
                    </S.Item>

                    <S.Item>
                      <S.Coracao>
                        <i className="bi bi-suit-heart-fill"></i>
                      </S.Coracao>

                      <S.Compartilhar>
                        {" "}
                        <i
                          className="bi bi-share-fill"
                          onMouseEnter={() => setcompartilharFicha(true)}
                        ></i>
                        {compartilharFica && (
                          <Share
                            link={`http://www.palcoweb.com.br/cardezao/${espetaculo.key}`}
                            sairficha={setcompartilharFicha}
                          ></Share>
                        )}
                      </S.Compartilhar>
                    </S.Item>
                  </S.HeaderConteudo>

                  <S.Informacoes>
                    <S.Item>
                      <S.HeaderTitle> {espetaculo.title}</S.HeaderTitle>
                    </S.Item>
                    <S.Item>
                      <S.Span> Com {espetaculo.Artista}</S.Span>
                    </S.Item>
                    <S.Item></S.Item>
                    <S.Item>
                      <S.Text> {espetaculo.synopsis}</S.Text>
                    </S.Item>
                    <S.Item>
                      <S.Span> Elenco: {espetaculo.elenco}</S.Span>
                    </S.Item>
                    <S.Item>
                      <S.Span> producao: {espetaculo.producao}</S.Span>
                    </S.Item>
                    <S.Item>
                      <S.Span> direcao: {espetaculo.direcao}</S.Span>
                    </S.Item>
                    <S.Item>
                      <S.Span> duração: {espetaculo.duracao}</S.Span>
                    </S.Item>
                    <S.Item>


                      {espetaculo.isActiveSignature === true &&
                        <S.Span size="1.5rem" cor={"#fdcc12"}>
                          {" "}
                          Exclusivo para assinantes
                        </S.Span>
                      }

                    </S.Item>

                    <S.Item>

                      <S.ButtonContinuar
                        className="btn btn-warning"
                        onClick={() => {
                          history.push(`/playespetaculo/${espetaculo.videoID}/${espetaculo.videoID2}/${espetaculo.key}`);
                        }}
                      >
                        Assistir
                      </S.ButtonContinuar>




                    </S.Item>
                  </S.Informacoes>
                </S.Conteudo>
              </S.Container>
              <Section title="em alta" filter>
                <HorizontalList id="emAlta">
                  {ListaTeste.map((card, index) => {
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
                              <S.ConteudoCard
                                style={{ textTransform: "uppercase" }}
                              >
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
                  })}
                </HorizontalList>
              </Section>
            </>
          )}
        </>
      )
      }
    </Layout >
  );
}

export default Cardezaoassinatura;
