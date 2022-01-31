import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;  
  flex-direction: column;
  background-color: #1b1b1b;
  /* box-sizing: none;
  border: none; */
`;

export const ContentPlayer = styled.div`
  width: 100%;
  height: 640px;
  margin-top: 1px;
  z-index: 1;
  position: relative;
  /* padding-top: 56.25%; Player ratio: 100 / (1280 / 720) */

  .absolute {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 30px;
    margin-right: 30px;
    cursor: pointer;   


  .modeAdmin {
    display: flex;
    align-items: center;
    color: #fff;

    &:hover {
      color: ${({theme}) => theme.palette.primary.main};
    }

    p {
      font-size: 18px;
    }

    svg {
      margin-left: 5px;
      font-size: 20px;
      }
    }
  }
  
  
  
  .reactPlayer {

    top: 0;
    left: 0;
    border: 0;
    z-index:1;
  }

  @media(max-width: 767px){
    height: 350px;
  }
`;

export const CircularBanner = styled.div`
  line-height: 0;
  box-sizing: 0;
  border: 0;
  margin-top: -15px;
  z-index: 2;
  

  img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-sizing: nne;
  }

  @media(max-width: 760px){
    top: 59%;
    img {
    width: 100px;
    height: 100px;
    }
  }


`;

export const TextInformation = styled.div`
  color: #fff;
  line-height: 1.1;
  width: 420px;
  text-align: center;
  margin-top: 1%;

  @media(max-width: 767px) {
    width: 310px;
    font-size: 0.9rem;
    top: 78%;
  }
`;

export const SocialButtons = styled.div`
  top: 88%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;

  img {
    width: 40px;
    height: 40px;
    transition: filter 0.2s;
    margin: 0 10px 0 10px;
    border: 0;
    &:hover {
      filter: brightness(80%);
    }
  }

  @media(max-width: 760px){
    top: 90%;
    img {
    width: 37px;
    height: 37px;
    transition: filter 0.2s;
    margin: 0 10px 0 10px;
    border: 0;
    &:hover {
      filter: brightness(80%);
      }
    }
  }

`;

