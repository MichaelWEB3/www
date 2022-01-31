import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cards {
    display: flex;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content:center;
    align-items:center;

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

export const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-top: 20px;

  svg {
    font-size: 60px;
    margin-left: 15px;
    color: ${({theme}) => theme.palette.primary.main};
  }
`;