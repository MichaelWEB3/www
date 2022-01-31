import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: ${({ color }) => color};

  .messages {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    padding: 10px;
    line-height: 30px;
    overflow-y: scroll;
    overflow-x: hidden;

    .msgItem {
      display: flex;
      width: fit-content;
      width: 100%;
      margin-top: 20px;

      .avatarContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;

        .avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ddd;
          height: 30px;
          width: 30px;
          border-radius: 15px;
        }
      }

      .textContainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 85%;
        .text {
          width: fit-content;
        }
      }
    }
  }

  .emoji {
    display: flex;
    justify-content: space-around;
    width: 80%;
    img {
      cursor: pointer;

      transition: opacity 0.3s;

      :hover {
        opacity: 0.8;
      }
    }
  }

  .control {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: space-around;
    align-items: center;

    .msgPhoto {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      height: 30px;
      width: 30px;
      border-radius: 15px;
      cursor: pointer;

      transition: opacity 0.3s;

      :hover {
        opacity: 0.8;
      }
    }
    .inputMsg {
      border: none;
      outline: none;
      width: 60%;
      height: 50%;
      background-color: ${({ theme }) => theme.palette.background.main};
      border-radius: 20px;
      padding: 8px;
      color: #fff;
      cursor: text;
    }

    .sendMsg {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.palette.primary.main};
      height: 30px;
      width: 30px;
      border-radius: 15px;
      cursor: pointer;

      transition: opacity 0.3s;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;
