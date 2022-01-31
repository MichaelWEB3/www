import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';


export const Container = styled.div`
  width: 100%;
  background: #1b1b1b;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
///tudo sobre card



export const Fundo = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
text-transform: uppercase;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImgFundo = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`

export const FunConteudo = styled.div`
    color:white;
    position: absolute;
`

export const ImgLogo = styled.img`
  width: 150px;
  height: 100px;
  margin: 20px;
  @media (max-width: ${SCREEN_SIZES.sm}) {    
    
   display: none;
  }
`

export const linha = styled.img`
  width: 80%;
  height: 10px;
  margin: 5px;
  @media (max-width: ${SCREEN_SIZES.sm}) {    
    
    display: none;
   }  
`

export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "rem"};
  @media (max-width: ${SCREEN_SIZES.sm}) {    
    margin: 0px;
    font-size: 0.5rem;
   
  }
    
`
export const SpanNe = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "rem"};
     font-weight: bold;
     @media (max-width: ${SCREEN_SIZES.sm}) {    
    margin: 0px;
    font-size: 0.5rem;
    text-transform: none;
   
  }
`

export const Button = styled.button`
    background-color: #fdcc12;
    margin: 10px;

    @media (max-width: ${SCREEN_SIZES.sm}) {    
     
   
  }
    
`


export const CardPix = styled.div`
width: 110%;
z-index: 10;
background-color: black;
position: absolute;
display: flex; 
/* box-shadow: 1px 1px 1px white; */
border-radius: 50px;
flex-direction: column;
border: 1px solid;

@media (max-width: ${SCREEN_SIZES.sm}) {    
    
  margin-top: 20vh;
  
}
`



export const CardPixItem = styled.div`
/* box-shadow: 5px 5px 5px white; */
display: flex;
width: 100%;
height: 100%;
background-color: black;
justify-content: ${props=>props.justify};
padding-bottom: 40px;
border-radius: 10px;

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  margin: 10px;
}
`

