import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { MdShoppingCart, MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import * as S from "./styles";
import logo from "../../assets/logoPalcoweb.png";
// import User from "../../Connections/user";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import app from "../../auth/config";
import firebase from "firebase"
import { AuthContext } from "../../auth/AuthContext";

function Header({ page, setPoupUp }) {
  const isSignature = app.auth().currentUser && localStorage.getItem("signature");

  const [select, setSelect] = useState(page);
  const [logged] = useState(false);
  const [toggle, setToggle] = useState(false);

  const pages = ["Início", "Canais", "Saiba Mais","Categorias"];
  const pagesToggle = ["Início", "Canais", "Saiba Mais","Categorias", "Entrar", "Assine já", "Carrinho de Compras"];
  const pagesToggleLogado = ["Início", "Assinatura","Canais", "Categorias","Saiba Mais", "Carrinho de Compras", "Meus Espetáculos", "Minha Conta", "Ajuda", "Sair"];

  const history = useHistory();

  const pathFunction = (index) => {
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/canais";
      case 2:
        return "/SaibaMais";
      case 3:
        return "/categorias";
      case 4:
        return "/Assinatura";
      case 5:
        return "/cart";
      default:
        return "/";
    }
  };

  const pathFunctionLogado = (index) => {
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/espetaculos/assinante";
      case 3:
        return "/categorias";
      case 2:
        return "/canais";
      case 4:
        return "/SaibaMais";
      case 5:
        return "/cart";
      case 6:
        return "/espetaculos";
      case 7:
        return "/perfil";
      default:
        return "/";
    }
  };

 

  const { currentUser } = useContext(AuthContext);

  const logado = localStorage.getItem("logado");
  const [perfilButton, setperfilButton] = useState(false);
  function name() {
    setTimeout(function () {
      if (currentUser) {

        let name = firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/fullName")
        name.get("value").then((snapshot) => {
          document.getElementById("nameola").innerHTML = "Olá " + snapshot.val()
          // alert(snapshot.val())
        })
      }
    }, 2000)
  }
  name()

  if (currentUser) {
    return (
      <>
        {toggle && (
          <S.ModalMenu>
            {logado === "true"
              ? pagesToggleLogado.map((page, index) => {
                if (page === "Sair") {
                  return (
                    <S.PageToggle
                      key={String(page)}
                      select={Number(index) === Number(select)}
                      onClick={() => {
                        localStorage.setItem("logado", "false");
                        app.auth().signOut();
                        setSelect(index);
                      }}
                    >
                      <Link to={pathFunctionLogado(index)}>{page}</Link>
                    </S.PageToggle>
                  );
                }
                if (page === "Ajuda") {
                  return (
                    <S.PageToggle
                      key={String(page)}
                      select={Number(index) === Number(select)}
                      onClick={() => {
                        window.location.href =
                          "mailto:ouvidoria@palcoweb.com.br?subject=Ouvidoria Palco web";
                      }}
                    >
                      <Link>{page}</Link>
                    </S.PageToggle>
                  );
                }
                return (
                  <S.PageToggle
                    key={String(page)}
                    select={Number(index) === Number(select)}
                    onClick={() => {
                      window.location.reload();
                      setSelect(index)
                     
                    }}
                  >
                    <Link to={pathFunctionLogado(index)}>{page}</Link>
                  </S.PageToggle>
                );
              })
              : pagesToggle.map((page, index) => {
                return (
                  <S.PageToggle
                    key={String(page)}
                    select={Number(index) === Number(select)}
                    onClick={() => {
                      window.location.reload();
                      setSelect(index)}}
                  >
                    <Link to={pathFunction(index)}>{page}</Link>
                  </S.PageToggle>
                );
              })}
          </S.ModalMenu>
        )}
        <S.Container>
          <S.Content>
            <img
              src={logo}
              alt="Logotipo Palcoweb"
              onClick={() => history.push("/")}
            />
            <S.Pages>
              {pages.map((page, index) => {
                return (
                  <S.Page
                    key={String(page)}
                    select={Number(index) === Number(select)}
                    onClick={() => {
                      window.location.reload();
                      setSelect(index)
                      
                    }}
                  >
                    <Link to={pathFunction(index)}>{page}</Link>
                  </S.Page>
                );
              })}
            </S.Pages>

            <S.IconsPerfil>
              {logged ? (
                <FaUserCircle onClick={() => history.push(`/profile`)} />
              ) : (
                <>
                  {logado === "true" ? (
                    <>
                      {/* <MdShoppingCart onClick={() => history.push("/cart")} /> */}
                      <S.NomeLogado id="nameola" onClick={() => name()}> </S.NomeLogado>
                      <S.Perfil
                        onClick={() => {
                          setperfilButton(!perfilButton);
                          setToggle(false);
                        }}
                      >
                        <S.Foto>
                          {firebase.auth().currentUser.photoURL === null ? <i className="bi bi-person-fill"></i> : <img alt="" style={{ width: '50px', height: '50px', borderRadius: "15px" }} src={firebase.auth().currentUser.photoURL}></img>}

                        </S.Foto>
                        {perfilButton && (
                          <S.PerfilButton>
                            <S.Button
                              onClick={() => history.push(`/espetaculos/assinante`)}
                            >
                              Assinatura
                            </S.Button>
                            <S.Button
                              onClick={() => history.push(`/espetaculos`)}
                            >
                              Meus Espetáculos
                            </S.Button>
                            <S.Button onClick={() => history.push(`/perfil`)}>
                              Minha conta
                            </S.Button>
                            <S.Button
                              onMouseHover={() => setperfilButton(true)}
                            >
                              <a
                                style={{
                                  textDecorationLine: "none",
                                  color: "white",
                                }}
                                href="mailto:ouvidoria@palcoweb.com.br?subject=Ouvidoria Palco web"
                              >
                                Ajuda
                              </a>
                            </S.Button>
                            <S.Button
                              onClick={() => {
                                localStorage.setItem("logado", "false");
                                app.auth().signOut();
                                history.push("/");
                              }}
                            >
                              Sair
                            </S.Button>
                          </S.PerfilButton>
                        )}
                      </S.Perfil>
                      {isSignature && <Button 
                        onClick={() => history.push(`/Assinatura`)}
                        text={"Assinatura"}
                      />
                      }
                    </>
                  ) : (
                    <>
                      {/* <MdShoppingCart onClick={() => history.push("/cart")} /> */}
                      <S.DoisBotons>
                        <Button
                          onClick={() => history.push(`/login`)}
                          text={"Entrar"}
                          color="black"
                          textColor="#FFF"
                        />

                        <Button
                          onClick={() => history.push(`/Assinatura`)}
                          text={"Assinatura"}
                        />
                      </S.DoisBotons>
                    </>
                  )}
                </>
              )}
            </S.IconsPerfil>

            <S.Collapse>
              <MdMenu
                className="menu"
                onClick={() => {
                  setToggle(!toggle);
                  setperfilButton(false);
                }}
              />
            </S.Collapse>
          </S.Content>
        </S.Container>
      </>
    );
  } else {
    return (
      <>
        {toggle && <S.ModalMenu>

          {logado === "true" ? (
            pagesToggleLogado.map((page, index) => {
              return (
                <S.PageToggle
                  key={String(page)}
                  select={Number(index) === Number(select)}
                  onClick={() =>{ 
                    window.location.reload();
                    setSelect(index)
                   }}
                >
                  <Link to={pathFunctionLogado(index)}>{page}</Link>
                </S.PageToggle>
              );
            })
          ) : (
            pagesToggle.map((page, index) => {
              return (
                <S.PageToggle
                  key={String(page)}
                  select={Number(index) === Number(select)}
                  onClick={() =>{
                    window.location.reload();
                    setSelect(index)}}
                >
                  <Link to={pathFunction(index)}>{page}</Link>
                </S.PageToggle>
              );
            })
          )
          }

        </S.ModalMenu>}
        <S.Container>
          <S.Content>
            <img
              src={logo}
              alt="Logotipo Palcoweb"
              onClick={() => history.push("/")}
            />
            <S.Pages>
              {pages.map((page, index) => {
                return (
                  <S.Page
                    key={String(page)}
                    select={Number(index) === Number(select)}
                    onClick={() => setSelect(index)}
                  >
                    <Link to={pathFunction(index)}>{page}</Link>
                  </S.Page>
                );
              })}
            </S.Pages>

            <S.Icons>
              <MdShoppingCart onClick={() => history.push("/cart")} />
              <S.DoisBotons>
                <Button
                  onClick={() => history.push(`/login`)}
                  text={"Entrar"}
                  color="black"
                  textColor="#FFF"
                />
                <Button
                  onClick={() => history.push(`/Assinatura`)}
                  text={"Assinatura"}
                />
              </S.DoisBotons>
            </S.Icons>

            <S.Collapse>
              <MdMenu className="menu"
                onClick={() => {
                  setToggle(!toggle);
                  setperfilButton(false);
                }} />
            </S.Collapse>
          </S.Content>
        </S.Container>
      </>
    );
  }
}

export default Header;
