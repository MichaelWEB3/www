import styled from 'styled-components';

import assentos from '../../assets/assentos.png';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  align-items: center;
  height: auto;
  width: 100%;
  background: #000;
  background-image: url(${assentos});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% auto;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    padding-top: 30px;
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;


export const Box = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h3 {
    font-weight: normal;
    font-size: 14px;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Stores = styled.div`
  display: flex;
  margin-top: 10px;
  align-self:center;
  cursor: initial;

  img {
    width: 30px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(80%);
    }
  }

  .apple {
      
      margin-right: 21px;
    }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 5px;
  align-self: center;  
  img {
    width: auto;
    height: 45px;
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

export const Line = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;

  img {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Mercadata = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  color: #fff;

  margin-top: 50px;
  display: flex;
  align-items: center;

  text-align: center;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;

  svg {
    margin: 0 5px;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    margin: 0;
    padding-bottom: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 25vh;

  @media (max-width: ${SCREEN_SIZES.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Span = styled.span`
width: 30px;
height: 30px;
cursor: pointer;
border-radius: 10px;
margin:5px;

background-color:${props => props.bg} ;
color: ${props => props.cor};

`
export const SpanDoe = styled.span`
display: flex;
flex-direction:column;
justify:center;
align-items:center;
cursor: pointer;
padding-top: 20px;
font-size: ${props => props.size+"rem"};
color: ${props => props.cor};

`

export const imglogo = styled.img`



`