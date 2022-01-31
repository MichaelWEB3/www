import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthContext";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import "./style.css";
import ListaHok from "../../dados/hooks/listaHok";
import Layout from "../../layout";
import firebase from "firebase"
import axios from "axios";

function Cart() {
  const listaHok = ListaHok();
  const espetaculoUsuario = listaHok.listaEspetaculosDoUsuario;
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  console.log(espetaculoUsuario)
  if (!currentUser) {
    history.push("login");
  }
  const [temItem, setTem] = useState(false);

  useEffect(() => {
    if (espetaculoUsuario.key) {
      setTem(true);
    }
  }, [espetaculoUsuario.key]);

  const userId = firebase.auth().currentUser.uid;
  console.log(userId)

  async function payment(){
    // firebase -> dados usuario -> data/hora  ## salvar
    
    const { data } = await axios?.get("https://json-serverepw.herokuapp.com/user/" + userId) 
    if(data) axios.patch("https://json-serverepw.herokuapp.com/user/" + userId, {
      id: userId,
      comprados: [
        data?.comprados,
        {
          nome: listaHok?.listaEspetaculosDoUsuario.tituloEsp,
          data: new Date()
        }
      ]
      },
    );
    if(!data) axios.patch("https://json-serverepw.herokuapp.com/user/" + userId, {
      id: userId,
      comprados: [
        {
          nome: listaHok?.listaEspetaculosDoUsuario.tituloEsp,
          data: new Date()
        }
      ]
      },
    );
    window.location.href = espetaculoUsuario.paymentLink;
    const comprados = espetaculoUsuario.tituloEsp;

    firebase.database().ref('promocao/' + userId).update({
      userId, data: new Date(), comprados
    })
    
  }

  return (
    <Layout>
      <S.Wrapper>
        <S.Container noItem={!temItem}>
          {
            !temItem ? (
              <S.CardFilmeTitle>
                <S.Cart>
                  <i className="bi bi-cart-x-fill"></i>
                </S.Cart>
                <span>
                  Encontre um de Nossos Espetáculos e adicione ao carrinho :D
                </span>
              </S.CardFilmeTitle>
            ) : (
              <>
                <S.Header>
                  <span>Carrinho de compras</span>
                </S.Header>
                <S.CartContainer>
                  <S.CartLinha>
                    <S.CartFilme>
                      <S.X>
                        <i className="bi bi-x-lg"></i>
                      </S.X>
                      <S.Img src={espetaculoUsuario.thumbnail}></S.Img>
                      <S.CartFilmeInfo>
                        <S.CardFilmeTitle>
                          {espetaculoUsuario.tituloEsp}
                        </S.CardFilmeTitle>
                        <S.CardFilmeSubTitle>
                          {espetaculoUsuario.tituloEsp}
                        </S.CardFilmeSubTitle>
                        <S.CardFilmeSubTitle>
                         
                          
                        </S.CardFilmeSubTitle>
                        <S.CardFilmeValueHor>
                          Você tem 24 horas para assistir quantas vezes quiser a
                          esse espetaculos após o pagamento.
                        </S.CardFilmeValueHor>
                      </S.CartFilmeInfo>
                    </S.CartFilme>
                    <S.CardFilmeValue>
                      R$ {espetaculoUsuario.valorPreco}
                    </S.CardFilmeValue>
                  </S.CartLinha>
                </S.CartContainer>
                <S.CartTotalContainer>
                  <span>Total R$: {espetaculoUsuario.valorPreco}</span>
                </S.CartTotalContainer>
                <S.CartActions>
                  <S.ButtonVoltar
                    onClick={() =>
                      history.push(`/Cardezao/${espetaculoUsuario.key}`)
                    }
                  >
                    <i className="bi bi-chevron-left"></i>Voltar{" "}
                  </S.ButtonVoltar>
                  <S.ButtonPagar
                    onClick={() => payment()}
                  >
                    Pagar
                  </S.ButtonPagar>
                </S.CartActions>
              </>
            )
            /* {/*         <S.CartInfo>
          <span>
            Torne-se um assinante e garanta 50% de desconto neste conteúdo
          </span>
          <S.CartInfoText>
            E ainda tenha acesso a um amplo conteúdo em peças teatrais, shows musicais e palestras para assistir a qualquer hora(exceto lançamentos).
          </S.CartInfoText>
        </S.CartInfo>
        <S.CartActionsPlains>
              <S.ButtonPlanos
                onClick={() => history.push(`/pagamento/idespetaculo`)}
              >
                Planos
              </S.ButtonPlanos>
        </S.CartActionsPlains> */
          }{" "}
          */
        </S.Container>
      </S.Wrapper>
    </Layout>
  );
}

export default Cart;
