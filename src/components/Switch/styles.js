import styled, { css } from "styled-components";

export const Container = styled.div`
  height: ${({ size }) => size / 2}px;
  width: ${({ size }) => size}px;
  border: 1px solid white;
  border-radius: 10px;
  position: relative;

  .circle {
    height: ${({ size }) => size / 2}px;
    width: ${({ size }) => size / 2}px;
    border-radius: ${({ size }) => size / 4}px;
    background-color: white;
    position: absolute;
    top:-1px;

    ${({ opened }) => {
      if (opened) {
        return css`
          animation: on 0.5s forwards;

          @keyframes on {
            0% {
              left: 0;
            }
            100% {
              right: 0;
              background-color: ${({ theme }) => theme.palette.primary.main};
            }
          }
        `;
      } else {
        return css`
          animation: off 0.5s forwards;

          @keyframes off {
            0% {
              right: 0;
            }
            100% {
              left: 0;
            }
          }
        `;
      }
    }}
  }
`;
