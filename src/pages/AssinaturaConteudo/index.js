import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import lista from "../Home/lista";
import * as S from "./styles";
import HorizontalList from "../../components/HorizontalList";
import firebase from "firebase"
import { AuthContext } from "../../auth/AuthContext";
import axios from "axios";
import Share from "../../components/CardCompartilhar/index";


function AssinaturaConteudo() {
  const history = useHistory();
  const [compartilhar, setcompartilhar] = useState(false);
  const [listaOnDemand, setListaOnDemand] = useState([])
  // const [isSignature, setIsSignature] = useState(false)
  let temAssinatura = firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/signature");
  temAssinatura.on('value', (snapshot) => {
    if (!snapshot.val()) {
      history.push("/Assinatura");
    }
  })

  const api = axios.create({
    baseURL: "https://json-serverepw.herokuapp.com/user",
  });

  const { currentUser } = useContext(AuthContext);

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

  function doListaOnDemand() {

    const arrayOnDemand = []

    lista.forEach(element => {

      if(!element.isActiveOnDemand) {
        arrayOnDemand.push(element)
        setListaOnDemand(arrayOnDemand)
  
      } 

    });

  }
  

  useEffect(() => {
    doListaOnDemand()
  }, [])

  return (
    <>

      <Header />

      <S.Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       
        <Section title="Meus Espetáculos" filter>
                    <HorizontalList id="emAlta">
                      {listaOnDemand.map((card, index) => {
                              return (
                                <SwiperSlide key={String(index)}>
                                  {card.isActiveOnDemand === false &&                                 
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
                                            history.push(`../cardezao/${card.key}`);
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
      </S.Container>
      <Footer /> 
    </>
  );

  // user={
  //   userIsAuthenticated() && signature?.isActive
  //     ? "isSignature"
  //     : "onDemand"
  // }
}

export default AssinaturaConteudo;
