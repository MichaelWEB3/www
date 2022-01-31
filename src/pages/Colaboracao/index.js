import React, { useState } from "react";
import Card from "./card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as S from "./styles";
import Fundo from "../../assets/fundo.png";
import LogoRetiro from "../../assets/logoretiro.png";
import LogoPalco from "../../assets/logopalco.png";
import Linha from "../../assets/Linha.png";

function Colaboracao() {
  const [abrirpix, setabrirpix] = useState(false);


  // console.log(lista);

  return (
    <>
      <Header />

      <S.Container>
        <S.Fundo>
          <S.ImgFundo src={Fundo}></S.ImgFundo>
          <S.FunConteudo>
            <S.Item>
              <S.Item>
                <S.ImgLogo src={LogoPalco}></S.ImgLogo>
              </S.Item>
              <S.Item>
                <S.ImgLogo src={LogoRetiro}></S.ImgLogo>
              </S.Item>
            </S.Item>

            <S.Item>
              <S.linha src={Linha}></S.linha>
            </S.Item>

            <S.ItemTexto>
              <S.Span size="0.8">
                <S.SpanNe>O retiro dos artistas</S.SpanNe>, desde 1918, tem
                colaborado com os menos{" "}
              </S.Span>
              <S.Span size="0.8" className="">
                afortunados, dando uma condição de{" "}
                <S.SpanNe>qualidade de vida</S.SpanNe>
              </S.Span>
            </S.ItemTexto>

            <S.ItemTexto>
              <S.Span size="0.9" className="m-3">
                <S.SpanNe>
                  contribua você também para a permanencia dessa iniciativa
                </S.SpanNe>
              </S.Span>
            </S.ItemTexto>
            <S.Item>
              <S.Item>
                <S.Button onClick={() => window.location = "https://www.retirodosartistas.org.br"} className="btn btn-warning ">
                  {" "}
                  Quero conhecer
                </S.Button>
              </S.Item>

              <S.Item>
                <S.Button
                  className="btn btn-warning "
                  onClick={() => setabrirpix(true)}
                >
                  {" "}
                  Quero Colaborar
                </S.Button>
              </S.Item>

              {abrirpix && <Card setabrirpix={setabrirpix}></Card>}
            </S.Item>
          </S.FunConteudo>
        </S.Fundo>
      </S.Container>
      <Footer />
    </>
  );
}

export default Colaboracao;
