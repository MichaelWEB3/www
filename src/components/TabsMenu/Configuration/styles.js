import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Config = styled.div`
  display: flex;
  flex-direction: column;
  margin: 280px 0 100px 0;

  a {
    text-decoration: underline;
    color: ${({theme}) => theme.palette.primary.main};
    cursor: pointer;
    transition: filter 0.2s;
    margin-bottom: 10px;
    font-weight: 300;

    &:hover {
      filter: brightness(70%);
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: normal;
  }

  .smallText{
    color: #fff;
    font-size: 10px;
    margin-left: 23px;
    margin-top: -10px;
  }

  .noSpace {
    margin-bottom: 10px;
  }
`;

export const Line = styled.div`
  width: 377px;
  margin: 20px 0;
  border-bottom: 1px #fff solid;
`;

export const CheckBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
  color: #fff;
  font-weight: lighter;

  input {
    margin-right: 10px;
  }
`;

export const InlineCheckBox = styled.div`
  display: flex;
  
  label {
    margin-right: 15px;
  }
`;

export const Button = styled.button`
    width: 421px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    &:last-child{
      margin-bottom: 0;
    }

    svg {
      color: #000;
      font-size: 27px;
      margin-left: 5px;
    }
`;

export const InputText = styled.div`
  width: ${({ width }) => width ? width : '253px'};
  height:  ${({ height }) => height ? height : '40px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5A5A5A;
  border-radius: 10px;

  margin-bottom: 30px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-color: none;    
    outline: none;
    padding: 0 5px 0 10px;
    border-radius: 10px;
    background-color: #5A5A5A;
    color: #fff;
  }

  svg {
    font-size: 30px;
    margin: 0 7px 0 5px;
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;