import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
  ${({ visible }) => {
    if (visible) {
      return css`
        position: absolute;
        background-color: ${({ theme }) => theme.palette.background.main};
        z-index: 5;
        width: 110px;
        border-radius: 10px;

        button {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          font-size:15px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          background: transparent;
          outline: none;
          color: #fff;
          width: 100%;
          p {
            color: transparent;
          }
        }
      `;
    } else {
      return css`
        position: absolute;
        background-color: ${({ theme }) => theme.palette.background.main};
        opacity: 0.95;
        color: #fff;
        z-index: 5;
        width: 110px;
        height: 300px;
        border-radius: 10px;

        button {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          font-size:15px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          background: transparent;
          outline: none;
          color: #fff;
          width: 100%;
          margin-bottom: 20px;
          p {
            color: transparent;
          }
        }
      `;
    }
  }}
`;

export const FilterItem = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    filter: brightness(70%);
  }
`;

export const TextFilter = styled.p`
  ${({ selected }) => {
    if (selected) {
      return css`
        color: ${({ theme }) => theme.palette.primary.main};
      `;
    } else {
      return css`
        color: #fff;
      `;
    }
  }}
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 12px;
  margin-left: 15px;
`;

export const VerifyCircle = styled.div`
  ${({ selected }) => {
    if (selected) {
      return css`
        background-color: ${({ theme }) => theme.palette.primary.main};
      `;
    } else {
      return css`
        background-color: transparent;
        border: 1px solid #fff;
      `;
    }
  }}

  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-left: 15px;
`;
