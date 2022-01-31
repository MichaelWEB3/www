import React, { useState } from "react";
import * as S from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Sessao() {
  return (
    <>
      <Header />

      <S.Container>

        <S.Sessao>
          <S.Span size="30" className="p-5">Sua sessão começã em:</S.Span>
          <S.Span size="15" className="p-2">Contagem regressiva</S.Span>

          <S.SessaoItem>
            <S.Dias><S.Span size="50" cor="#E4B810">02</S.Span></S.Dias>
            <S.Horas ><S.Span size="50" cor="#E4B810">05</S.Span></S.Horas>
            <S.Minutos><S.Span size="50" cor="#E4B810">06</S.Span></S.Minutos>
          </S.SessaoItem>

          <S.SessaoItem>
            <S.Span size="15" className="p-3">Dias</S.Span> <S.Span size="15" className="p-3">Horas</S.Span>  <S.Span size="15" className="p-3">Minutos</S.Span>
          </S.SessaoItem>


          

        </S.Sessao>

      
      </S.Container>
      <Footer />
    </>
  );
}

export default Sessao;
