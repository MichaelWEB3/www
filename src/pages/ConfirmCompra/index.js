import React, { useState, useEffect } from "react";

import * as S from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import useDadosList from "../../dados/hooks/listaHok";
import axios from "axios";
import firebase from "firebase";

function ConfirmCompra() {
  const history = useHistory();
  const listaHok = useDadosList();
  const [espetaculoUsuario, setEspetaculoUsuario] = useState(null);

  const api = axios.create({
    baseURL: "https://json-serverepw.herokuapp.com/user",
  });

  useEffect(() => {
    async function request() {
      if (!listaHok.pagou) {
        const userId = firebase.auth().currentUser.uid;
        await setEspetaculoUsuario(listaHok?.listaEspetaculosDoUsuario);

        api.patch("/" + userId, {
          id: userId,
          comprados: {
            nome: listaHok?.listaEspetaculosDoUsuario.tituloEsp,
            data: new Date(),
          },
        });
      }
    }
    request();
  }, [listaHok, api]);
  return (
    <>
      <Header />

      <S.Container>
        <S.Sessao>
          <S.Span size="1.3" className="p-5">
            Agradecemos sua compra
          </S.Span>
          <S.Span size="1.3" className="p-2">
            Sessão disponivel
          </S.Span>
          {/** 
          <S.SessaoItem>
            <S.Minutos>
              <S.Span size="2" cor="#E4B810">
                <center>{isNaN(daysRemaining) ? 0 : daysRemaining}</center>
              </S.Span>
            </S.Minutos>

            <S.Minutos>
              <S.Span size="2" cor="#E4B810">
                <center>{isNaN(hoursRemaining) ? 0 : hoursRemaining}</center>
              </S.Span>
            </S.Minutos>

            <S.Minutos>
              <S.Span size="2" cor="#E4B810">
                <center>
                  {isNaN(minutesRemaining) ? 0 : minutesRemaining}
                </center>
              </S.Span>
            </S.Minutos>
          </S.SessaoItem>

          <S.SessaoItem>
            <S.Span size="1.3" className="p-3">
              Dias
            </S.Span>{" "}
            <S.Span size="1.3" className="p-3">
              Horas
            </S.Span>{" "}
            <S.Span size="1.3" className="p-3">
              Minutos
            </S.Span>{" "}
           
          </S.SessaoItem>
        **/}
          <S.SessaoItem>
            <S.Span size="1.3" className="p-5" cor="#E4B810">
              Lembrando que você tem 24h para assistir a esse espetaculo com
              total liberdade em qualquer lugar, palcoweb agradece sua compra,
              bom espetaculo.
            </S.Span>
          </S.SessaoItem>
        </S.Sessao>

        <S.Carrinho>
          <S.Img src={espetaculoUsuario?.thumbnail}></S.Img>

          <S.Info>
            <S.Span size="1.3">{espetaculoUsuario?.tituloEsp}</S.Span>
            {/* <S.Span size="1.3" >{espetaculoUsuario.artistaEsp}</S.Span> */}
            <S.Span size="1.3" className="pt-2" cor="#E4B810">
              {espetaculoUsuario?.valorDia}
            </S.Span>
            <S.Span size="1.3" cor="#E4B810">
              Data da compra: {espetaculoUsuario?.valorHorarioSe?.dia} /{" "}
              {espetaculoUsuario?.valorHorarioSe?.mes} /{" "}
              {espetaculoUsuario?.valorHorarioSe?.ano} as{" "}
              {espetaculoUsuario?.valorHorarioSe?.horas} Horas
            </S.Span>
            <S.Span size="1.3" cor="#E4B810">
              Expira na data:{" "}
              {parseInt(espetaculoUsuario?.valorHorarioSe?.dia) + 1} /{" "}
              {espetaculoUsuario?.valorHorarioSe?.mes} /{" "}
              {espetaculoUsuario?.valorHorarioSe?.ano} as{" "}
              {espetaculoUsuario?.valorHorarioSe?.horas} Horas
            </S.Span>
          </S.Info>

          <S.CarrinhoItem>
            <S.Span size="1.3" cor="#E4B810">
              Total R$: {espetaculoUsuario?.valorPreco}
            </S.Span>
          </S.CarrinhoItem>
        </S.Carrinho>

        <S.BordarBottom></S.BordarBottom>

        <S.AreaButtons>
          <S.Button className="btn" onClick={() => history.push(`/`)}>
            <S.Span size="1.0" cor="#FFF">
              {" "}
              <i className="bi bi-chevron-left"></i>Voltar para o início
            </S.Span>
          </S.Button>
          <S.ButtonContinuar
            className="btn"
            onClick={() => history.push(`/espetaculos`)}
          >
            Meus espetáculos
          </S.ButtonContinuar>
        </S.AreaButtons>
      </S.Container>
      <Footer />
    </>
  );
}

export default ConfirmCompra;
