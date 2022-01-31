import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';


export const Container = styled.div`
  width: 100%;
  background: #1b1b1b;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
///tudo sobre card


export const CardTest = styled.div`

  width: 250px;
  height: 450px;
  color: white;

 


`

export const ContainerArraste = styled.div`

  margin-top: -100px;
  margin-left: 15px;
  z-index: 50;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: blinker 2.5s linear 5;


  @keyframes blinker {
    50% {
      opacity: 1;
    }
  }

  p {
    font-weight: bold;
    font-size: 20px;
  }

  @media (min-width: ${SCREEN_SIZES.sm}) {    
    
    display: none;

  }

`;

export const ArrasteImg = styled.img`

  width: 50px;
  height: 50px;

  

  @media (min-width: ${SCREEN_SIZES.sm}) {    
    
    display: none;

  }

`;

export const ItemTest = styled.div`
  width: 250px;
  height: 400px;
  background-image: url(${props => props.urlimg});
  background-color: blue;

  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
 
`



export const CardeZao = styled.div`

background-color: black;
display: flex;
position: absolute;
z-index: 9;
flex-direction: row;
color: white;
box-shadow: 5px 5px 5px  5px rgba(0,0,0,0.2);

width: 100%;
height: 800px;
`

export const CardeZaoConteudo = styled.div`
display: flex;
flex-direction: column;
 justify-content: space-between;

 align-items: center;

`
export const CardeZaoInformacos = styled.div`
display: flex;
flex-direction: column;
 justify-content: space-around;


`
export const Img = styled.img`
  
  width: 250px;
  height: 400px;
  box-shadow: 5px 5px 5px  5px rgba(0,0,0,0.2);

  @media (max-width: ${SCREEN_SIZES.sm}) {    
    
    width: 250px;
    height: 400px;
  }
`

export const BtnVermelho = styled.button`

  width: 50px;
  height: 50px;
  position: relative;
  top:-325px;

`



export const BtnVerde = styled.a`
align-items: center;
margin: auto;

`
export const P = styled.p`

`
export const InfoCard = styled.div`
position: fixed;
width: 250px;
height: 400px;
display: flex;
flex-direction: column;
padding: 15px;
@media (max-width: ${SCREEN_SIZES.sm}) {
    
  width: 250px;
    height: 400px;
}
background-color: rgba(0, 0, 0, 0.8) ;
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
cursor: pointer;
border-radius: 10px;
margin:5px;
:hover{
 color: #FDCC12;
}
`
export const Compartilhar = styled.span`
width: 30px;
height: 30px;
cursor: pointer;
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
  font-size: 18px;
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
color: black;
font-size: 15px;
width: 150px;
text-transform: uppercase;
font-weight: bold;
margin-bottom: 15px;
:hover{
  background-color: white;
  color: black;
  border-color: white;

}
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