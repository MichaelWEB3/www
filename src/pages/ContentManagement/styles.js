import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .division {
    width: 1000px;
    border-bottom: 1px solid #fff;
    margin-top: 100px;
  }

  .section {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;


    .statistic {
      width: 400px;
      height: 200px;
      background: #000;
    }
  }

  .value {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }

  .faturamento {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
      color: #fff;
    }

    h2 {
      color: ${({theme}) => theme.palette.primary.main}
    }

  }

  .relatorio {
    display: flex;
    justify-content: flex-end;
    color: #fff;
    background: blue;
  }
  
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  .impulsionar {
    width: 220px;
    height: 50px;
    margin: 0 30px;
  }
  
  .delete {
    display: flex;
    align-items: center;
    color: #fff;
    transition: filter 0.2s;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      margin-right: 5px;
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

export const CardInfomation = styled.div`
  width: 300px;
  height: 400px;
  background: #000;

`;