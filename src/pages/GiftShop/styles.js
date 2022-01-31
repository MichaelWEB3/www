import styled from 'styled-components';
import { SCREEN_SIZES } from '../../utils/screen';

import backgroundimage from '../../assets/backgroundGiftshop.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #1b1b1b;
`;

export const Content = styled.div`

`;

export const Filter = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 50px;
  align-items: center;
  color: #fff;
  
  h2{
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    margin-right: 5px;
  }
  
  svg {
    margin-top: 3px;
    font-size: 24px;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
  }
`;

export const Infos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: relative;
`;

export const LogoSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 10px;

  img {
    width: 38px;
    height: 38px;
    margin-right: 5px;
    cursor: pointer;

    transition: filter 0.2s;

    &:last-child {
      margin-right: 0;
    }
    
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const BackgroundShop = styled.div`
  width: 100%;
  background-image: url(${backgroundimage});
  background-color: ${({ theme }) => theme.palette.background.main};
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 468px 1000px;
  background-position-x: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .division {
    border-bottom: 1px solid #fff;
    width: 595px;

  }

  .logoSocial {
    margin-top: 50px;
  }

  
  @media(max-width: ${SCREEN_SIZES.sm}) {
    background-size: 268px 600px;

    .division {
      width: 250px;
    }
  }

  
`;



export const Buy = styled.div`
  width: 800px;
  height: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 380px;
    height: 240px;
    margin-right: 20px;
  }

  @media(max-width: ${SCREEN_SIZES.sm}) {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  }
`;

export const Information = styled.div`
  color: #fff;
  line-height: 2;
  

  svg {
    font-size: 43px;
    margin-top: 20px;
  }

  @media(max-width: ${SCREEN_SIZES.sm}) {
    margin-top: 10px;
    font-size: 12px;

    svg {
      font-size: 20px;
      margin-top: 10px;
    }
  }
`;


export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  

  button {
    width: 220px;
    height: 49px;
    background: ${({ theme }) => theme.palette.primary.main};;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 20px 20px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;
    margin-left: 40px;
    transition: filter 0.2s;    

    &:hover {
      filter: brightness(80%);
    }

    &:last-child{
      margin-bottom: 0;
    }

    svg {
      color: #000;
      font-size: 25px;
      margin-right: 3px;
    }
    @media(max-width: ${SCREEN_SIZES.sm}){
      svg {
        color: #000;
        font-size: 14px;
        margin-right: 5px;
        margin-left: 5px;
      }
    }

      
  }

  @media(max-width: ${SCREEN_SIZES.sm}){
      button {
      width: 100px;
      height: 40px;
      background: ${({ theme }) => theme.palette.primary.main};
      font-size: 10px;
      line-height: 1.1;
      padding-right: 5px;
      }
    }

  
`;

export const Back = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  transition: filter 0.2s;
  cursor: pointer;
  font-size: 16px;

  &:hover {
      filter: brightness(80%);
    }

  svg {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-right: 8px;
  }

`;

export const Pagination = styled.div`
    width: 380px;
    height: 240px;
    margin-right: 20px;

    .swiper-pagination-bullet {
		border: 1px solid #fff;
		background: transparent;
		opacity: 1;
	}
	
	.swiper-pagination-bullet-active {
			background: ${({ theme }) => theme.palette.primary.main};
			border: none;
      
      
  }

	.swiper-container {
    width: 100%;
    height: 100%;
    }

	.swiper-slide {
		margin-bottom: 40px;
		img {
			width: 100%;
		}
  }

  @media(max-width: ${SCREEN_SIZES.sm}) {
    width: 260px;
    height: 220px;
    margin-left: 20px;
  }
`;
