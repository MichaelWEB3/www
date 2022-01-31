import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  font-family: 'Spinnaker', sans-serif;
  
`;

export const Header = styled.div`
  display: grid;
  grid-auto-flow: column;grid-template-columns: repeat(3, 230px) 300px repeat(2, 200px);
  font-size: 14px;
  font-weight: normal;
  width: 100%;
  padding-bottom: 15px;
  color: #fff5;
  
  border-bottom: 1px solid #fff;

  h4 {
    &:first-child {
      margin-left: 15px;
    }
  }
`;

export const Line = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 230px) 300px repeat(2, 200px);
  font-size: 14px;
  font-weight: normal;
  width: 100%;
  padding-bottom: 15px;
  align-items: center;
  color: #fff;
  
  border-bottom: 1px solid #fff;

  .card {
    display: flex;
  }

  .yellow {
    color: ${({theme}) => theme.palette.primary.main};
  }
  
`;

export const Tile = styled.div`
  font-family: 'Spinnaker', sans-serif;
  padding-top: 15px;
  width: 80%;

  &:first-child {
      margin-left: 15px;
  }
`;

export const Bandeira = styled.div`
  height: 20px;
  width: 50px;
  background: yellow;
  margin-left: 10px;
`;