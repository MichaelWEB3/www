import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/screen";


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  height: ${props => props.noItem ? '100vh': 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  padding: 40px;

  @media (max-width: ${SCREEN_SIZES.md}) {
    max-width: 1000px;
  }
  
  @media (max-width: ${SCREEN_SIZES.sm}) {
    max-width: 680px;
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  span{
    font-weight: bold;
    font-size: 2rem;
    color:  #FFF;
  }
`;
//wrapper da lista de ingressos
export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

//Linha de dentro do CartContainer
export const CartLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: solid 1px #ddd;
`;

//
export const CartFilme = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`

export const CartFilmeInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`

export const CardFilmeTitle = styled.span`
    color: #FFF;
    font-size: 1.2rem;
    font-weight: 600;
`

export const CardFilmeSubTitle = styled.span`
    color: #FFF;
    font-size: .9rem;
`
export const Text = styled.span`
    color: #FFF;
    font-size: 1rem;
`
export const CardFilmeValue = styled.span`
    color: #FDCC12;
    font-size: 1.2rem;
    font-weight: 600;
    align-self: flex-end;
    justify-self: flex-end;
`

export const CardFilmeValueHor = styled.span`
    color: #FDCC12;
    font-size: 1.5rem;
    font-weight: 500;
    justify-self: flex-end;
    cursor: pointer;
`

export const CartTotalContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  span{
    font-size: 1rem;
    text-transform: uppercase;
    color:  #FDCC12;
    align-self: flex-end;
  }
`;


export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  span{
    display: flex;
    max-width: 300px;
    width: 100%;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    color:  #FFF;
    text-align: justify;
  }
`;

export const CartInfoText = styled.p`
    display: flex;
    font-size: .8rem;
    max-width: 500px;
    width: 100%;
    text-transform: uppercase;
    color:  #FFF;
    text-align: justify;
`;


export const CartActionsPlains = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

export const ButtonPlanos = styled.button`
    background-color: #FDCC12;
    color: black;
    text-transform: uppercase;
    width: 150px;
    height: 50px;
    transition: all .3s;
    border: none;
    margin: 0 !important;
    border-radius: 5px;
    &:hover{
        background-color: #d7ac02;
    }
`


export const ButtonPagar = styled(ButtonPlanos)`
    width: 120px;
    font-weight:bolder;
`


export const ButtonVoltar = styled.button`
    text-transform: uppercase;
    font-size: 1rem;
    border: none;
    color:  #FFF !important;
    transition: all .3s;
    background: transparent !important;
    &:hover{
        color: #d7ac02;
    }
`



export const Img = styled.img`
  width: 125px;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: center;
  height: 220px;
`
export const X = styled.div`
font-size: 1.8rem;
color:white;
cursor: pointer;

   
`

export const Cart = styled.div`
font-size: 3rem;
color:white;
cursor: pointer;
margin-right: 10px;
text-align: center;

   
`

export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`