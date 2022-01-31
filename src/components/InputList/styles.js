import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`

  

  .input{
    width: ${({ width }) => width}px;
    height: 40px;
    padding-left: 16px;
    margin-bottom: 9px;

    /* Branco */

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    background-color:  ${({ color }) => color};

    /* Corpo */

    font-family: Spinnaker;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;

    /* Branco */

    color: #FFFFFF;
  }

  .addItem{
    display: flex;
    flex-direction: row;
  }

  .add{
    width: 40px;
    height: 40px;
    margin-left: 28px;
    outline: none;
    border: none;
    border-radius: 50%;
    font-size: 25px;

    /* Amarelo */

    background: ${({ theme }) => theme.palette.primary.main};

  }

  .remove{
    width: 40px;
    height: 40px;
    margin-left: 28px;
    outline: none;
    border: none;
    border-radius: 50%;
    font-size: 25px;
    

    /* Amarelo */

    background: ${({ theme }) => theme.palette.primary.dark};

  }
  

`