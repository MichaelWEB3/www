import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top:100px;
  flex-direction: column;
  color: white;
`


export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`
export const  Sessao = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 400px; 
    margin:10px ;
    padding: 1  0px;

    align-items: center;
 
`

export const  SessaoItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto; 

    align-items: center;
    justify-content: space-around;
`
export const  Dias = styled.div`
  border: 1px solid white;
  color: #E4B810;
  width: 25%;
  height: 100%;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  text-align:center;
`
export const  Horas = styled.div`
  border: 1px solid white;
  color: #E4B810;
  width: 25%;
  height: 100%;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  text-align:center;
`

export const  Minutos = styled.div`
  border: 1px solid white;
  color: #E4B810;
  width:25%;
  height: 100%;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  text-align:center;
`


export const Carrinho = styled.div`
display: flex;
width: 100%;
height: 200px;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const CarrinhoItem = styled.div`
  display: flex;
  height: auto;
  width: 10%;
  
  flex-direction: column;
`

export const Img = styled.img`
width: 150px;
height: 150px;

 padding: 10px;
`
export const X = styled.div`
    display: flex;
    width: 2%;
    height: 150px;
   
`


export const Info = styled.div`
    display: flex;
    flex-direction: column;
   
    width: 30%;
    padding: 10px;
`
export const ButtonContinuar = styled.button`
background-color: #FDCC12;
color: black;
text-transform: uppercase;
width: 100%;
:hover{
    background-color: #FDCC12;
}`


export const BordarBottom = styled.div`
border-bottom: 1px solid white;
width: 60%;
height: 20px;
`

export const AreaCancelar  = styled.div`
display: flex;
justify-content: flex-end;
width: 60%;
padding-bottom:80px;

`