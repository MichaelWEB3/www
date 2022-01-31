import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
  padding: 0 0 0 20px;
  width: 100%;
 
  @media (max-width: ${SCREEN_SIZES.sm}) {
    padding: 0;
  }
  .cards {
    display: flex;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    
    .swiper-wrapper {
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

    .swiper-button-next,.swiper-button-prev {
      color: ${({ theme }) => theme.palette.primary.main};
     
      top: 30%;
    }
  }
`;
