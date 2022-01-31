import styled from "styled-components";

import { SCREEN_SIZES } from "../../utils/screen";

export const Container = styled.div`
  color: #fff;
  font-size: 12px;
  width: 100%;
  padding: 30px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contentUp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media (max-width: ${SCREEN_SIZES.sm}) {
      grid-template-columns: 1fr;
      grid-gap: 50px;
    }

    .contentUpLeft {
      display: flex;
      align-items: center;
      @media (max-width: ${SCREEN_SIZES.sm}) {
        justify-content: center;
      }

      .infos {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;

        div {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }

        span {
          margin-right: 10px;
        }
      }
    }

    .contentUpRight {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .contentDown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    margin-top: 20px;

    @media (max-width: ${SCREEN_SIZES.sm}) {
      grid-template-columns: 1fr;
      grid-gap: 50px;
    }

    .contentDownLeft {
      display: flex;
      align-items: center;

      @media (max-width: ${SCREEN_SIZES.sm}) {
        justify-content: center;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: black;
        padding: 10px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        transition: opacity 0.3s;

        :hover {
          opacity: 0.8;
        }

        span {
          margin-left: 10px;
        }
      }
    }

    .contentDownCenter {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        color: ${({ theme }) => theme.palette.primary.main};
        font-weight: bold;
        font-size: 40px;
      }
    }

    .contentDownRight {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
