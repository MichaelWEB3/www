import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;

  .first {
    display: grid;
    grid-template-rows: 1fr 2fr;

    .up {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .upleft {
        display: flex;
        flex-direction: column;
        padding: 20px;

        .live {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          color: #fff;
        }

        .circle {
          height: 10px;
          width: 10px;
          border: 1px solid black;
          border-radius: 5px;
          margin-right: 10px;
          background-color: ${({ circlecolor }) => circlecolor};
        }
      }

      .upright {
        display: flex;
        flex-direction: column;
        padding: 20px;
        color: #fff;

        .icons {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          width: 10%;
        }
        .help {
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
    .down {
      padding: 20px;
      display: flex;
      flex-direction: column;
      color: #fff;
      height: 100%;

      .selector {
        display: flex;
        width: 30%;
        height: 10%;
        justify-content: space-between;
        align-items: center;
      }

      .downContent {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 20px;

        .stats{
          display: flex; 
          width:100%;
          justify-content:space-around;  
        }

        .inputsconfig {
          display: grid;
          height: 100%;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-gap: 20px;

          .inputs {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;

            .roundItem {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 40%;
            }

            .switch {
              display: flex;
              justify-content: space-between;
              cursor: pointer;
            }

            .selectionBox {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              border: 1px solid #fff;
              padding: 5px;
              border-radius: 5px;
              cursor: pointer;
            }

            .inputBox {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              padding: 5px;

              .inputPoint {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 0.2px solid #fff;
                width: 100%;
                padding-bottom: 5px;
                margin-bottom: 5px;

                span {
                  width: 85%;
                  color: #fff;
                }
              }

              p {
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }

  .second {
    display: flex;
    flex-direction: column;
    padding: 10%;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #515151;
      color: #fff;
      height: 10%;
    }
  }
`;

export const RoundIndicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  border: 1px solid white;
  margin-right: 10px;

  ${({ latency }) => {
    if (latency) {
      return css`
        background-color: ${({ theme }) => theme.palette.primary.main};
      `;
    }
  }}
`;

export const ItemSelector = styled.span`
  padding: 5px;
  ${({ line }) => {
    if (line) {
      return css`
        border-bottom: 1px solid ${({theme})=> theme.palette.primary.main } ;
      `;
    }
  }}
`;
