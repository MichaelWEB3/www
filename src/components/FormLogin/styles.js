import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input{
      width: 100%;
      padding: 10px;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 5px;
      color: #fff;
      outline: none;
      margin-bottom: 13px;

      ::-webkit-input-placeholder {
        color: #fff;
      }
    }

    button {
    width: 209px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;
    margin-top: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      color: #000;
      font-size: 27px;
      margin-right: 3px;
    }
  }
`;
