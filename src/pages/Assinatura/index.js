import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import app from "../../auth/config";
import Layout from "../../layout";
import "./style.css";
import * as S from "./styles";
import firebase from "firebase"
import IMG from '../../assets/imagemAssinatura.png'
function Assinatura() {
  const history = useHistory();
  // const { updateSignature, userIsAuthenticated, signature } = useAuth();
  // const { payFree } = usePayments();
  const userIsAuthenticated = app.auth().currentUser;
  const isSignature =
    app.auth().currentUser && localStorage.getItem("signature");
  // const { addToPayment } = usePayments();
  const [plans, setPlans] = useState([]);
  function formatcurrency(number) {
    let str = number.split("$")[1];
    str = str.split(".");
    return str;
  }
  useEffect(() => {
    async function getPlan() {
      try {
        const { data } = await axios.get(
          "https://json-serverepw.herokuapp.com/plains"
        );
        setPlans(data);
      } catch (error) {
        console.log(error);
      }
    }

    // if(userIsAuthenticated) {
    //   const userId = firebase.auth().currentUser.uid;

    //   let email = firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/signature");
    //   email.on('value', (snapshot) => {
    //     if (snapshot.val() !== null) {
    //       console.log(snapshot.val());
    //     }
    //   })

    // }

    getPlan();
  }, []);

  function payment(plano, isTesteGratis) {
    // firebase -> dados usuario -> data/hora  ## salvar
    const userId = firebase.auth().currentUser.uid;
    const data = new Date().toLocaleString("en-US", { timeZone: 'America/Sao_Paulo' })

    if (isTesteGratis) {
      // firebase.database().ref('users/' + userId).update({
      //   signature: true
      // })
      firebase.database().ref('assinaturas/' + userId).update({
        userId, data, id: "28d47f87-3dc0-4660-8f2c-261f0484586e", name: "Mensal", value: "$19.97"
      })
      window.location.href = "http://pag.ae/7XLfTiyXa";
    } else {
      // firebase.database().ref('users/' + userId).update({
      //   signature: true
      // })
      firebase.database().ref('assinaturas/' + userId).update({
        userId, data, id: plano.id, name: plano.name, value: plano.value
      })
      window.location.href = plano.paymentLink;
    }

  }

  console.log(isSignature)

  return (
    <Layout>

      <S.Wrapper>
        <S.Container>
          <>
            <S.Header>
              <S.Div>
                <span>Teste grátis por 7 dias</span>

                <S.HeaderSpan>
                  Aproveite desconto em lançamentos e o nosso catálogo com
                  conteúdo exclusivo e ilimitado em peças teatrais, stand-ups,
                  shows e palestras.
                </S.HeaderSpan>

                <S.ButtonPagar
                  onClick={() => {
                    userIsAuthenticated
                      ? (payment({}, true))
                      : history.push("/LoginAssinatura");
                  }}
                >
                  INICIAR PERÍODO DE TESTE
                </S.ButtonPagar>
              </S.Div>
              <S.Im>
                <img className="img" alt="" src={IMG}></img>
              </S.Im>
            </S.Header>

            <S.HeaderSpan>Escolha o melhor plano para você:</S.HeaderSpan>

            <S.CartActions>
              <S.ButtonVoltar onClick={() => history.push(`/`)}>
                <i className="bi bi-chevron-left"></i>Voltar{" "}
              </S.ButtonVoltar>
              {plans?.map((plano) => {
                return (
                  <>
                    <S.PagarDiv
                      key={plano.id}

                    >

                      <div className="valorPlano">
                      <div className="plano">{plano.name}
                      </div>
                        <div className="valorContainer">

                          <S.Spaan>De <S.Spaan style={{ textDecoration: "line-through" }}> {(parseInt(formatcurrency(plano.value)[0]) + parseInt(formatcurrency(plano.value)[0])).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.Spaan> por</S.Spaan>

                          R$ {formatcurrency(plano.value)[0]},{formatcurrency(plano.value)[1]}



                        </div>
               
                      </div>
                     

                      <div className="assina" onClick={() => {
                        userIsAuthenticated
                          ? (payment(plano, false))
                          : history.push("/LoginAssinatura");
                      }}>ASSINAR</div>

                    </S.PagarDiv>

                  </>
                );
              })}
            </S.CartActions>
          </>
          <S.CartInfo>
            <span>
              Torne-se um assinante e garanta 50% de desconto neste conteúdo
            </span>
            <S.CartInfoText>
              E ainda tenha acesso a um amplo conteúdo em peças teatrais,
              shows musicais e palestras para assistir a qualquer hora(exceto
              lançamentos).
            </S.CartInfoText>
          </S.CartInfo>
        </S.Container>
      </S.Wrapper>

    </Layout>
  );
}

export default Assinatura;
