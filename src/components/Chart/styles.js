import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => size / 30}px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;


    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom:  ${({ size }) => size / 100}px;

      .titleItem {
        display: flex;
        align-items: center;
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      align-items: center;

      .bottomItem {
        margin-left: 5%;
        display: flex;
        justify-content: center;
        align-items: center;

        .circleColor1 {
          height: ${({ size }) => size / 30}px;
          width: ${({ size }) => size / 30}px;
          border-radius: ${({ size }) => size / 60}px;
          border: 1px solid white;
          margin-right: 5px;
          background-color: #8884d8;
        }
        .circleColor2 {
          height: ${({ size }) => size / 30}px;
          width: ${({ size }) => size / 30}px;
          border-radius: ${({ size }) => size / 60}px;
          border: 1px solid white;
          margin-right: 5px;
          background-color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }
`;
