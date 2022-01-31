import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./styles";


function Categories() {
  
  return (
    <>
      <Header  />
              <S.Container>
                <S.Espaco>
                  <S.Span size="30">Em construção</S.Span>
                  <S.Span size="13">Aguarde novidades em breve!</S.Span>

                  <S.Img src={require('../../assets/emContrucao.png')}></S.Img>
                </S.Espaco>
                
              </S.Container>

      <Footer />
    </>
  );
}

export default Categories;
