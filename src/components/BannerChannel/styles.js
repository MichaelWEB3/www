import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 227px;
`;

export const Content = styled.div`
  background-color: #652E90;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .end {
  width: 100%;
}

`;

export const TextStyles = styled.div`
  text-align: center;
  padding-top: 15px;


  h1 {
      font-size: 70px;
      line-height: 0.9;
      }

  h3 {
      position: relative;
      line-height: 0.9;
      margin-left: 50px;
      }

  @media(max-width: 767px){
    h1{
      font-size: 50px;
      line-height: 0.9;
    }

    h3 {
      position: relative;
      line-height: 0;
      margin-left: 50px;
      font-size: 80%;
    }
  }
`;



export const ContainerCentral = styled.div`  
  justify-content: center;
  display: flex;

`;

export const TextInformation = styled.div`
  margin-top: 30px;
  text-align: center;
  width: 35%;
  
`;

export const SocialButtons = styled.div`
  display: flex;
  margin-right: 21px;
  justify-content: flex-end;


  img {
    width: 38px;
    height: 38px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(80%);
    }
}
`;
