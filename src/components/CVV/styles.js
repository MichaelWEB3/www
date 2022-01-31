import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  width: 450px;
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 245px;
    height: 380px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  h2 {
    margin: 10px 0 10px 0;
    color: #fff;
    font-weight: bold;
  }

  p {
    color: ${({theme}) => theme.palette.primary.main};
    font-weight: normal;
    font-style: normal;
    text-align: center;
    font-size: 18px;
    width: 300px;
  }


  svg {
    font-size: 45px;
    background-color: ${({theme}) => theme.palette.primary.main};
    border-radius: 50%;
    object-fit: cover;
  }

  @media(max-width: ${SCREEN_SIZES.sm}) {
    h2 {
    font-size: 18px;
    }

    p{
      font-size: 13px;
      width: 100%;
    }

    svg {
      font-size: 30px;
    }
  }
`;

export const CredCard = styled.div`
  width: 320px;
  height: 190px;
  margin-top: 20px;

  img{
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    :last-child {
      margin-bottom: none;
    }
  }

  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 150px;
    height: 90px;
    margin-top: 20px;

    img {
      margin-bottom: 2px;
        :last-child {
          margin-bottom: none;
    }

    }
  }

`;
