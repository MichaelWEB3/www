import styled from 'styled-components';

import {SCREEN_SIZES } from '../../utils/screen';

import ticket from '../../assets/ticket1.png';
import ticket2 from '../../assets/ticket2-backstage.png';

export const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  position: relative;
  padding-bottom:25px;

  .reactplayer{
    display: flex;
    justify-content:center;
    align-items:center;
  }

  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 30px;
    cursor: pointer;   


  .modeAdmin {
    display: flex;
    align-items: center;
    color: #fff;

    &:hover {
      color: ${({theme}) => theme.palette.primary.main};
    }

    p {
      font-size: 18px;
    }

    svg {
      margin-left: 5px;
      font-size: 20px;
      }
    }
  }

  @media(max-width: 767px) {
    height: 200px;
  }
`;

export const Transition = styled.div`
  width: 40%;
  height: 100%;
  position: absolute;
  right: 28%;
  background-image: linear-gradient(to right, rgba(255,0,0,0) 60%, rgba(0,0,0, 1));
  
  
  @media(max-width: ${SCREEN_SIZES.sm}) {
    right: 28%; 
  }
  @media(max-width: ${SCREEN_SIZES.md}) {
    right: 34%; 
  }

  @media(max-width: 768px) {
    right: 35%;
  }
`;

export const ContentShow = styled.div`
  width: 30%;
  height: 100%;
  color: white;
  display: flex;
  /* justify-content: center;
  align-items:center; */
  flex-direction: column; 


  .vermais{
    font-size: 10px;
    color: ${({theme})=> theme.palette.primary.main};
    cursor: pointer;
    transform: opacity 0.3s;
    margin-left: 2px;

    :hover{
      opacity: 0.8;
    }
  }
  

  h2, h3{
    margin: 10px 0 0 20px;
    line-height: 20px;
    text-align: left;
  }

  h2 {
    font-weight: bold;
  }

  .subTitle {
    line-height: 1;
    margin: 20px 0 20px 20px;
    width: 250px;
    text-align: inherit;
    font-size: 14px;
  }

  span p {
    width: 250px;
    margin: 20px 0 20px 20px;
    line-height: 20px;
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    text-align: initial;
    font-size: 14px;
  }

  @media(max-width: 767px) {
    span p {
      display: none;
    }

    h2 {
      font-size: 14px;
      line-height: 0.2
    }

    h3 {
      font-size: 10px;
    }

    .subTitle {
      font-size: 8px;
      width: 60%;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;  
  margin-top: 18px;

  button {
    width: 220px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    &:last-child{
      margin-bottom: 0;
    }

    svg {
      color: #000;
      font-size: 27px;
      margin-right: 3px;
    }    
  }

  .button-BackStage{
      margin: 50px 0 15px 40px;
    }

  @media(max-width: 767px){
    button {
    width: 70%;
    height: 49px;
    background: #FDCC12;
    font-size: 10px;
    line-height: 1.1;
    padding-right: 5px;
    }

    svg {
      color: #000;
      font-size: 25px;
      margin-right: 5px;
      margin-left: 5px;
    }

    .button-BackStage{
      margin: 0 0 15px 20px;
    }

    .icon {
      font-size: 25px;
    }

    
  }
`

export const TicketBackground = styled.div`
  background-image: url(${ticket});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  align-items: center;

  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 100px;
    height: 50px;
  }
`;

export const TicketBackground2 = styled.div`
  background-image: url(${ticket2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 100px;
    height: 50px;
  }
`;



export const ContentTicket = styled.div`
  width: 81%;
  height: 90%;

  .header{
    line-height: 0.6;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 10px 10px 0 0;
  }

  .price {
    font-weight: bold;
    transform: rotate(-90deg);
    background-color: red;
    font-size: 18px;
  }

  .boxAge {
    width: 20px;
    height: 20px;
    color: white;
    background-color: black;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 12px;
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 10px 10px 0;
    font-weight: bold;

  }

  .dataAndTime {
    display: flex;
    justify-content: flex-end;
    margin-right: 8px;
  }

  .dataAndTime input {
    border-radius: 5px;
    margin: 3px;
    border-color: black;
    height: 30px;
    box-sizing: none;
    border: 1px solid;

  }
`;

export const ContentTicketBackStage = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;

  h1 {
    line-height: 0;
    margin: 20px 0 10px 0;
  }

  .subTitle {
      line-height: 0;
      font-weight: bold;
      border: none;
      margin-bottom: 25px;
  }

  .price {
    font-weight: bold;
    line-height: 0;
  }
  
`;

export const Ticket = styled.div`
  width: 360px;
  height: 179px;
  margin-bottom: 10px;
  /* background-color: blue; */
  display: flex;

  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 100px;
    height: 50px;
    margin-top: 10px;
  }  
`;



export const TicketTwo = styled.div`
  width: 360px;
  height: 120px;
  display: flex;
  /* padding-left: 5px; */

  img{
    width: 360px;
    height: 120px;
    border: 0;
    box-sizing: none;
  }
  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 95%;
    height: auto;

    img{
      width: 100px;
      height: 50px ;
    }
  }
`;



export const MarketIcon = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-left: 8px;

  svg {
      margin-top: 10px;
      color: #fff;
      font-size: 25px;
      /* margin-right: 5px;
      margin-left: 5px; */
    }

    @media(max-width: ${SCREEN_SIZES.sm}) {
      margin: 0;
      svg{
        font-size: 15px;
        margin-top: 8px;
      }
    }
`;