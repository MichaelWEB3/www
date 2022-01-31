import styled, { css } from "styled-components";

// import { SCREEN_SIZES } from "../../utils/screen";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 20px;

  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .subTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;

    p {
      margin-top: 25px;
      color: ${({ theme }) => theme.palette.primary.main};
      font-weight: bold;
      font-size: 40px;
    }
  }

  img {
    height: auto;
    width: 50%;
    object-fit: contain;
  }

  .cards {
    display: flex;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;

    .swiper-container {
      width: 100%;
    }

    .swiper-slide {
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const Title = styled.span`
  padding: 5px;
  cursor: pointer;
  ${({ line }) => {
    if (line) {
      return css`
        border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
      `;
    }
  }}
`;
