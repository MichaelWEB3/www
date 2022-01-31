import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

import * as S from "./styles";

import Input from "../Input";

import User from "../../Connections/user";

function FormLogin({ changeVisible }) {
  const user = new User();

  async function handleSubmit(data) {
    
    try {
      const recieved = await user.Login(data);

      if (recieved.status === 200) {
        localStorage.setItem("@user" ,JSON.stringify(recieved.data) )
        changeVisible('off')
      }
    } catch (err) {
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Email" required/>
      <Input name="password" type="password" placeholder="Senha" required/>
      <button type="submit">
        <IoIosCheckmarkCircle />
        ENTRAR
      </button>
    </S.Form>
  );
}

export default FormLogin;
