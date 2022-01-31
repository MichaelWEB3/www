
import styled from 'styled-components';
import cardinput from '../../assets/cardinput.png';
import { SCREEN_SIZES } from '../../utils/screen';


export const Container = styled.div`
  background-image: url(${cardinput});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 483px;
  height: 319px;
  background-color: #3D4350;
  border-radius: 18.9512px;

  
  

  .Title{
    margin-top: 16px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 13.0573px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FDCC12;
  }

  .InputTop{
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    
    margin-top: 27px;
    

    .Celular{
      margin-left: 29px;
      width: 215px;
      height: 42px;
      padding-left: 10px;
      background: #FFFFFF;
      border-radius: 10.1236px;
      letter-spacing: 0.1em;
      border: none;
      outline: none;
      color: #000;

      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.1em;
      text-transform: lowercase;

     
    }

    .Investidor{
      background: #FFFFFF;
      width: 215px;
      height: 42px;
      padding-left: 10px;
      border-radius: 10.1236px;
      letter-spacing: 0.1em;
      border: none;
      outline: none;
      color: #000;

      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.1em;
      text-transform: lowercase;
    }

    
  }

  .Email{
      width: 462px;
      height: 42px;
      padding-left: 10px;
      margin-top: 10px;
      margin-left: 10px;

      background: #FFFFFF;
      border-radius: 10.1236px;
      letter-spacing: 0.1em;
      border: none;
      outline: none;
      color: #000;

      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.1em;
      text-transform: lowercase;

    }
  
  .Mensagem {
    width: 462px;
    height: 96px;
    padding-left: 10px;
    padding-top: 10px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 10.1236px;
    border: none;
    outline: none;
    color: #000;

    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    
    letter-spacing: 0.1em;
    text-transform: lowercase;

    

    ::placeholder{
      
    }


  }

  .Button{
    margin-top: 14px;
   margin-left: 200px;
    width: 80.95px;
    height: 32.92px;
    left: 619px;
    top: 1137px;

    background: #FDCC12;
    border-radius: 3.35871px;
    border: none;
    outline: none;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
    text-align: center;

    color: #000000;
    cursor: pointer;
    &:hover {
    filter: brightness(90%);
    } 
  }
`;
