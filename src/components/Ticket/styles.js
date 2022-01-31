import styled, { css } from "styled-components";

import ticket from "../../assets/ticket1.png";
import ticket2 from "../../assets/ticket2-backstage.png";

export const Container = styled.div`
  height: ${({ size }) => size * 3.7}px;
  width: ${({ size }) => size * 7.1}px;
  position: relative;
`;

export const ContainerGold = styled.div`
  height: ${({ size }) => size * 2.5}px;
  width: ${({ size }) => size * 7.1}px;
  position: relative;
`;

export const TicketBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: url(${ticket});
  background-size: contain;
  background-repeat: no-repeat;
  color: black;

  h1 {
    ${({ size }) => {
      if (size <= 25) {
        return css`
          position: absolute;
          color: black;
          font-size: ${({ size }) => size * 0.55}px;
          top: 10%;
          left: 30%;
        `;
      } else {
        return css`
          position: absolute;
          color: black;
          font-size: ${({ size }) => size * 0.5}px;
          top: 10%;
          left: 40%;
        `;
      }
    }}
  }

  h3 {
    ${({ size }) => {
      if (size <= 25) {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.4}px;
          top: 28%;
          left: 30%;
        `;
      } else {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.3}px;
          top: 28%;
          left: 40%;
        `;
      }
    }}
  }

  .price {
    font-weight: bold;

    ${({ size }) => {
      if (size <= 25) {
        return css`
          position: absolute;
          top: 60%;
          left: 35%;
          font-size: ${({ size }) => size * 0.6}px;
        `;
      } else {
        return css`
          position: absolute;
          transform: rotate(-90deg);
          top:30%;
          left: 2%;
          font-size: ${({ size }) => size * 0.4}px;
        `;
      }
    }}
  }

  .boxAge {
    ${({ size }) => {
      if (size <= 25) {
        return css`
          position: absolute;
          height: ${({ size }) => size * 0.8}px;
          width: ${({ size }) => size * 0.8}px;
          font-size: ${({ size }) => size * 0.45}px;
          font-weight: bold;
          color: white;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 65%;
          left: 10%;
        `;
      } else {
        return css`
          position: absolute;
          height: ${({ size }) => size * 0.5}px;
          width: ${({ size }) => size * 0.5}px;
          font-size: ${({ size }) => size * 0.3}px;
          font-weight: bold;
          color: white;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 65%;
          left: 10%;
        `;
      }
    }}
  }

  .question {
    font-weight: bold;
    ${({ size }) => {
      if (size <= 25) {
        return css`
          display: none;
        `;
      } else {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.3}px;
          top: 60%;
          left: 40%;
        `;
      }
    }}
  }

  .date {
    ${({ size }) => {
      if (size <= 25) {
        return css`
          display: none;
        `;
      } else {
        return css`
          top: 75%;
          left: 40%;
          position: absolute;
          font-size: ${({ size }) => size * 0.3}px;
        `;
      }
    }}
  }

  .time {
    ${({ size }) => {
      if (size <= 25) {
        return css`
          display: none;
        `;
      } else {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.3}px;
          top:  75%;;
          left: 64%;
        `;
      }
    }}
  }
`;

export const TicketBackground2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(${ticket2});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  color: black;

  h1 {
    color: black;

    ${({ size }) => {
      if (size > 20 && size <= 30) {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.35}px;
          top: 20%;
          left: 35%;
        `;
      } else if (size <= 20) {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.4}px;
          top: 23%;
          left: 35%;
          color: black;
        `;
      } else {
        return css`
          position: absolute;
          font-size: ${({ size }) => size * 0.35}px;
          top: 20%;
          left: 35%;
        `;
      }
    }}
  }

  .subTitle {
    color: black;

    ${({ size }) => {
      if (size > 20 && size <= 30) {
        return css`
          top: 45%;
          left: 20%;
          font-size: ${({ size }) => size * 0.26}px;
          position: absolute;
        `;
      } else if (size <= 20) {
        return css`
          display: none;
        `;
      } else {
        return css`
           top: 45%;
          left: 20%;
          font-size: ${({ size }) => size * 0.24}px;
          position: absolute;
        `;
      }
    }}
  }

  .price {
    position: absolute;
    color: black;
    font-weight: bold;

    ${({ size }) => {
      if (size > 20 && size <= 30) {
        return css`
          top: 65%;
          left: 40%;
          font-size: ${({ size }) => size * 0.3}px;
        `;
      } else if (size <= 20) {
        return css`
          top: 55%;
          left: 40%;
          font-size: ${({ size }) => size * 0.4}px;
        `;
      } else {
        return css`
          top: 65%;
          left: 40%;
          font-size: ${({ size }) => size * 0.3}px;
        `;
      }
    }}
  }
`;
