import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #343434;
  border-radius: 10px;
  
`


export const Form = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  margin-top: 54px;
  /* width: 406px;
  height: 306px; */
  

  .Producer{
    
    display: flex;
    flex-direction: column;
    
    width: 406px;
    height: 40px;
    
    margin-bottom: 9px;
    background: #343434;

    padding: 10px;
   

    /* Branco */

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;

    /* Corpo */

    font-family: Spinnaker;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;

    /* Branco */

    color: #FFFFFF;

    ::placeholder{
      padding-left: 16px;
    }

      }

  .Story {
    
    display: flex;
    flex-direction: column;
    padding: 10px;
    
    width: 406px;
    height: 124px;
    
    margin-bottom: 9px;
    background: #343434;
   

    /* Branco */

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;

    /* Corpo */

    font-family: Spinnaker;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;

    /* Branco */

    color: #FFFFFF;

    ::placeholder{
      padding-top: 12px;
      padding-left: 16px;
    }

      }
 
  .foundedBy{
    display: flex;
    flex-direction: row;
   
    
    
    .Founded{
      width: 234px;
      height: 40px;
      padding: 10px;

      /* Branco */

      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 5px;

      /* Corpo */

      font-family: Spinnaker;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.1em;

      /* Branco */

      color: #FFFFFF;
      background: #343434;

      ::placeholder{
        padding-left: 16px;
      }
    }

    .By{

      width: 163px;
      height: 40px;
      margin-left: 9px;
      padding: 10px;

      /* Branco */

      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: 5px;

      /* Corpo */

      font-family: Spinnaker;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.1em;

      /* Branco */

      color: #FFFFFF;
      background: #343434;

      ::placeholder{
        padding-left: 16px;
      }
    }

    

  }

  .goalContainer{
    display: flex;
    flex-direction: column;
  }

  .goalText{
    margin-top: 16px;
    margin-bottom: 12px;
    margin-left: 18px;

    /* Título Pequeno */

    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.1em;
    text-transform: lowercase;

    /* Branco */

    color: #FFFFFF;
    
  }

  .Goal{
    width: 340px;
    height: 40px;
    margin-bottom: 9px;
    padding: 10px;

    /* Branco */

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    background: #343434;

    /* Corpo */

    font-family: Spinnaker;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;

    /* Branco */

    color: #FFFFFF;

    ::placeholder{
        padding-left: 16px;
      }

  }

  .Map{
    display: flex;
    flex-direction: column;
  }

  .addItem{
    display: flex;
  }

  .Button{
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    width: 40px;
    height: 40px;
    margin-left: 28px;
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;

    /* Amarelo */

    background: #FDCC12;

  }

  .Remove{
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    width: 40px;
    height: 40px;
    margin-left: 28px;
    border-radius: 50%;
    font-size: 25px;
    

    /* Amarelo */

    background: #FDCC12;

  }

  .Finish{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 168px;
    height: 49px;
    margin-top: 68px;
    margin-left: 130px;
    margin-bottom: 35px;
    outline: none;
    border: none;

    background: #FDCC12;
    border-radius: 5px;

    /* Botão Grande */

    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;

    color: #000000;

    .Icon{
      margin-left: 12px;


    }
  }
  
`