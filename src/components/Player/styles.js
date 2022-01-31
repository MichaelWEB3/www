import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  position: relative;

  .reactPlayer {
  }

  .logoChannel {
    display: flex;
    position: absolute;
    left: 2%;
    top: 5%;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-image: url(${({ img }) => img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    transition: opacity 0.3s;

    :hover {
      opacity: 0.8;
    }

    ${({ mouse }) => {
      if (mouse) {
        return css`
          animation: fadeIn 0.5s ease-in-out;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `;
      }

      // if (!mouse) {
      //   return css`
      //     animation: fadeOut 0.5s ease-in-out;
      //     @keyframes fadeOut {
      //       0% {
      //         opacity: 1;
      //       }
      //       100% {
      //         opacity: 0;
      //         display: none;
      //       }
      //     }
      //   `;
      // }
    }}
  }

  .titleContent {
    display: flex;
    position: absolute;
    flex-direction: column;
    right: 2%;
    top: 5%;
    color: #fff;

    ${({ mouse }) => {
      if (mouse) {
        return css`
          animation: fadeIn 0.5s ease-in-out;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `;
      }

      // if (!mouse) {
      //   return css`
      //     animation: fadeOut 0.5s ease-in-out;
      //     @keyframes fadeOut {
      //       0% {
      //         opacity: 1;
      //       }
      //       100% {
      //         opacity: 0;
      //         display: none;
      //       }
      //     }
      //   `;
      // }
    }}

    span {
      background-color: #fff;
      color: black;
      font-size: 12px;
      padding: 1px;
      margin-left: 10px;
      font-weight: bold;
    }

    .Tiket {
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: flex-end;
      margin-top: 8px;
      cursor: pointer;

      transition: opacity 0.3s;

      :hover {
        opacity: 0.8;
      }
    }
  }

  .iconChat {
    display: flex;
    position: absolute;
    right: 2%;
    top: 50%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    padding: 8px;
    border-radius: 2px;

    cursor: pointer;

    transition: opacity 0.3s;

    :hover {
      opacity: 0.8;
    }

    ${({ mouse }) => {
      if (mouse) {
        return css`
          animation: fadeIn 0.5s ease-in-out;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `;
      }

      // if (!mouse) {
      //   return css`
      //     animation: fadeOut 0.5s ease-in-out;
      //     @keyframes fadeOut {
      //       0% {
      //         opacity: 1;
      //       }
      //       100% {
      //         opacity: 0;
      //         display: none;
      //       }
      //     }
      //   `;
      // }
    }}
  }

  .buttonLiveContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 2%;
    top: 80%;

    cursor: pointer;

    transition: opacity 0.3s;

    :hover {
      opacity: 0.8;
    }

    .textLive {
      font-size: 12px;
      color: #fff;
      margin-bottom: 5px;
    }

    .buttonLive {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: bold;
      background-color: ${({ theme }) => theme.palette.primary.main};
      padding: 8px;
      border-radius: 2px;
      cursor: pointer;

      .liveIcon {
        margin-right: 10px;
      }
    }

    ${({ mouse }) => {
      if (mouse) {
        return css`
          animation: fadeIn 0.5s ease-in-out;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `;
      }

      // if (!mouse) {
      //   return css`
      //     animation: fadeOut 0.5s ease-in-out;
      //     @keyframes fadeOut {
      //       0% {
      //         opacity: 1;
      //       }
      //       100% {
      //         opacity: 0;
      //         display: none;
      //       }
      //     }
      //   `;
      // }
    }}
  }

  .giftSectionContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 10%;

    ${({ mouse }) => {
      if (mouse) {
        return css`
          animation: fadeIn 0.5s ease-in-out;
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `;
      }

      // if (!mouse) {
      //   return css`
      //     animation: fadeOut 0.5s ease-in-out;
      //     @keyframes fadeOut {
      //       0% {
      //         opacity: 1;
      //       }
      //       100% {
      //         opacity: 0;
      //         display: none;
      //       }
      //     }
      //   `;
      // }
    }}

    .textGift {
      color: white;
      margin-right: 12px;
      font-weight: lighter;
      font-size: 15px;
    }

    .plusButton {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.palette.primary.main};
      margin-left: 1%;
      border-radius: 2px;
      padding: 3px;
    }

    .giftSection {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-column-gap: 10px;

      p {
        background-image: url(${({ img }) => img});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 100px;
        width: 100px;
      }
    }
  }

  .sideContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(270deg, black 95%, transparent 100%);
    height: 100%;
    width: 30%;
    position: absolute;
    right: 0px;
    z-index: 3;
    padding: 25px;
    font-size: 12px;
    font-family: "Ubuntu", sans-serif;

  
    }

    .topIconsChat {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 5%;
      width: 100%;
      color: #fff;

      cursor: pointer;

      transition: opacity 0.3s;

      :hover {
        opacity: 0.8;
      }

      .boxAge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        background-color: white;
        font-size: 13px;
        border-radius: 2px;
        color: black;
      }
    }

    .chat {
      height: 80%;
      width: 100%;

      display: flex;
    }

    .chatBottom {
      width: 100%;
      height: 15%;
      display: flex;
      align-items: center;
      justify-content: center;

      .donation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        line-height: 25px;
        width: 100%;

        span {
          font-weight: bold;
          font-size: 18px;
          color: ${({ theme }) => theme.palette.primary.main};
          cursor: pointer;
          padding: 5px;
        }
      }

      .buttonLiveChat {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        transition: opacity 0.3s;

        :hover {
          opacity: 0.8;
        }

        .textLive {
          font-size: 12px;
          color: #fff;
          margin-bottom: 5px;
        }

        .buttonLive {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
          background-color: ${({ theme }) => theme.palette.primary.main};
          padding: 8px;
          border-radius: 2px;
          cursor: pointer;

          .liveIcon {
            margin-right: 10px;
          }
        }

        ${({ mouse }) => {
          if (mouse) {
            return css`
              animation: fadeIn 0.5s ease-in-out;
              @keyframes fadeIn {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
            `;
          }

          // if (!mouse) {
          //   return css`
          //     animation: fadeOut 0.5s ease-in-out;
          //     @keyframes fadeOut {
          //       0% {
          //         opacity: 1;
          //       }
          //       100% {
          //         opacity: 0;
          //         display: none;
          //       }
          //     }
          //   `;
          // }
        }}
      }
    }

    .topIcons {
      display: flex;
      align-items: center;
      height: 5%;
      width: 100%;

      .left {
        display: flex;
        width: 25%;
        justify-content: space-around;

        .icons-set{
          cursor: pointer;

          transition: opacity 0.3s;

          :hover{
            opacity:0.8;
          }
        }

        

        .boxAge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          background-color: white;
          font-size: 13px;
          border-radius: 2px;
        }
      }
      .right {
        display: flex;
        width: 75%;
        justify-content: flex-end;

        .iconBox {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${({ theme }) => theme.palette.primary.main};
          padding: 5px;
          border-radius: 2px;
        }
      }
    }

    .containerText {
      height: 80%;
      display: flex;
      justify-content: center;
      color: #fff;
      flex-direction: column;
      padding: 10px;
    }

    .bottomELement {
      height: 15%;
      display: flex;
      align-items: center;
    }
  }
