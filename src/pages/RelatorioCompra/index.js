import React, { useState, useContext, useCallback } from 'react';
import * as S from './styles';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AuthContext } from "../../auth/AuthContext"
import { useHistory} from "react-router-dom";
import firebase from "firebase"
import './style.css'

function MeuPerfil() {
  const [mostrarPerfi, setmostrarPerfi] = useState(true)

  const { currentUser } = useContext(AuthContext);
  const history = useHistory()

    
  if(currentUser){
    
    setTimeout(function(){

        let email = firebase.database().ref('users/'+ firebase.auth().currentUser.uid + "/email")
        let birthday = firebase.database().ref('users/'+ firebase.auth().currentUser.uid + "/birthday")
        let name = firebase.database().ref('users/'+ firebase.auth().currentUser.uid + "/fullName")
        let phone = firebase.database().ref('users/'+ firebase.auth().currentUser.uid + "/phone")
    
    
    
        email.on('value', (snapshot) =>{
        document.getElementById("email").value = snapshot.val();
        })
        name.on('value', (snapshot) =>{
        document.getElementById("name").value = snapshot.val();
        })
        birthday.on('value', (snapshot) =>{
        document.getElementById("birthday").value = snapshot.val();
        })
        phone.on('value', (snapshot) =>{
        document.getElementById("phone").value = snapshot.val();
      
      })
    }, )



  }

  const dataUpdate = useCallback (async event =>{
  event.preventDefault()
  try{
    // const { phone, birthday, name} = event.target.elements
    let phone = document.getElementById('phone')
    let birthday = document.getElementById('birthday')
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let userId = firebase.auth().currentUser.uid

    if(phone.value!=null){
      firebase.database().ref('users/' + userId).update({
        phone: phone.value
      })
    } 
    if(birthday.value!==null){
      firebase.database().ref('users/' + userId).update({
        birthday: birthday.value
      })
    } 
    if(name.value!==null){
      firebase.database().ref('users/' + userId).update({
        fullName: name.value
      })
    } 
    if(email.value!==null){
      firebase.database().ref('users/' + userId).update({
        email: email.value
      })
    }
  } catch(error){
    alert(error)
  }
  },[history])
 

  if(!currentUser){
    history.push("./login")
    return(<></>)
  } 

  





  return (
    <>
      <Header />

      <S.Container>

        <S.TextoLateral>
          <S.SpanLatera size="15" cor="#FFF" className="m-3" setadoPerfil={mostrarPerfi} onClick={() => setmostrarPerfi(true)}> Dados Pessoais</S.SpanLatera>
          <S.SpanCompra size="15" cor="#FFF" className="m-3" setadoCompra={mostrarPerfi}  onClick={() => setmostrarPerfi(false)}>Relatorio de compras</S.SpanCompra>
        </S.TextoLateral>

        {mostrarPerfi ?
          <>
            <S.AreaFotoPerfil>

              <S.Foto src={require('../../assets/clarisse.png')} className="m-2 "></S.Foto>
            </S.AreaFotoPerfil>
            <S.AreaPerfil>
          <form onSubmit={dataUpdate}>
              <S.SpanInput size="23" className=" p-5 " >Minha conta</S.SpanInput>
              <S.GrupoInput className="p-2">
                <S.SpanInput size="14" className="m-2">Nome Completo</S.SpanInput>
                <input  className="input" id="name" name="name" ></input>
              </S.GrupoInput>

              <S.GrupoInput className="p-2">
                <S.SpanInput size="14" className="m-2">Data de nascimento</S.SpanInput>
                <input  className="input"  type="date" id="birthday" name="birthday"></input>
              </S.GrupoInput>

              <S.GrupoInput className="p-2">
                <S.SpanInput size="14" className="m-2">Celular</S.SpanInput>
                <input className="input"  id="phone" name="phone" ></input>
              </S.GrupoInput>

              <S.GrupoInput className="p-2">
                <S.SpanInput size="14" className="m-2">E-mail</S.SpanInput>
                <input className="input"  type="email" name="email" id="email"></input>
              </S.GrupoInput>
{/* 
              <S.GrupoInput className="p-2">
                <S.SpanInput size="14" className="m-2">Senha</S.SpanInput>
                <S.Input type="password" value="123" ></S.Input>

              </S.GrupoInput> */}
              <button className="btn button p-2 m-3"  onClick={dataUpdate}>SALVAR ALTERAÇÕES</button>
            </form>
            </S.AreaPerfil>
          </> :
          //relatorio de compras
          <S.AreaCompras>
         <S.SpanInput size="23" className=" p-5 " >Minha conta</S.SpanInput>
            <S.Carrinho>
              
              <S.Img></S.Img>





              <S.Info>
                <S.Span size="15" >Titulo</S.Span>
                <S.Span size="15" >Produtora: <S.Span cor="#FDCC12" size="15" > Chain Entreteriments</S.Span></S.Span>
                <S.Span size="15" >data compra: 19/08/2021 21:17</S.Span>
                <S.Span size="15" >agendamento:  19/08/2021 21:17</S.Span>
                <S.Span size="15 ">BackStage: Sim</S.Span>
              </S.Info>

              <S.CarrinhoItem>
                <S.Span size="12">Total pago: <S.Span cor="#FDCC12" size="12" >R$ 35</S.Span>  </S.Span>
               

              </S.CarrinhoItem>


            </S.Carrinho>


            <S.BordarBottom></S.BordarBottom>
            <S.Carrinho>
              
              <S.Img></S.Img>





              <S.Info>
                <S.Span size="15" >Titulo</S.Span>
                <S.Span size="15" >Produtora: <S.Span cor="#FDCC12" size="15" > Chain Entreteriments</S.Span></S.Span>
                <S.Span size="15" >data compra</S.Span>
                <S.Span size="15" >agendamento</S.Span>
                <S.Span size="15 ">Horarios</S.Span>
              </S.Info>

              <S.CarrinhoItem>
                <S.Span size="15">Backstage</S.Span>
                <S.Span size="15">Total</S.Span>


              </S.CarrinhoItem>


            </S.Carrinho>


            <S.BordarBottom></S.BordarBottom>  <S.Carrinho>
              
              <S.Img></S.Img>





              <S.Info>
                <S.Span size="15" >Titulo</S.Span>
                <S.Span size="15" >Produtora: <S.Span cor="#FDCC12" size="15" > Chain Entreteriments</S.Span></S.Span>
                <S.Span size="15" >data compra</S.Span>
                <S.Span size="15" >agendamento</S.Span>
                <S.Span size="15 ">Horarios</S.Span>
              </S.Info>

              <S.CarrinhoItem>
                <S.Span size="15">Backstage</S.Span>
                <S.Span size="15">Total</S.Span>


              </S.CarrinhoItem>


            </S.Carrinho>


            <S.BordarBottom></S.BordarBottom>  <S.Carrinho>
              
              <S.Img></S.Img>





              <S.Info>
                <S.Span size="15" >Titulo</S.Span>
                <S.Span size="15" >Produtora: <S.Span cor="#FDCC12" size="15" > Chain Entreteriments</S.Span></S.Span>
                <S.Span size="15" >data compra</S.Span>
                <S.Span size="15" >agendamento</S.Span>
                <S.Span size="15 ">Horarios</S.Span>
              </S.Info>

              <S.CarrinhoItem>
                <S.Span size="15">Backstage</S.Span>
                <S.Span size="15">Total</S.Span>


              </S.CarrinhoItem>


            </S.Carrinho>


            <S.BordarBottom></S.BordarBottom>  <S.Carrinho>
              
              <S.Img></S.Img>





              <S.Info>
                <S.Span size="15" >Titulo</S.Span>
                <S.Span size="15" >Produtora: <S.Span cor="#FDCC12" size="15" > Chain Entreteriments</S.Span></S.Span>
                <S.Span size="15" >data compra</S.Span>
                <S.Span size="15" >agendamento</S.Span>
                <S.Span size="15 ">Horarios</S.Span>
              </S.Info>

              <S.CarrinhoItem>
                <S.Span size="15">Backstage</S.Span>
                <S.Span size="15">Total</S.Span>


              </S.CarrinhoItem>


            </S.Carrinho>


            <S.BordarBottom></S.BordarBottom>

          </S.AreaCompras>


        }


      </S.Container>
      <Footer />

    </>
  )
  
}

export default MeuPerfil;
