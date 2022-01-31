import styled from 'styled-components';

import faces from '../../../assets/faces.png';

export const Container = styled.div`
  
  .form {
    /* background-color: blue; */
    /* margin: 250px 0 10px 200px; */
    align-items: center;
    margin-top: 260px;

    .spaceCVV {
      display: flex;
      align-items: center;
      /* background-color: red; */
      height: 40px;
      .CVV {
        margin-left: 15px;
        color: #000;
        font-size: 20px;
        width: 30px;
        height: 30px;
        background-color: ${({ theme }) => theme.palette.primary.main};
        border-radius: 50%;
        cursor: pointer;

      }

    }
    .space {
    margin-bottom: 50px;
  } 


    .checkBox {
    display: flex;
    margin-top: 40px;
    /* background-color: red; */


    .credit {
      margin-right: 50px;

      p {
        color: #fff;
        margin-bottom: 10px;
        }
      }
    }    
  }

  .options{
    display: flex;
    height:200px;
    width:100%;
    

    .cancel {
      color: red;
      cursor: pointer;
    }

    .create{
      color: #fff;
      cursor: pointer;
      margin-left:100px;
    }
  }
`;


export const Card = styled.div`
  width: 560px;
  height: 460px;
  background-image: url(${faces});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px 0 0 30px;

  h3 {
    color: #4F4F4F;
  }

  .buttonCard {
    width: 150px;
    height: 40px;                                    
    
  }

  .vantagens {    
    font-size: 20px;
    margin: 20px 0 90px 0;
    line-height: 30px;
    color: #434242;
    
    p {
      display: flex;
      align-items: center;
    }

    svg {
      color: #3D4350;
    }
  }
`;
