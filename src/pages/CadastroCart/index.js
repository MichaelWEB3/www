import React, { useCallback, useContext } from "react";
import app from "../../auth/config";
import { AuthContext } from "../../auth/AuthContext";
import firebase from "firebase";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import * as S from "./styles";

import { useHistory } from "react-router-dom";

function CadastroCart(history) {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        if (
          document.getElementById("confsenha").value ===
          document.getElementById("senha").value
        ) {
          // alert(email.value + date.value /* + password.value  + number.value + name.value*/ )
          await app
            .auth()
            .createUserWithEmailAndPassword(
              email.value,
              document.getElementById("senha").value
            );

          let UserID = firebase.auth().currentUser.getIdToken(true),
            Name = document.getElementById("name").value,
            Password = document.getElementById("senha").value,
            Date = document.getElementById("birthday").value,
            Number = document.getElementById("phone").value,
            Email = "email.value";

          function writeUserData(
            userId = UserID,
            name = Name,
            email = Email,
            password = Password,
            date = Date,
            number = Number
          ) {
            firebase
              .database()
              .ref("users/" + userId)
              .set({
                fullName: name,
                email: email,
                password: password,
                birthday: date,
                phone: number,
              });
          }
          writeUserData();
          history.push("/Login");
        } else {
          alert("senhas não coincidem!");
        }
      } catch (error) {
        if (error === "TypeError: history.push is not a function") {
          alert("Cadastrado com sucesso!");
        } else if (error === "Password should be at least 6 characters") {
          alert("Senha deve conter ao menos 6 caracteres!");
        }
      }
    },
    [history]
  );

  const push = useHistory();

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    localStorage.setItem("logado", "true");
    push.push(`/cart/id`);
    return (
      <>
        {}
        <Header />
        <S.Container>
          <center>
            <h1>Usuário logado, deseja deslogar para prosseguir?</h1>
            <br />
            <br />
            <button onClick={() => app.auth().signOut()}>Sign out</button>
          </center>
        </S.Container>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <S.Container>
          <form onSubmit={handleSignUp}>
            <S.ContainerItem className="pt-5">
              <S.Span size="25">Cadastre-se</S.Span>
            </S.ContainerItem>
            <S.ContainerItem>
              <input
                className="input"
                id="name"
                placeholder="Nome Completo"
                type="name"
                required
                minLength="4"
                maxlength="20"
              ></input>
              <input
                className="input"
                placeholder="Email"
                name="email"
                type="email"
                required
              ></input>
            </S.ContainerItem>

            <S.ContainerItem>
              <input
                className="input"
                id="birthday"
                placeholder="Data de nascimento"
                type="date"
                required
              ></input>
              <input
                className="input"
                id="phone"
                placeholder="celular"
                type="number"
                required
                minLength="11"
                maxlength="11"
              ></input>
            </S.ContainerItem>

            <S.ContainerItem>
              <input
                className="input"
                id="senha"
                placeholder="Senha"
                type="password"
                name="senha"
                required
              ></input>
              <input
                className="input"
                id="confsenha"
                placeholder="Confirma senha"
                type="password"
                required
              ></input>
            </S.ContainerItem>

            <S.ContainerItem className="pt-3">
              <S.Voltar
                className="btn m-2 btn-danger "
                onClick={() => push.push(`/LoginCart/id`)}
              >
                Voltar
              </S.Voltar>
              <S.Cadastro className="btn m-2"> Cadastre-se</S.Cadastro>
            </S.ContainerItem>
          </form>
          <S.Google>
            <i className="bi bi-google"></i> Entrar com Google
          </S.Google>
        </S.Container>

        <Footer />
      </>
    );
  }
}

export default CadastroCart;
