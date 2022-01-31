import styled from "styled-components";

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  height: 100%;
  /* width: 100%; */
width: 150%;
display: flex;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
  background-color: ${({ color, theme }) =>
    color ? color : theme.palette.primary.main};
  font-weight: bold;
  font-size: 5pt;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: filter 0.2s;
  outline: none;
  cursor: pointer;
  border: none;
  height: 50px;
padding: 5px;
  @media (max-width: ${SCREEN_SIZES.sm}) {
    width: 12vw;
  }
  

  P{
    text-transform: uppercase;
    margin: auto;
    font-size:15px ;
    color: ${({ textColor }) => (textColor ? textColor : "#000")};

    @media (max-width: ${SCREEN_SIZES.sm}) {
      font-size: 10px;
    }
  }

  &:hover {
    filter: brightness(90%);
  }
`;
