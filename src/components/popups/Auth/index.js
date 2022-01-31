import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Popup from "../../../components/Popup";

import logo from "../../../assets/logoPalcoweb.png";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

function Auth({ visible, changeVisible }) {


const history = useHistory();

  return (
    <S.Container>
      <Popup visible={visible} changeVisible={changeVisible}>
        <S.Background>
          <S.Logo>
            <img src={logo} alt="Logo PalcoWeb" />
          </S.Logo>
          <S.Form>
            
            <h1>minha conta</h1>

            <S.Inputs onClick={() => history.push(`/login/id`)}>
            
            </S.Inputs>

            <S.Buttons>
              <button onClick={()=> changeVisible('Register')}>
                <AiFillFileAdd />
                CADASTRAR-SE
              </button>
            </S.Buttons>

            <S.Forgot>Esqueceu a senha?</S.Forgot>
            <S.SocialButtons>
              <button className="facebook">
                <FaFacebookSquare />
                Entrar com o Facebook
              </button>
              <button className="gmail"  onClick={alert('ola')}>
                <FcGoogle />
                Entrar com o Google
              </button>
            </S.SocialButtons>
          </S.Form>
        </S.Background>
      </Popup>
    </S.Container>
  );
}

export default Auth;
