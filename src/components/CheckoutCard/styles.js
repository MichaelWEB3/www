import styled from "styled-components";
import cabaret from "../../assets/cabaret.png";

import { SCREEN_SIZES } from "../../utils/screen";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
  display: flex;
  width: 1350px;
  justify-content: space-around;
  align-items: center;
  padding: 35px;
  flex-direction: column;
  border-bottom: 2px solid gray;

  .no-products{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    height: 280px;
  }

  .ButtonContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    margin-top: 10%;
  }

  .firstButton {
    font-family: "Roboto", sans-serif;
    font-weight: bolder;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${({ theme }) => theme.palette.primary.main};
    outline: none;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  .secondButton {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: none;
    background: transparent;
    outline: none;
    color: #fff;
    cursor: pointer;
  }

  .icon {
    margin-right: 10px;
  }
  .icon2 {
    margin-left: 10px;
  }
`;


export const Element = styled.div`
  display: grid;
  max-width: 1350px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;


  @media (max-width: ${SCREEN_SIZES.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    grid-template-columns: 1fr;
    align-self: center;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;


  .inside{
    display:flex;
    margin-bottom:20px;
    

    .ImageCard {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${cabaret});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 150px;
  }
  .Tikets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  }

 
`;



