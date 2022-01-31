import styled from 'styled-components';

import backgroundimage from '../../assets/backgroundGiftshop.png';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-image: url(${backgroundimage});
  background-color: ${({ theme }) => theme.palette.background.main};
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 568px 1000px;
  background-position-x: 100%;

  @media (max-width: ${SCREEN_SIZES.sx}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    grid-template-columns: 1fr;
    align-self: center;
  }

  .containerCVV {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
    margin: 100px 0 40px 0;

    .button {
      width: 100px;
      height: 40px;
    }
  }

  
  .menu {
    /* background-color: red; */
    margin:30px 0 0 130px;

    .roundedImage {
      margin-bottom: 50px;
    }
  }
`;



