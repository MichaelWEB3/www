import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./styles";
import firebase from "firebase";
import "./style.css";

function EsqueciSenha() {
  function resetPassword(email) {
    firebase.auth().sendPasswordResetEmail(email);
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.ContainerItem className="pt-5">
          <S.Span size="25">Resgate sua senha</S.Span>
        </S.ContainerItem>

        <S.ContainerItem>
          <form
            onSubmit={() => {
              resetPassword(document.getElementById("email").value);
              return false;
            }}
          >
            <input
              className="pte"
              name="email"
              type="email"
              id="email"
              placeholder="Email"
            />
            <S.Enviar type="submit">Enviar</S.Enviar>
          </form>
        </S.ContainerItem>
      </S.Container>

      <Footer />
    </>
  );
}

export default EsqueciSenha;
