import React, { useContext, useState } from "react";
import * as S from "./styles";
import app from "../../auth/config";
import { AuthContext } from "../../auth/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";
import firebase from "firebase";
import Layout from "../../layout";
import { FaSpinner } from "react-icons/fa";

function Login() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [Erro, setErro] = useState(false);

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
      history.push("/");
    } catch (error) {

      if (error.message === "The password is invalid or the user does not have a password.") {
        setLoading(false);
        setErro("Senha invalida")
        setTimeout(() => {
          setErro(false)
        }, 3000)

      }
      if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
        setErro("E-mail de usuario invalido")
        setTimeout(() => {
          setErro(false)
        }, 5000)
      }
      if (error.message === 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.') {

        setErro("O acesso a esta conta foi desativado temporariamente... definindo sua senha ou você pode tentar novamente mais tarde.")
        setTimeout(() => {
          setErro(false)
        }, 5000)
      }
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    localStorage.setItem("logado", "true");
    history.push(`/`);
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
        {Erro && <div id="alertErro" class="alert alert-danger m-3 " role="alert">
          {Erro}
        </div>}

      </S.Container>
    </Layout>
  );
}

export default Login;
