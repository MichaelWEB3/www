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
import ListaHok from "../../dados/hooks/listaHok";
import firebase from "firebase";

function Cardezao() {
  const [espetaculo, setespetaculo] = useState({});
  const { id } = useParams("/cardezao/:id");
  const [abriu, setAbri] = useState(false);
  const [abrirCard] = useState(false);
  const history = useHistory();
  const [compartilharFica, setcompartilharFicha] = useState(false);
  const [compartilhar, setcompartilhar] = useState(false);
  const [signed, setSigned] = useState(false);
  const listaHok = ListaHok();
  const [dataSelecionada] = useState({});
  const [listaOnDemand, setListaOnDemand] = useState([]);

  function doListaOnDemand() {

    const arrayOnDemand = []

    ListaTeste.forEach(element => {

      if(element.isActiveOnDemand) {
        arrayOnDemand.push(element)
        setListaOnDemand(arrayOnDemand)
      } 

    });

  }

  useEffect(() => {
    ListaTeste.map((espetaculo) => {
      if (espetaculo.key === id) return setespetaculo(espetaculo);
      return 0;
    });
    let temAssinatura = firebase.database().ref('users/' + firebase.auth().currentUser?.uid + "/signature");
    temAssinatura.on('value', (snapshot) => {
      if (snapshot.val()) {
        setSigned(snapshot.val())
      }
    })
    doListaOnDemand()
  }, [id]);

  function fechar() {
    setAbri(false);
  }

  function proximo() {
    history.push(`/LoginCart/id`);
  }

  const valorRiscado = (valor) => {

    const valorInt = parseInt(valor)

    if(valorInt >= 12) {

      return <span style={{textDecoration: "line-through"}}>R$24,92</span>

    } else {

      return <span style={{textDecoration: "line-through"}}>R$17,99</span>

    }
 
  }

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
                      {espetaculo.isActiveOnDemand === true &&
                      <div style={{display: "flex", flexDirection: "column"}}>
                        <S.Span size="1.5rem" cor={"#fdcc12"}>
                          {" "}
                          <S.Span size="1rem" cor={"#fdcc12"}>de {valorRiscado(espetaculo?.valor)} por</S.Span> R${espetaculo.valor} <S.Span size="0.8rem" cor={"#fdcc12"}> </S.Span>
                        </S.Span>
                      </div>
                      }

                      {espetaculo.isActiveSignature === true &&
                        <S.Span size="1.5rem" cor={"#fdcc12"}>
                          {" "}
                          Exclusivo para assinantes
                        </S.Span>
                      }

                    </S.Item>

                    <S.Item>
                      {espetaculo.isActiveOnDemand ?
                        (<S.ButtonContinuar
                          className="btn btn-warning"
                          onClick={() => {
                            proximo();
                            listaHok.AdicionarEspetaculos({
                              key: espetaculo.key,
                              valorDia: "",
                              valorHorarioSe: dataSelecionada,
                              valorPreco: espetaculo?.valor || 9.99,
                              link: espetaculo.link,
                              direcao: espetaculo.direcao,
                              producao: espetaculo.producao,
                              elenco: espetaculo.elenco,
                              artista: espetaculo.Artista,
                              sinopsiaEsp: espetaculo.synopsis,
                              descricaoClassifica: espetaculo.descricaoClassifica,
                              classificacao: espetaculo.classificacao,
                              thumbnail: espetaculo.thumbnail,
                              tituloEsp: espetaculo.title,
                              artistaEsp: espetaculo.Artista,
                              categoria: espetaculo.categoria,
                              videoID: espetaculo.videoID,
                              videoID2: espetaculo.videoID2,
                              trailher: espetaculo.tailher,
                              paymentLink: espetaculo.paymentLink
                            });
                          }}
                        >
                          Comprar
                        </S.ButtonContinuar>) :
                        (
                          espetaculo.isActiveSignature &&
                          signed ? 
                           (<S.ButtonContinuar
                            className="btn btn-warning"
                            onClick={() => {
                              history.push(`/playespetaculo/${espetaculo.videoID}/${espetaculo.videoID2}`)
                            }}>
                              Assistir
                            </S.ButtonContinuar>)
                           :
                           (<S.ButtonContinuar
                            className="btn btn-warning"
                            onClick={() => {
                              history.push("/Assinatura")
                            }}>
                            Assinatura
                          </S.ButtonContinuar>)
                        )

                      }
                      {/* {espetaculo.isActiveSignature === true &&
                        <S.ButtonContinuar
                          className="btn btn-warning"
                          onClick={() => {
                            history.push("/Assinatura")
                          }}>
                          Assinatura
                        </S.ButtonContinuar>
                      } */}
        
        


                    </S.Item>
                  </S.Informacoes>
                </S.Conteudo>
              </S.Container>
              <Section title="em alta" filter>
                <HorizontalList id="emAlta">
                  {listaOnDemand.map((card, index) => {
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

export default Cardezao;
