import React, { useContext, useState } from "react";
import * as S from "./styles";
import app from "../../auth/config";
import { AuthContext } from "../../auth/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";
import firebase from "firebase";
import Layout from "../../layout";
import { FaSpinner } from "react-icons/fa";

function LoginAssinatura() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      const signature = firebase
        .database()
        .ref("users/" + firebase.auth().currentUser.uid + "/signature");
      localStorage.setItem("signature", JSON.stringify(signature));
      setLoading(false);
      history.push("/Assinatura");
    } catch (error) {
      if (error === "TypeError: Cannot read property 'push' of undefined") {
        setLoading(false);

        alert("Usuário ou senha inválido!");
      }
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    localStorage.setItem("logado", "true");
    history.push(`/Assinatura`);
  }
  // function loginFacebook() {
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  // }

  async function loginGoogle() {
    var provider = await new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
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
            <S.Entrar className="btn m-2 " disabled={loading}>
              {loading ? <FaSpinner /> : "Entrar"}
            </S.Entrar>
            <S.Cadastro
              disabled={loading}
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
        <S.Google onClick={loginGoogle} disabled={loading}>
          <i className="bi bi-google"></i> Entrar com Google
        </S.Google>
      </S.Container>
    </Layout>
  );
}

export default LoginAssinatura;
