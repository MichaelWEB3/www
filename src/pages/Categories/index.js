import React, { useState, useEffect } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import * as S from "./styles";
import * as SS from "../Cardezao/styles";
import './styled.css'
import Layout from "../../layout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import HorizontalList from "../../components/HorizontalList";
// import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { useHistory } from "react-router";
import ListaTeste from "../Home/lista";
// import ListaHok from "../../dados/hooks/listaHok";
// import firebase from "firebase";
import Share from "../../components/CardCompartilhar/index";
// import Filtrob from '../../assets/filtrtob.png'
import { IconControl } from "./icon";

function Categories() {


  // const [selecionado, setselecionado] = useState('')
  const [Listas, setListas] = useState([]);
  const history = useHistory();
  const [compartilhar, setcompartilhar] = useState(false);

  const [filtrodivTatro, setFiltroDivTeatro] = useState(false)
  const [sessaoTeatro, setsessaoTeatro] = useState('');


  // const [sessaoshow, setsessaoshow] = useState('');
  // const [filtrodivShow, setFiltroDivShow] = useState(false)

  // const [sessaoPalestra, setsessaoPalestra] = useState('');
  // const [filtrodivPalestra, setFiltroDivPalestra] = useState(false)




  useEffect(() => {
  
    setListas(ListaTeste)
    
    
  }, []);

  return (
    <Layout>
      <S.Container>


        <S.EspaçoButtons>
          <h5>Teatro</h5>

          <div className="divfiltrosbtn">

            <div className="filtro">
              <S.Filtrobtn onClick={() => {
                setFiltroDivTeatro(!filtrodivTatro)
                setsessaoTeatro(null)
              }}> <span className="controle">{IconControl}</span> {filtrodivTatro ? 'Todos' : 'Filtros'}</S.Filtrobtn>


              {filtrodivTatro &&
                <S.Filtrodiv>
                  <S.Filtrobtn onClick={() => {
                    setFiltroDivTeatro(!filtrodivTatro)
                    setsessaoTeatro(null)
                  }}> <span className="controle">{IconControl}</span> {filtrodivTatro ? 'Todos' : 'Filtros'}</S.Filtrobtn>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="chk1" className="checkbox" name="chk" value="adulto" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="chk1">
                        Adutlo
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="1" className="checkbox" name="chk" value="infantil" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="1">
                        Infantil
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="2" className="checkbox" name="chk" value="comedia" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="2">
                        Comédia
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="3" className="checkbox" name="chk" value="drama" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="3">
                        Drama
                      </label>
                    </div>
                  </S.FiltroItem>


                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="4" className="checkbox" name="chk" value="corporativo" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="4">
                        Corporativo
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="5" className="checkbox" name="chk" value="musical" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="5">
                        Musical
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="6" className="checkbox" name="chk" value="stand-up" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="6">
                        Stand-up
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="7" className="checkbox" name="chk" value="ficcao" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="7">
                        Ficção
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="objetos" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="8">
                        fantoche
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="9" className="checkbox" name="chk" value="teatroderua" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="9">
                        Teatro de rua
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="10" className="checkbox" name="chk" value="monologo" onChange={(e) => setsessaoTeatro(e.target.value)} />
                      <label for="10">
                        Monólogo
                      </label>
                    </div>
                  </S.FiltroItem>
                </S.Filtrodiv>}
            </div>
          </div>
        </S.EspaçoButtons>

        <Section title="" filter>
          <HorizontalList id="emAlta">
            {Listas.map((card, index) => {
              if (card?.categoria[0] === "teatro ") {
                if (!sessaoTeatro) {
                  return (
                    <SwiperSlide key={String(index)}>
                      {card === "" ? (
                        <SwiperSlide key={String(index)}>
                          <Card noContent />
                        </SwiperSlide>
                      ) :
                        (
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
                              <SS.InfoCardConteudo>
                                <SS.ClassificacaoCard>
                                  {card.classificacao}
                                </SS.ClassificacaoCard>
                                <SS.Coracao>
                                  <i className="bi bi-suit-heart-fill"></i>
                                </SS.Coracao>

                                <SS.Compartilhar>
                                  <i
                                    className="bi bi-share-fill"
                                    onMouseEnter={() => setcompartilhar(true)}
                                  ></i>
                                  {compartilhar && (
                                    <Share sair={setcompartilhar}></Share>
                                  )}
                                </SS.Compartilhar>
                              </SS.InfoCardConteudo>

                              <SS.Titulo>{card.title}</SS.Titulo>
                              <SS.ConteudoCard
                                style={{ textTransform: "uppercase" }}
                              >
                                {card.categoria}
                              </SS.ConteudoCard>
                              <SS.Sinopsia>{card.synopsis}</SS.Sinopsia>

                              <SS.ButtonAcessar
                                className="btn btn-warning"
                                onClick={() => {
                                  history.push(`/cardezao/${card.key}`);
                                  window.location.reload();
                                }}
                              >
                                Saiba Mais{" "}
                              </SS.ButtonAcessar>
                            </S.InfoCard>
                          </S.CardTest>
                        )}
                    </SwiperSlide>
                  );
                }
                if (card?.categoria[1] === `${sessaoTeatro}`) {
                  return (
                    <SwiperSlide key={String(index)}>
                      {card === "" ? (
                        <Card noContent />
                      ) :
                        (
                          <SS.CardTest>
                            <SS.Img
                              src={card.thumbnail}
                              style={{
                                position: "absolute",
                                width: 250,
                                height: 400,
                              }}
                              value={card.key}
                            />

                            <SS.InfoCard>
                              <SS.InfoCardConteudo>
                                <SS.ClassificacaoCard>
                                  {card.classificacao}
                                </SS.ClassificacaoCard>
                                <SS.Coracao>
                                  <i className="bi bi-suit-heart-fill"></i>
                                </SS.Coracao>

                                <SS.Compartilhar>
                                  <i
                                    className="bi bi-share-fill"
                                    onMouseEnter={() => setcompartilhar(true)}
                                  ></i>
                                  {compartilhar && (
                                    <Share sair={setcompartilhar}></Share>
                                  )}
                                </SS.Compartilhar>
                              </SS.InfoCardConteudo>

                              <SS.Titulo>{card.title}</SS.Titulo>
                              <SS.ConteudoCard
                                style={{ textTransform: "uppercase" }}
                              >
                                {card.categoria}
                              </SS.ConteudoCard>
                              <SS.Sinopsia>{card.synopsis}</SS.Sinopsia>

                              <SS.ButtonAcessar
                                className="btn btn-warning"
                                onClick={() => {
                                  history.push(`/cardezao/${card.key}`);
                                  window.location.reload();
                                }}
                              >
                                Saiba Mais{" "}
                              </SS.ButtonAcessar>
                            </SS.InfoCard>
                          </SS.CardTest>
                        )}
                    </SwiperSlide>
                  );
                }

              } else {
                return <SwiperSlide key={String(index)}>
                  <Card noContent />
                </SwiperSlide>
              }
              return 0
            })}
          </HorizontalList>
        </Section>


      </S.Container>








     {/* <S.Container>

        <S.EspaçoButtons>
          <h5>Show</h5>

          <div className="divfiltrosbtn">

            <div className="filtro">
              <S.Filtrobtn onClick={() => {
                setFiltroDivShow(!filtrodivShow)
                setsessaoshow(null)
              }}> <span className="controle">{IconControl}</span> {filtrodivShow ? 'Todos' : 'Filtros'}</S.Filtrobtn>


              {filtrodivShow &&
                <S.Filtrodiv>
                  <S.Filtrobtn onClick={() => {
                    setFiltroDivShow(!filtrodivShow)
                    setsessaoshow(null)
                  }}> <span className="controle">{IconControl}</span> {filtrodivShow ? 'Todos' : 'Filtros'}</S.Filtrobtn>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="chk1" className="checkbox" name="chk" value="pop" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="chk1">
                        Pop
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="1" className="checkbox" name="chk" value="rock" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="1">
                        Rock
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="2" className="checkbox" name="chk" value="mpb" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="2">
                        MPB
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="3" className="checkbox" name="chk" value="sertanejo" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="3">
                        Sertanejo
                      </label>
                    </div>
                  </S.FiltroItem>


                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="4" className="checkbox" name="chk" value="hiphop" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="4">
                        Hip-Hop
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="5" className="checkbox" name="chk" value="bossanova" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="5">
                        Bossa nova
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="6" className="checkbox" name="chk" value="blues" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="6">
                        Blues
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="7" className="checkbox" name="chk" value="jazz" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="7">
                        Jazz
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="sertanejouniversitário" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Sertanejo Universitário
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="forro" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Forró
                      </label>
                    </div>
                  </S.FiltroItem>


                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="pagode" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Pagode
                      </label>
                    </div>
                  </S.FiltroItem>


                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="gospel" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Gospel
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="funk" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Funk
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="samba" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Samba
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="reggae" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Reggae
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="opera" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Opera
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="circo" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Circo
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="8" className="checkbox" name="chk" value="dança" onChange={(e) => setsessaoshow(e.target.value)} />
                      <label for="8">
                        Dança
                      </label>
                    </div>
                  </S.FiltroItem>
                </S.Filtrodiv>}
            </div>
          </div>
        </S.EspaçoButtons>

        <Section title="" filter>
          <HorizontalList id="emAlta">
            {[false].map((card, index) => {
              if (!card) {
                return <SwiperSlide key={String(index)}>
                  <Card noContent />
                </SwiperSlide>
              }

              if (card?.categoria[0] == "teatro ") {
                if (!sessaoshow) {
                  return (
                    <SwiperSlide key={String(index)}>
                      {card === "" ? (
                        <Card noContent />
                      ) :
                        (
                          <SS.CardTest>
                            <SS.Img
                              src={card.thumbnail}
                              style={{
                                position: "absolute",
                                width: 250,
                                height: 400,
                              }}
                              value={card.key}
                            />

                            <SS.InfoCard>
                              <SS.InfoCardConteudo>
                                <SS.ClassificacaoCard>
                                  {card.classificacao}
                                </SS.ClassificacaoCard>
                                <SS.Coracao>
                                  <i className="bi bi-suit-heart-fill"></i>
                                </SS.Coracao>

                                <SS.Compartilhar>
                                  <i
                                    className="bi bi-share-fill"
                                    onMouseEnter={() => setcompartilhar(true)}
                                  ></i>
                                  {compartilhar && (
                                    <Share sair={setcompartilhar}></Share>
                                  )}
                                </SS.Compartilhar>
                              </SS.InfoCardConteudo>

                              <SS.Titulo>{card.title}</SS.Titulo>
                              <SS.ConteudoCard
                                style={{ textTransform: "uppercase" }}
                              >
                                {card.categoria}
                              </SS.ConteudoCard>
                              <SS.Sinopsia>{card.synopsis}</SS.Sinopsia>

                              <SS.ButtonAcessar
                                className="btn btn-warning"
                                onClick={() => {
                                  history.push(`/cardezao/${card.key}`);
                                  window.location.reload();
                                }}
                              >
                                Saiba Mais{" "}
                              </SS.ButtonAcessar>
                            </SS.InfoCard>
                          </SS.CardTest>
                        )}
                    </SwiperSlide>
                  );
                }
                if (card?.categoria[1] == `${sessaoshow}`) {
                  return (
                    <SwiperSlide key={String(index)}>
                      {card === "" ? (
                        <Card noContent />
                      ) :
                        (
                          <SS.CardTest>
                            <SS.Img
                              src={card.thumbnail}
                              style={{
                                position: "absolute",
                                width: 250,
                                height: 400,
                              }}
                              value={card.key}
                            />

                            <SS.InfoCard>
                              <SS.InfoCardConteudo>
                                <SS.ClassificacaoCard>
                                  {card.classificacao}
                                </SS.ClassificacaoCard>
                                <SS.Coracao>
                                  <i className="bi bi-suit-heart-fill"></i>
                                </SS.Coracao>

                                <SS.Compartilhar>
                                  <i
                                    className="bi bi-share-fill"
                                    onMouseEnter={() => setcompartilhar(true)}
                                  ></i>
                                  {compartilhar && (
                                    <Share sair={setcompartilhar}></Share>
                                  )}
                                </SS.Compartilhar>
                              </SS.InfoCardConteudo>

                              <SS.Titulo>{card.title}</SS.Titulo>
                              <SS.ConteudoCard
                                style={{ textTransform: "uppercase" }}
                              >
                                {card.categoria}
                              </SS.ConteudoCard>
                              <SS.Sinopsia>{card.synopsis}</SS.Sinopsia>

                              <SS.ButtonAcessar
                                className="btn btn-warning"
                                onClick={() => {
                                  history.push(`/cardezao/${card.key}`);
                                  window.location.reload();
                                }}
                              >
                                Saiba Mais{" "}
                              </SS.ButtonAcessar>
                            </SS.InfoCard>
                          </SS.CardTest>
                        )}
                    </SwiperSlide>
                  );
                }

              }
              console.log(card)

            })}
          </HorizontalList>
        </Section>


       </S.Container> */}









      {/*<S.Container>


        <S.EspaçoButtons>
          <h5>Palestras</h5>

          <div className="divfiltrosbtn">

            <div className="filtro">
              <S.Filtrobtn onClick={() => {
                setFiltroDivPalestra(!filtrodivPalestra)
                setsessaoPalestra(null)
              }}> <span className="controle">{IconControl}</span> {filtrodivPalestra ? 'Todos' : 'Filtros'}</S.Filtrobtn>


              {filtrodivPalestra &&
                <S.Filtrodiv>

                  <S.Filtrobtn onClick={() => {
                    setFiltroDivPalestra(!filtrodivPalestra)
                    setsessaoPalestra(null)
                  }}> <span className="controle">{IconControl}</span> {filtrodivPalestra ? 'Todos' : 'Filtros'}</S.Filtrobtn>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="chk1" className="checkbox" name="chk" value="educacional" onChange={(e) => setsessaoPalestra(e.target.value)} />
                      <label for="chk1">
                        Educacional
                      </label>
                    </div>
                  </S.FiltroItem>
                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="1" className="checkbox" name="chk" value="corporativo" onChange={(e) => setsessaoPalestra(e.target.value)} />
                      <label for="1">
                        Corporativo
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="2" className="checkbox" name="chk" value="profissional" onChange={(e) => setsessaoPalestra(e.target.value)} />
                      <label for="2">
                        Profissional
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="3" className="checkbox" name="chk" value="workshop" onChange={(e) => setsessaoPalestra(e.target.value)} />
                      <label for="3">
                        Workshop
                      </label>
                    </div>
                  </S.FiltroItem>


                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="4" className="checkbox" name="chk" value="motivacional" onChange={(e) => setsessaoPalestra(e.target.value)} />
                      <label for="4">
                        Motivacional
                      </label>
                    </div>
                  </S.FiltroItem>

                  <S.FiltroItem>
                    <div className="checkbox">
                      <input type="radio" id="5" className="checkbox" name="chk" value="humorística" onChange={(e) => setsessaoPalestra(e.target.value)} />
                      <label for="5">
                        Humorística
                      </label>
                    </div>
                  </S.FiltroItem>


                </S.Filtrodiv>}
            </div>
          </div>
        </S.EspaçoButtons>

        <Section title="" filter>
          <HorizontalList id="emAlta">
            {[false].map((card, index) => {


              if (!card) {
                return <SwiperSlide key={String(index)}>
                  <Card noContent />
                </SwiperSlide>
              }

              if (card?.categoria[0] == "teatro ") {
                if (sessaoPalestra) {
                  return (
                    <SwiperSlide key={String(index)}>
                      (
                      <Card noContent />
                      ) :
                      (
                      <SS.CardTest>
                        <SS.Img
                          src={card.thumbnail}
                          style={{
                            position: "absolute",
                            width: 250,
                            height: 400,
                          }}
                          value={card.key}
                        />

                        <SS.InfoCard>
                          <SS.InfoCardConteudo>
                            <SS.ClassificacaoCard>
                              {card.classificacao}
                            </SS.ClassificacaoCard>
                            <SS.Coracao>
                              <i className="bi bi-suit-heart-fill"></i>
                            </SS.Coracao>

                            <SS.Compartilhar>
                              <i
                                className="bi bi-share-fill"
                                onMouseEnter={() => setcompartilhar(true)}
                              ></i>
                              {compartilhar && (
                                <Share sair={setcompartilhar}></Share>
                              )}
                            </SS.Compartilhar>
                          </SS.InfoCardConteudo>

                          <SS.Titulo>{card.title}</SS.Titulo>
                          <SS.ConteudoCard
                            style={{ textTransform: "uppercase" }}
                          >
                            {card.categoria}
                          </SS.ConteudoCard>
                          <SS.Sinopsia>{card.synopsis}</SS.Sinopsia>

                          <SS.ButtonAcessar
                            className="btn btn-warning"
                            onClick={() => {
                              history.push(`/cardezao/${card.key}`);
                              window.location.reload();
                            }}
                          >
                            Saiba Mais{" "}
                          </SS.ButtonAcessar>
                        </SS.InfoCard>
                      </SS.CardTest>
                      )
                    </SwiperSlide>
                  );
                }
                if (card?.categoria[1] == `${sessaoPalestra}`) {
                  return (
                    <SwiperSlide key={String(index)}>
                      {card === "" ? (
                        <Card noContent />
                      ) :
                        (
                          <SS.CardTest>
                            <SS.Img
                              src={card.thumbnail}
                              style={{
                                position: "absolute",
                                width: 250,
                                height: 400,
                              }}
                              value={card.key}
                            />

                            <SS.InfoCard>
                              <SS.InfoCardConteudo>
                                <SS.ClassificacaoCard>
                                  {card.classificacao}
                                </SS.ClassificacaoCard>
                                <SS.Coracao>
                                  <i className="bi bi-suit-heart-fill"></i>
                                </SS.Coracao>

                                <SS.Compartilhar>
                                  <i
                                    className="bi bi-share-fill"
                                    onMouseEnter={() => setcompartilhar(true)}
                                  ></i>
                                  {compartilhar && (
                                    <Share sair={setcompartilhar}></Share>
                                  )}
                                </SS.Compartilhar>
                              </SS.InfoCardConteudo>

                              <SS.Titulo>{card.title}</SS.Titulo>
                              <SS.ConteudoCard
                                style={{ textTransform: "uppercase" }}
                              >
                                {card.categoria}
                              </SS.ConteudoCard>
                              <SS.Sinopsia>{card.synopsis}</SS.Sinopsia>

                              <SS.ButtonAcessar
                                className="btn btn-warning"
                                onClick={() => {
                                  history.push(`/cardezao/${card.key}`);
                                  window.location.reload();
                                }}
                              >
                                Saiba Mais{" "}
                              </SS.ButtonAcessar>
                            </SS.InfoCard>
                          </SS.CardTest>
                        )}
                    </SwiperSlide>
                  );
                }

              }
              console.log(card)

            })}
          </HorizontalList>
        </Section>


      </S.Container>*/}




    </Layout>
  );
}

export default Categories;
