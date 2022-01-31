import React from "react";
import { useHistory } from "react-router";
import { SwiperSlide } from "swiper/react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./styles";
import Section from "../../components/Section";
import ListaCanais from "../Home/listaCanais";
import Card from "../../components/Card";
import HorizontalList from "../../components/HorizontalList";

function Canais() {
const history = useHistory()

  return (
    <>
      <Header />
      <S.Container>


        <Section title="Canais" filter>
          <S.GridContainer>
          {ListaCanais.map((card, index) => {
            return (
              <S.CardCanais>
                <S.Img
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
                <S.InfoCard>
                  <S.Span size="18" style={{ marginBottom: '15px' }}>
                    <S.Coracao>
                      <i className="bi bi-suit-heart"></i>
                    </S.Coracao>

                  </S.Span>
                  <S.Span size="20">{card.nome}</S.Span>
                  
                  <S.Span size="10"><i className="bi bi-circle-fill"></i> <S.Span  size="15">{card.categoria}</S.Span>   </S.Span>
                  <S.Span></S.Span>
                  <S.verMais size="18" style={{ marginTop: '15px' }} onClick={()=>{
                    history.push(`/FichaCanal/${card.key}`)
                  }}>Ver mais</S.verMais>

                </S.InfoCard>
              </S.CardCanais>
            )
          })}
          </S.GridContainer>
          {/* <HorizontalList id="canais">

            {ListaCanais.map((card, index) => {
              return (
                <SwiperSlide key={String(index)}>
                  {card === "" ? (
                    <Card noContent />
                  ) : (
                    <S.CardCanais>
                      <S.Img
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
                      <S.InfoCard>
                        <S.Span size="18" style={{ marginBottom: '15px' }}>
                          <S.Coracao>
                            <i className="bi bi-suit-heart"></i>
                          </S.Coracao>

                        </S.Span>
                        <S.Span size="20">{card.nome}</S.Span>
                       
                        <S.Span size="10"><i className="bi bi-circle-fill"></i> <S.Span  size="15">{card.categoria}</S.Span>   </S.Span>
                        <S.Span></S.Span>
                        <S.verMais size="18" style={{ marginTop: '15px' }} onClick={()=>{
                          history.push(`/FichaCanal/${card.key}`)
                        }}>Ver mais</S.verMais>

                      </S.InfoCard>
                    </S.CardCanais>
                  )}
                </SwiperSlide>
              );
            })}
          </HorizontalList> */}
        </Section>


      </S.Container>

      <Footer />
    </>
  );
}

export default Canais;
