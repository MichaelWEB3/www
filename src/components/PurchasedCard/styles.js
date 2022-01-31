import styled from "styled-components";
import { SCREEN_SIZES } from '../../utils/screen';
import mastercard from "../../assets/mastercard.png";

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items:center;
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  background: #3d4350;
  height: 177px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
		height: 88px;
	}

`

export const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 325px;
  height: 100%;

  @media (max-width: ${SCREEN_SIZES.sm}) {
		width: 162px;
	}

`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3px; 
  margin-left: 8px; 
  padding-right: 20px;
  line-height: 25px;
  font-size:15px;
  color: #FFFFFF;
  height: 100%;

  @media (max-width: ${SCREEN_SIZES.sm}) {
		line-height: 13px;
    font-size: 1.5vw;
    margin-right: 13px;
    margin-top: 10px;
	}

  p{
    /* background-color: red; */
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    
  }

  strong{

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;

  }

  .Payment{
    display: flex;
  }

  


`

export const CardIcon = styled.div`
    background-image: url(${mastercard});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 35px;
    margin-left: 5px;

    @media (max-width: ${SCREEN_SIZES.sm}) {
        width: 35px;
        height: 50%;
    }

    

`

export const ButtonContainer = styled.div`

    display:flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5px;
    margin-top: 5px;
   
    

    .Button{
      display: flex;
      justify-content: center;
      width: 79.06px;
      height: 26px;
      background: #FDCC12;
      border-radius: 2px;
      color: #000000;
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 9.55102px;

      @media (max-width: ${SCREEN_SIZES.sm}) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 10px;
        font-size: 10px;
        margin-bottom: 10px;
        
        
      }
      

      
    }


   

`

export const TicketContainer = styled.div`

  display:flex;
  height: 100%;
  align-items: flex-start;
  padding-top: 15px;
  margin-right: 15px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
		padding-top: 10px;
	}

`


