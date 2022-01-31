import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 1.2vw;
  .firstSection {
    display: flex;
    width: 30%;
    height: 20%;
    margin-top: 20px;
    .roundContent {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
  }
  .secondSection {
    display: flex;
    width: 45%;
    height: 200px;
    margin-top: 80px;
    position: relative;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50%;

      .Produtora {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 40%;
        animation: fadeIn1 0.8s ease-in-out;
        position: absolute;
        top: -10%;
        left: 0;

        @keyframes fadeIn1 {
          0% {
            opacity: 0;
            top: -60%;
            left: 50%;
            height: auto;
            width: 0%;
          }
          100% {
            opacity: 1;
            top: -10%;
            height: auto;
            width: 40%;
          }
        }
      }
      .Investidor {
        height: auto;
        width: 40%;
        animation: fadeIn2 0.8s ease-in-out;
        position: absolute;
        top: -10%;
        left: 0;
        @keyframes fadeIn2 {
          0% {
            opacity: 0;
            top: -60%;
            left: 50%;
            height: auto;
            width: 0%;
          }
          100% {
            opacity: 1;
            top: -10%;
            height: auto;
            width: 40%;
          }
        }
      }
      .Artista {
        height: auto;
        width: 40%;
        animation: fadeIn3 0.8s ease-in-out;
        position: absolute;
        top: -10%;
        left: 0;
        @keyframes fadeIn3 {
          0% {
            opacity: 0;
            top: -60%;
            left: 50%;
            height: auto;
            width: 0%;
          }
          100% {
            opacity: 1;
            top: -10%;
            height: auto;
            width: 40%;
          }
        }
      }
      .Telespectador {
        height: auto;
        width: 40%;
        animation: fadeIn4 0.8s ease-in-out;
        position: absolute;
        top: -10%;
        left: 0;
        @keyframes fadeIn4 {
          0% {
            opacity: 0;
            top: -60%;
            left: 50%;
            height: auto;
            width: 0%;
          }
          100% {
            opacity: 1;
            top: -10%;
            height: auto;
            width: 40%;
          }
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      strong {
        color: ${({ theme }) => theme.palette.primary.main};
        margin-bottom: 10px;
      }
    }
  }
`;
export const Img = styled.img`
  height: auto;
  width: 80%;
  animation: fadeIn0 0.5s ease-in-out;
  @keyframes fadeIn0 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const Img2 = styled.div`
  height: auto;
  width: 80%;
  animation: fadeIn0 0.5s ease-in-out;
  @keyframes fadeIn0 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