`;

export const Reaction = styled.div`
  position: absolute;
  bottom: 0px;
  left: 10%;
  z-index: 100;
  opacity: 0;

  ${({ number }) => {
    const calc = number % 2;

    if (calc === 0) {
      return css`
        animation: upIn 2s ease-in-out;

        @keyframes upIn {
          0% {
            opacity: 1;
            left: 15%;
          }
          25% {
            left: 8%;
          }
          75% {
            left: 15%;
          }
          100% {
            left: 8%;
            opacity: 0;
            bottom: 55%;
            display: none;
          }
        }
      `;
    }

    if (calc !== 0) {
      return css`
        animation: upINOUT 2s ease-in-out;

        @keyframes upINOUT {
          0% {
            opacity: 1;
            left: 8%;
          }
          25% {
            left: 15%;
          }
          75% {
            left: 8%;
          }
          100% {
            left: 15%;
            opacity: 0;
            bottom: 55%;
            display: none;
          }
        }
      `;
    }
  }}
`;

export const ContentShow = styled.div`
  width: 80%;
  height: 100%;
  color: white;
  display: flex;
  /* justify-content: center;
  align-items:center; */
  flex-direction: column; 


  .vermais{
    font-size: 10px;
    color: ${({theme})=> theme.palette.primary.main};
    cursor: pointer;
    transform: opacity 0.3s;
    margin-left: 2px;

    :hover{
      opacity: 0.8;
    }
  }
  

  h2, h3{
    margin: 10px 0 0 20px;
    line-height: 20px;
    text-align: left;
  }

  h2 {
    font-weight: bold;
  }

  .subTitle {
    line-height: 1;
    margin: 20px 0 20px 20px;
    width: 250px;
    text-align: inherit;
    font-size: 14px;
  }

  span p {
    width: 250px;
    margin: 20px 0 20px 20px;
    line-height: 20px;
    font-weight: 500;
    font-style: normal;
    font-size: 1rem;
    text-align: initial;
    font-size: 14px;
  }

  @media(max-width: 767px) {
    span p {
      display: none;
    }

    h2 {
      font-size: 14px;
      line-height: 0.2
    }

    h3 {
      font-size: 10px;
    }

    .subTitle {
      font-size: 8px;
      width: 60%;
    }
  }
`;
