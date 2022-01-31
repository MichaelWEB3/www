import React, { useContext } from "react";
import * as S from "./styles";
import app from "../../auth/config";
import { AuthContext } from "../../auth/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";
import firebase from "firebase";
import Layout from "../../layout";

function LoginCart() {
  let history = useHistory();
  const handleLogin = async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          history.push("/cart");
      } catch (error) {
        if (error === "TypeError: Cannot read property 'push' of undefined") {
          alert("Usuário ou senha inválido!");
        }
      }
    }


  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    localStorage.setItem("logado", "true");
    history.push(`/cart`);
    return (
      <>
        <h1>Usuário Logado!</h1>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
      </>
    );
  } else {
  }

  // function loginFacebook() {
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  // }

  function loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
  }
  return (
    <Layout>
      <S.Container>
        <S.ContainerItem className="pt-5">
          <S.Span size="25">Minha conta</S.Span>
        </S.ContainerItem>
        <form onSubmit={handleLogin}>
          <S.ContainerItem>
            <input
              className="ipt"
              name="email"
              type="email"
              placeholder="Email"
            />
          </S.ContainerItem>
          <S.ContainerItem>
            <input
              className="ipt"
              name="password"
              type="password"
              placeholder="Senha"
            />
          </S.ContainerItem>
          <S.ContainerItem className="pt-3">
            <S.Entrar className="btn m-2 ">Entrar</S.Entrar>
            <S.Cadastro
              className="btn m-2"
              onClick={() => history.push(`/Cadastro`)}
            >
              {" "}
              Cadastre-se
            </S.Cadastro>
          </S.ContainerItem>
        </form>

        <S.Span
          size="15"
          className="p-3 ponte"
          onClick={() => history.push("/EsqueciSenha")}
        >
          Esqueceu a senha?
        </S.Span>

        {/* <S.Facebook onClick={loginFacebook}> <i className="bi bi-facebook "></i> Entrar com Facebook</S.Facebook> */}
        <S.Google onClick={loginGoogle}>
          <i className="bi bi-google"></i> Entrar com Google
        </S.Google>
      </S.Container>
    </Layout>
  );
}

export default LoginCart;
