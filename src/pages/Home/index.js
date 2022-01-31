import axios from "axios";
import firebase from "firebase";
import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { AuthContext } from "../../auth/AuthContext";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Share from "../../components/CardCompartilhar/index";
import HorizontalList from "../../components/HorizontalList";
import Auth from "../../components/popups/Auth";
import Info from "../../components/popups/Info";
import RegisterPopup from "../../components/popups/Register";
import Section from "../../components/Section";
import Layout from "../../layout";
import * as SCard from "../Canais/styles";
import TelaCardezao from "../Cardezao/index";
import lista from "./lista";
import listaCanais from "./listaCanais";
import * as S from "./styles";

function Home() {
  const api = axios.create({
    baseURL: "https://json-serverepw.herokuapp.com/user",
  });

  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [visible, setVisible] = useState({ status: false, text: "" });
  const [arrayAvaliacoes, setArrayAvaliacoes] = useState([])

  const changeVisible = (value) => {
    if (value === "off") {
      setVisible({
        status: false,
        text: value,
      });
    } else {
      setVisible({
        status: true,
        text: value,
      });
    }
  };

  const changeToShow = () => {
    if (visible.text === "Enter") {
      return <Auth visible={visible} changeVisible={changeVisible} />;
    }
    if (visible.text === "Register") {
      return <RegisterPopup visible={visible} changeVisible={changeVisible} />;
    }
    if (visible.text === "Info") {
      return <Info visible={visible} changeVisible={changeVisible} />;
    }
  };
  const ListaTeste = lista;
  const [abriu, setAbri] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [link, setLink] = useState("");
  const [cardTitle, setcardTitle] = useState("");
  const [sinopsia, setsinopsia] = useState("");
  const [artista, setartista] = useState("");
  const [categoria, setcategoria] = useState("");
  const [classificacao, setclassificacao] = useState("");
  const [descricaoClassifica, setdescricaoClassifica] = useState("");
  const [elenco, setelenco] = useState("");
  const [producao, setproducao] = useState("");
  const [direcao, setdirecao] = useState("");
  const [duracao, setduracao] = useState("");
  const [compartilhar, setcompartilhar] = useState(false);
  const [videoID, setvideoID] = useState("");
  const [videoID2, setvideoID2] = useState("");
  const [listaOnDemand, setListaOnDemand] = useState([]);
  // const [country, setCountry] = useState("")
  const [listaOnAlta, setListaOnAlta] = useState([])
  const ListaCanais = listaCanais;
  function showConteudo(
    url,
    link,
    title,
    sinopsia,
    artista,
    categoria,
    classificacao,
    descricaoClassifica,
    elenco,
    producao,
    direcao,
    duracao,
    videoID,
    videoID2
  ) {
    if (abriu) {
      setAbri(false);
      setImgUrl("");
      setLink("");
      setcardTitle("");
    } else {
      setAbri(true);
      setImgUrl(url);
      setLink(link);
      setcardTitle(title);
      setsinopsia(sinopsia);
      setartista(artista);
      setcategoria(categoria);
      setclassificacao(classificacao);
      setdescricaoClassifica(descricaoClassifica);
      setelenco(elenco);
      setproducao(producao);
      setdirecao(direcao);
      setduracao(duracao);
      setvideoID(videoID);
      setvideoID2(videoID2);
    }
  }
  const fav = async (card) => {
    if (currentUser) {
      const userId = await firebase.auth().currentUser.uid;
      async function favReq() {
        const { data } = await api.get("/" + userId);
        let fav = data.fav;

        if (fav !== undefined) {
          api.patch("/" + userId, {
            id: userId,
            fav: [fav + "', '" + card.title],
          });
        } else {
          api.patch("/" + userId, {
            id: userId,
            fav: [card.title],
          });
        }
      }
      favReq();
    } else {
      history.push("/login");
    }
  };
  const favCanais = async (card) => {
    if (currentUser) {
      const userId = firebase.auth().currentUser.uid;
      const { data } = await api.get("/" + userId);
      let fav = data.favCanais;
      if (fav !== undefined) {
        api.patch("/" + userId, {
          id: userId,
          favCanais: [fav + "', '" + card.nome],
        });
      } else {
        api.patch("/" + userId, {
          id: userId,
          favCanais: [card.nome],
        });
      }
    } else {
      history.push("/login");
    }
  };

    // setTimeout(function () {

    //   let currentTotal = firebase.database().ref('video/')

    //   currentTotal.on('value', (snapshot) => {
    //     setArrayAvaliacoes(snapshot.val())
    //   })

    // })

  useEffect(() => {

    // let currentTotal = firebase.database().ref('video/')

    // currentTotal.on('value', (snapshot) => {
    //   setArrayAvaliacoes(snapshot.val())
    // })


    function doListaOnDemand() {

      const arrayOnDemand = []

      ListaTeste.forEach(element => {
        if(element.isActiveOnDemand) {
          arrayOnDemand.push(element)
        } 
      });

      setListaOnDemand(arrayOnDemand)

    } 

    function doListaOnAlta() {

      const arrayOnAlta = []

      ListaTeste.forEach(element1 => {
        if(!element1.isActiveOnAlta && element1.isActiveOnDemand) {
          arrayOnAlta.push(element1)        
        } 
      });

      setListaOnAlta(arrayOnAlta.sort(function(a, b){
   
        // arrayAvaliacoes.forEach(element => {
        //   if(element)
        // });
        return 1
      }))
    }

    
    doListaOnDemand()
    doListaOnAlta()

  }, [ListaTeste])

  // useEffect(() => {
  //   axios.get("https://ipinfo.io/json?token=79ae51e5940d4e").then((response) => {
  //     setCountry(response.data.country);
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  // }, [])

  return (
    <Layout page={0}>
      <>
        {visible.status ? (
          <>{changeToShow(visible.text)}</>
        ) : (
          <>
            {abriu ? (
              <TelaCardezao
                link={link}
                direcao={direcao}
                producao={producao}
                elenco={elenco}
                voltar={showConteudo}
                artista={artista}
                sinopsia={sinopsia}
                descricaoClassifica={descricaoClassifica}
                classificacao={classificacao}
                img={imgUrl}
                titulo={cardTitle}
                categoria={categoria}
                duracao={duracao}
                videoID={videoID}
                videoID2={videoID2}
              ></TelaCardezao>
            ) : (
              <>
              {/** */}
                <Banner>
                  
                </Banner>
                
                  {/* <br/><br/>
                  <S.ContainerArraste id="containerArraste">
                  <S.ArrasteImg src="../../assets/arrasto.png" alt="arraste para cima" />
                  <p>Arraste pra cima</p>
                </S.ContainerArraste> */}
                <S.Container>
                  
                  <Section title="Lançamentos" filter>
                    <HorizontalList id="emAlta">
                      {listaOnDemand.map((card, index) => {
                              return (
                                <SwiperSlide key={String(index)}>
                                  {card.isActiveOnDemand === true &&                                
                                  <S.CardTest>
                                      <S.Img
                                        src={card.thumbnail}
                                        style={{
                                          position: "absolute",
                                        }}
                                        value={card.key}
                                        alt="imagem referente a peça"
                                      />
                          
                                      <S.InfoCard>
                                        <S.InfoCardConteudo>
                                          <S.Classificacao>
                                            {card.classificacao}
                                          </S.Classificacao>
                                          <S.Coracao
                                            onClick={() => {
                                              fav(card);
                                            }}
                                          >
                                            <i className="bi bi-suit-heart-fill"></i>
                                          </S.Coracao>
                          
                                          <S.Compartilhar>
                                            <i
                                              className="bi bi-share-fill"
                                              onMouseEnter={() =>
                                                setcompartilhar(true)
                                              }
                                            ></i>
                                            {compartilhar && (
                                              <Share
                                                sair={setcompartilhar}
                                                link={`https://www.palcoweb.com.br/#/cardezao/${card.key}`}
                                              ></Share>
                                            )}
                                          </S.Compartilhar>
                                        </S.InfoCardConteudo>
                          
                                        <S.Titulo>{card.title}</S.Titulo>
                                        {/* <S.ConteudoCard>
                                          Com {card.Artista}
                                        </S.ConteudoCard> */}
                                        {/* <S.ConteudoCard>
                                          <i className="bi bi-star-fill"></i>{" "}
                                          <i className="bi bi-star-fill"></i>{" "}
                                          <i className="bi bi-star-fill"></i>
                                          <i className="bi bi-star-fill"></i>
                                        </S.ConteudoCard> */}
                                        <S.ConteudoCard
                                          style={{
                                            textTransform: "uppercase",
                                          }}
                                        >
                                          {card.categoria}
                                        </S.ConteudoCard>
                                        <S.Sinopsia>{card.synopsis}</S.Sinopsia>
                          
                                        <S.ButtonAcessar
                                          className="btn btn-warning"
                                          onClick={() => {
                                            history.push(`cardezao/${card.key}`);
                                            //window.scrollTo(0, 0);
                                            window.location.reload();
                                          }}
                                        >
                                          Saiba Mais{" "}
                                        </S.ButtonAcessar>
                                      </S.InfoCard>
                                    </S.CardTest>
                                  } 
                                </SwiperSlide>
                              );
                            })



                          }






                    </HorizontalList>
                  </Section>

                  <Section title="Em Alta" filter>
                    <HorizontalList id="emAlta">
                      {listaOnAlta.map((card, index) => {
                        return (
                          <SwiperSlide key={String(index)}>
                            {card.isActiveOnDemand && 
                              <S.CardTest>
                                <S.Img
                                  src={card.thumbnail}
                                  style={{
                                    position: "absolute",
                                  }}
                                  value={card.key}
                                  alt="imagem referente a peça"
                                />

                                <S.InfoCard>
                                  <S.InfoCardConteudo>
                                    <S.Classificacao>
                                      {card.classificacao}
                                    </S.Classificacao>
                                    <S.Coracao
                                      onClick={() => {
                                        fav(card);
                                      }}
                                    >
                                      <i className="bi bi-suit-heart-fill"></i>
                                    </S.Coracao>

                                    <S.Compartilhar>
                                      <i
                                        className="bi bi-share-fill"
                                        onMouseEnter={() =>
                                          setcompartilhar(true)
                                        }
                                      ></i>
                                      {compartilhar && (
                                        <Share
                                          sair={setcompartilhar}
                                          link={`https://www.palcoweb.com.br/#/cardezao/${card.key}`}
                                        ></Share>
                                      )}
                                    </S.Compartilhar>
                                  </S.InfoCardConteudo>

                                  <S.Titulo>{card.title}</S.Titulo>
                                  {/* <S.ConteudoCard>
                                    Com {card.Artista}
                                  </S.ConteudoCard> */}
                                  {/* <S.ConteudoCard>
                                    <i className="bi bi-star-fill"></i>{" "}
                                    <i className="bi bi-star-fill"></i>{" "}
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                  </S.ConteudoCard> */}
                                  <S.ConteudoCard
                                    style={{
                                      textTransform: "uppercase",
                                    }}
                                  >
                                    {card.categoria}
                                  </S.ConteudoCard>
                                  <S.Sinopsia>{card.synopsis}</S.Sinopsia>

                                  <S.ButtonAcessar
                                    className="btn btn-warning"
                                    onClick={() => {
                                      //window.scrollTo(0, 0);
                                      history.push(`cardezao/${card.key}`);
                                      window.location.reload();
                                    }}
                                  >
                                    Saiba Mais{" "}
                                  </S.ButtonAcessar>
                                </S.InfoCard>
                              </S.CardTest>
                            }
                          </SwiperSlide>
                        );
                      })}
                    </HorizontalList>
                  </Section>
                  {/* <Section title="Em alta" filter>
                  <HorizontalList id="recomendados">
                    {card.map((card, index) => {
                      return (
                        <SwiperSlide key={String(index)}>
                          {card === "" ? (
                            <Card noContent />
                          ) : (
                            <Card index={index} info={card} />
                          )}
                        </SwiperSlide>
                      );
                    })}
                  </HorizontalList>
                </Section> */}

                  <Section title="Canais" filter>
                    <HorizontalList id="canais">
                      {ListaCanais.map((card, index) => {
                        return (
                          <SwiperSlide key={String(index)}>
                            {card === "" ? (
                              <Card noContent />
                            ) : (
                              <SCard.CardCanais>
                                <SCard.Img
                                  src={card.thumbnail}
                                  style={{
                                    position: "absolute",
                                    width: 250,
                                    height: 250,
                                    borderRadius: "50%",
                                  }}
                                  value={card.key}
                                  alt="imagem referente ao canal"
                                />
                                <SCard.InfoCard>
                                  <SCard.Span
                                    size="18"
                                    style={{ marginBottom: "15px" }}
                                  >
                                    <SCard.Coracao
                                      onClick={() => favCanais(card)}
                                    >
                                      <i className="bi bi-suit-heart"></i>
                                    </SCard.Coracao>
                                  </SCard.Span>
                                  <SCard.Span size="20">{card.nome}</SCard.Span>

                                  <SCard.Span size="10">
                                    <i className="bi bi-circle-fill"></i>{" "}
                                    <SCard.Span size="15">
                                      {card.categoria}
                                    </SCard.Span>{" "}
                                  </SCard.Span>
                                  <SCard.Span></SCard.Span>
                                  <SCard.verMais
                                    size="18"
                                    style={{ marginTop: "15px" }}
                                    onClick={() => {
                                      history.push(`/FichaCanal/${card.key}`);
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
              </>
            )}
          </>
        )}
      </>
    </Layout>
  );
}

export default Home;
