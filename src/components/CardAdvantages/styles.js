import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  width: 210px;
  height: 320px;
  /* background: gray; */
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 5px 10px 5px;
  h2 {
    color: ${({theme}) =>theme.palette.primary.main };
    margin-bottom: 20px;
  }
`;

export const ImageRound = styled.div`
  margin-bottom: 20px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }

`;

export const Action = styled.div`
  width: 176px;
  height: 37px;
`;
