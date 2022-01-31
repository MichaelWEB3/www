import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  width:100%;


  .swiper-wrapper {
      height: auto;
      width: 100%;
      flex-direction: row;
    }

    .swiper-container {
        width: 100%;
        height: auto;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

    .swiper-slide {
      text-align: center;
      
      display: flex;
      justify-content: center;
      margin: 5px 0;

    &:last-child {
      margin-bottom: 30px;
    }
      
    }

  .swiper-pagination-bullet {
  border: 1px solid #fff;
  background: transparent;
  opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.palette.primary.main};
    border: none
  }
`;
