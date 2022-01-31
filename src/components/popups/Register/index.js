import React from "react";
import { AiFillFileAdd } from "react-icons/ai";

import Popup from "../../../components/Popup";
import Input from "../../../components/Input";

import logo from "../../../assets/logoPalcoweb.png";

import User from "../../../Connections/user";

import * as S from "./styles";

function Register({ visible, changeVisible }) {
  const user = new User();

  const handleSubmit = async (data) => {

    try {
      const recieved = await user.Register(data);

      if (recieved.status === 204) {
        try {
          const login = {
            email: data.email,
            password: data.password,
          };

          const recieved = await user.Login(login);

          if (recieved.status === 200) {
            localStorage.setItem("@user", JSON.stringify(recieved.data));
            changeVisible("off");
          }
        } catch (err) {
        }
      }
    } catch (err) {
    }
  };

  return (
    <S.Container>
      <Popup visible={visible} changeVisible={changeVisible}>
        <S.Background>
          <S.Logo>
            <img src={logo} alt="Logo PalcoWeb" />
          </S.Logo>

          <S.ContentForm>
            <h1>Crie uma conta</h1>
            <S.Form onSubmit={handleSubmit}>

              <div className='forms-container'>
                <S.FormColumn>
                  <Input name="name" type="text" placeholder="nome completo" required />
                  <Input name="cpf" type="text" placeholder="cpf" mask="999.999.999-99" required />
                  <Input name="cep" type="text" placeholder="cep" mask="99999-999" required />
                  <Input name="address" type="text" placeholder="endereço" required />
                  <Input
                    name="complement"
                    type="text"
                    placeholder="complemento"
                    required
                  />
                </S.FormColumn>

                <S.FormColumn>
                  <Input name="email" type="email" placeholder="email" required />
                  <Input name="password" type="password" placeholder="senha" required />
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="repetir senha"
                    required
                  />
                  <Input name="telephone" type="numeric" placeholder="telefone" mask="(99) 9 9999-9999" required />
                  <Input name="birthday" type="text" placeholder="nascimento" mask="99/99/9999" required />
                </S.FormColumn>
              </div>

              <button type="submit">
                <AiFillFileAdd />
                CONFIRMAR
              </button>
            </S.Form>
          </S.ContentForm>
        </S.Background>
      </Popup>
    </S.Container>
  );
}

export default Register;
