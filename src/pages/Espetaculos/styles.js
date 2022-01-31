import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top:100px;
  flex-direction: column;
  color: white;
`;




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


`
export const X = styled.div`
    display: flex;
    width: 2%;
    height: 150px;
   
`

export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
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


export const InfoCard = styled.div`
position: fixed;
width: 250px;
height: 400px;
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.5) ;
opacity: 0;
:hover{
 opacity: 1;
}
`

export const InfoCardConteudo = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  
`

export const Classificacao = styled.span`
width: 25px;
height: 20px;
background-color: white;
color:black;
padding: 0px;
border-radius: 5px;
margin:5px;
font-size: 12px;

text-align: center;
justify-content: center;
align-items: center;
`

export const Coracao = styled.span`
width: 30px;
height: 30px;

border-radius: 10px;
margin:5px;
:hover{
 color: #FDCC12;
}
`
export const Compartilhar = styled.span`
width: 30px;
height: 30px;

border-radius: 10px;
margin:5px;
:hover{
  color: #FDCC12;
}
`

export const Titulo = styled.span`
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
font-size: 23px;
`



export const ConteudoCard = styled.span`
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
`



export const Sinopsia = styled.span`
  margin:10px;
  font-size: 15px;
  overflow: hidden;
  height: 113px;
`


export const ButtonAcessar = styled.button`
 margin: auto;
color: white;
font-size: 15px;
width: 150px;
text-transform: uppercase;
font-weight: bold;
:hover{
  background-color: white;
  color: black;
  border-color: white;

}
`

export const CardTest = styled.div`

 width:250px;
 height: 400px;
color: white;


`

export const SobrePosto = styled.div`
position: relative;
width: 250px;
height: 400px;
display: flex;

background-color: rgba(0, 0, 0, 1) ;
z-index: 1;
`



export const CardCanais = styled.div`
 width:250px;
 height: 250px;
  background-image: url(${props => props.urlimg});
  background-color: white;
  
  justify-content: center;
  align-items: center;
  border-radius: 50%;
   margin: 40px;
`

export const A = styled.button`
text-decoration :none;
color:black;
:hover{
  color: black;
}
`