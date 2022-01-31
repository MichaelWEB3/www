import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  width: 100%;
  background: #1b1b1b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;


export const AreaPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top:200px ;
  width: 20%;
  height: 900px;
 

  
`

export const TextoLateral = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 150px;

  
`
export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};

    :hover{
        color:#fdcc12;
    }
`

export const SpanLatera = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
    border-radius: 10px;
    padding: 15px;
    color: ${props =>
    props.setadoPerfil === true ? '#FDCC12' : 'white'
  };
     cursor: pointer;
     :hover{
         background-color: #FDCC12;
          color:black;
    }
    
`

export const SpanCompra = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
    font-weight: bold;
    border-radius: 10px;
    padding: 15px;
    color: ${props =>
    props.setadoCompra === false ? '#FDCC12' : 'white'
  };
    :hover{
         background-color: #FDCC12;
          color:black;
    }
    cursor: pointer;
`


export const AreaFotoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 15%;
  height: 200px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
	    display: none;
	  }

  
`

export const Foto = styled.img`
width: 70%;
height: 70%;
border-radius:100%;    
`

export const GrupoInput = styled.div`
 margin: 5px;
  
`
export const SpanInput = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
   
`


export const Input = styled.input`
  width: 100%;
  height: 35px;
  margin: 5px;
  padding: 10px;
  font-size: 13px;
`


export const Button = styled.button`
background-color: #FDCC12;
color: black;
text-transform: uppercase;
font-weight: bold;
width: 80%;
border:none;

:hover{
    background-color: #FDCC12;
}
`

export const A = styled.button`
border: none;
background-color: transparent;
text-decoration :none;
color:white;
:hover{
  color: #FDCC12;
}
`




export const AreaCompras = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: auto;
  margin-top: 100px;
  padding-top: 0px;
`


export const Carrinho = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 

`

export const CarrinhoItem = styled.div`
  display: flex;
  height: auto;
  width: 25%;
  flex-direction: column;
  margin-left: 10%;
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
    width: 100%;
    padding: 10px;
`


export const BordarBottom = styled.div`
  border-bottom: 1px solid white;
  width: 50%;
  height: 20px;
`

export const Space = styled.div`
  position: relatives;
  width: 500px;
  padding-top: 800px;
  height: 600px;
`
