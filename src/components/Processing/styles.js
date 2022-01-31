import styled from "styled-components";

// import { SCREEN_SIZES } from "../../utils/screen";

import cabaret from "../../assets/cabaret.png";

import mastercard from "../../assets/mastercard.png";

export const Container = styled.header`
  height: 600px;
  background: linear-gradient(180deg, #22262b 65.62%, #3d4350 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  .Title {
    justify-content: center;
    color: #fff;
  }
  .Img {
    align-self: center;
  }
  .ContainerText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .Text {
    display: flex;
    text-align: center;
    margin-right: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d4350;
  border:1px solid #3d4350;
  border-radius: 8px;
  padding: 15px;

  
  .TicketCard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-left: 30px;

    .ImageCard {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(${cabaret});
      background-size:contain;
      background-repeat: no-repeat;
      background-position: center;
      width:100%;
      height:100%;
    }
  }

  .TextCard {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 30px;
    height: 100%;

    p {
      display: flex;
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5vw;
      line-height: 35px;
      color: #fff;
    }

    strong {
      margin-left: 10px;
      margin-right: 10px;
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 1.3vw ;
      color: #fff;
    }

    .CardIcon {
    background-image: url(${mastercard});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 35px;
  }
  }

 

`;
