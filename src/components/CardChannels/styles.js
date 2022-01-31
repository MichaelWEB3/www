import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  
  .title-container{
    display: flex;
    align-items: center;
  }

  /* .actions {
    margin-right: -60px;
    cursor:pointer;
  } */

  svg {
    font-size: 30px;
  }

  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const CircularImg = styled.div`
  display: flex;
  align-items: center;

  div{
    width: 156px;
    height: 156px;
    border-radius: 50%;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 80px;
    font-weight: bold;
  }

  h1{
    margin-left: 20px;
  }

  img {
    border-radius: 50%;
    width: 156px;
    height: 156px;
  }
`;