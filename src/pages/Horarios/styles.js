import styled from 'styled-components';

import { SCREEN_SIZES } from "../../utils/screen";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  margin-bottom: 50px;
 
`


export const cardZinho = styled.div`

  background: #1b1b1b;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

 

`

export const cardzinhoItem = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    display: none
  }
 
`

export const cardzinhoItemSobre = styled.div`
  display: flex;
  flex-direction: column;
  
 
`

export const Horarios = styled.div`
  width: 80%;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 90px);


  & > div > h2{
    font-size: 1.5rem;
    font-weight: 600;
    align-self: flex-start;
    margin-left: 130px;
  }
  

  @media (max-width: ${SCREEN_SIZES.sm}) {
    width: 100%;
  }


`

export const Thumbnail = styled.img`
  width: 40%;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250;
`


export const Span = styled.span`
    color: ${props => props.cor  || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`

export const CardFilmeTitle = styled.span`
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;
`

export const CardFilmeSubTitle = styled.span`
    color: #FFF;
    font-size: .7rem;
`
export const Text = styled.span`
    color: #FFF;
    font-size: .8rem;
`
export const CardFilmeValue = styled.span`
    color: #FDCC12;
    font-size: .9rem;
    font-weight: 500;
`
export const DataText = styled.span`
    color: #FFF;
    font-size: 1.2rem;
`

export const DataSub = styled.span`
    color: #FFF;
    font-size: .8rem;
`
export const CardFilmeData = styled.div`
    display: flex;
    width: 100%;
    gap: 5px;
`

export const Card = styled.div`
  width:100px;
  height: 250px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    width:100vw;
    height: 300px;
  }
`


export const Img = styled.img`
  width: 400px;
  height: 400px;
  box-shadow: 5px 5px 5px  5px rgba(0,0,0,0.2);
`

export const data = styled.div`
 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  position: absolute;
  background-color: black;
  border-top-left-radius:9px;
  border-top-right-radius:9px;
  height: 25%;
`

export const dia = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30%;
  position: absolute;
`

export const ButtonContinuar = styled.button`
background-color: #FDCC12;
color: black;
font-weight:bolder;
text-transform: uppercase;
margin: 0 !important;
:hover{
    background-color: #FDCC12;
}
`

  export const Buttons = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #1b1b1b;
  `

export const HorarioScroll = styled.div`
  overflow-y: scroll;
  height: 180px;
  display: flex;
  padding-top: 85px;
  padding-bottom: 30px;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    width: 98%;
  }
`;

export const Button = styled.button`

`