import React, { useCallback, useContext, useState } from "react";
import app from "../../auth/config";
import { AuthContext } from "../../auth/AuthContext";
import firebase from "firebase";
import "./style.css";
import * as S from "./styles";
import InputMask from "react-input-mask";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useHistory } from "react-router-dom";
import Layout from "../../layout";

function Cadastro(history) {

 const [number, setNumber] = useState("")
 const [number2, setNumber2] = useState("")

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

  function handleChangeNumber(e){    
    setNumber(  e.target.value )
  }

  function handleChangeNumber2(e){
      setNumber2(  e.target.value )
  }

  const beforeMaskedValueChange2 = (newState, userInput) => {
    var { value } = newState;
    var selection = newState.selection;
    var cursorPosition = selection ? selection.start : null;
 
    if (value.endsWith('-') && userInput !== '-' && !number.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }
 
    return {
      value,
      selection
    };
  }

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, phone, password, confPassword, name, birthday } =
        event.target.elements;
      try {
        if (password.value === confPassword.value) {
          // alert(email.value + date.value /* + password.value  + number.value + name.value*/ )
          await app
            .auth()
            .createUserWithEmailAndPassword(
              email.value,
              document.getElementById("senha").value
            );

          let Name = name.value,
            Password = password.value,
            Date = birthday.value,
            Number = phone.value,
            Email = email.value,
            UserID = firebase.auth().currentUser.uid;

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
          window.location.href = "";
        } else {
          alert("senhas não coincidem!");
        }
      } catch (error) {
        if (error === "TypeError: history.push is not a function") {
          alert("Cadastrado com sucesso!");
        } else if (error === "Password should be at least 6 characters") {
          alert("Senha deve conter ao menos 6 caracteres!");
        } else {
          // alert(error);
        }
      }
    },
    [history]
  );

  const push = useHistory();

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    localStorage.setItem("logado", "true");
    push.push("/");
  } else {
    return (
      <Layout>
        <S.Container>
          <form onSubmit={handleSignUp}>
            <S.ContainerItem className="pt-5">
              <S.Span size="25">Cadastre-se</S.Span>
            </S.ContainerItem>
            <S.ContainerItem>
              <input
                className="input"
                id="name"
                name="name"
                placeholder="Nome Completo"
                type="name"
                required
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
              {/* <input
                className="input"
                id="birthday"
                name="birthday"
                placeholder="Data de nascimento"
                type="date"
                required
              ></input> */}
              <InputMask 
                id="birthday"
                name="birthday"
                mask="99/99/9999" 
                maskChar={null} 
                value={number2} 
                className="input" 
                placeholder="Data de nascimento" 
                onChange={handleChangeNumber2} 
                beforeMaskedValueChange={beforeMaskedValueChange2} 
              />
              {/* <InputMask 
                id="phone"
                name="phone"
                mask="(99) 99999-9999" 
                maskChar={null} 
                value={number} 
                className="input" 
                placeholder="(99) 99999-9999" 
                onChange={handleChangeNumber} 
                beforeMaskedValueChange={beforeMaskedValueChange} 
              /> */}
              <PhoneInput
                defaultCountry="BR"
                className="input" 
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={number}
                onChange={() => handleChangeNumber}
                error={number ? (isValidPhoneNumber(number) ? undefined : 'Invalid phone number') : 'Phone number required'}
              />

              {/* <input
                className="input"
                id="phone"
                name="phone"
                placeholder="celular"
                type="number"
                value={number}
                onChange={handleChangeNumber}
                required
            

              ></input> */}
            </S.ContainerItem>

            <S.ContainerItem>
              <input
                className="input"
                id="senha"
                placeholder="Senha"
                type="password"
                name="password"
                required
              ></input>
              <input
                className="input"
                id="confsenha"
                placeholder="Confirma senha"
                type="password"
                name="confPassword"
                required
              ></input>
            </S.ContainerItem>

            <S.ContainerItem className="pt-3">
              <S.Voltar
                className="btn m-2 btn-danger "
                onClick={() => push.push(`/Login/id`)}
              >
                Voltar
              </S.Voltar>
              <S.Cadastro className="btn m-2"> Cadastre-se</S.Cadastro>
            </S.ContainerItem>
          </form>

          {/* <S.Facebook onClick={loginFacebook}> <i className="bi bi-facebook "></i> Entrar com Facebook</S.Facebook> */}
          <S.Google onClick={loginGoogle}>
            <i className="bi bi-google"></i> Entrar com Google
          </S.Google>
        </S.Container>
      </Layout>
    );
  }
}

export default Cadastro;
