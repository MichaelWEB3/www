import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 60px;


`;

export const Photos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 115px;
  margin-bottom: 30px;
  padding:20px;

  .imgUpload {
    width: 95px;
    height: 95px;
    object-fit: contain;
    object-position: center;

    img.contain {
      width: 95px;
      height: 95px;
      object-fit: contain;
      object-position: center;
    }
  }
`;

export const Photo = styled.div`

  

  width: 95px;
  height: 95px;
  border: 2px dotted ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  transition: filter 0.2s;

  

  svg{
    font-size: 20px;
    margin-bottom: 10px;
  }

  &:hover {
    filter: brightness(75%);
  }

  ${({ define }) => define && css`
    background: ${({ theme, color }) => color ? theme.palette.primary.main : '#D2D2D2'};
    border: none;
    color: #000;
    font-size: 14px;
    font-weight: 600;

    img {
      width: 50px;
      margin-bottom: 5px;
    }

    .books {
      width: 40px;
    }
    
    .acessorios {
      width: 70px;
      margin-bottom: 9px;
    }
  `}
`;

export const InputText = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    background: transparent;
    border: 1px solid #fff;
    height: 40px; 
    border-radius: 5px;
    padding: 10px;
    color: ${({ color, theme }) => !color ? '#fff' : theme.palette.primary.main};
    outline: none;
    margin-bottom: 15px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
  }

  textarea {
    width: 100%;
    height: 124px;
    padding: 0 10px;
    background: transparent;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    padding: 10px;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
    resize: none;

    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.palette.primary.main};
    }

    ::-webkit-input-placeholder {
      color: white;
    }
  }

  .valor{
    ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const Select = styled.div`
  position: relative;
  select {
    width: 100%;
    height: 41px;
    padding: 0 10px;
    background: transparent;
    color: gray;
    outline: none;
    border: 1px solid #fff;
    margin-bottom: 15px;

    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;

    font-family: 'Spinnaker', sans-serif;
    font-size: 14px;
  }

  select:required:invalid {
    color: gray;
  }

  svg {
    font-size: 38px;
    position: absolute;
    right: 0;
    top: 2px;
    color: #fff6;
    z-index: 0;
  }
`;

export const Tamanhos = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;

  h3 {
    font-size: 14px;
    font-weight: 300;
    margin-left: 20px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;

export const LineOptions = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(8, 20px);
  grid-gap: 3px;
`;

export const Title = styled.div`
  font-size: 12px;
  margin: 10px 0;
`;

export const ButtonOption = styled.button`
  width: 20px;
  height: 20px;
  font-size: 11px;
  cursor: pointer;
  transition: filter 0.2s;
  border: none;
  outline: none;
  background: ${({ theme, color }) => color ? theme.palette.primary.main : '#fff'};

  &:hover{
    filter: brightness(70%);
  }
`;

export const Colors = styled.div`
  margin: 15px 0 30px;
  h3 {
    font-size: 14px;
    font-weight: 300;
    margin-left: 20px;
  }
`;

export const ColorOptions = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(14, 25px);
  grid-gap: 5px;
`;

export const Color = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ cor }) => cor};
  outline: none;
  border: ${({ theme, select }) => select ? `3px solid ${theme.palette.primary.main}` : 'none'};
  box-shadow: ${({ theme, select }) => select ? `1px 1px 2px 2px #000` : 'none'};

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(70%);
  }
`;

export const Button = styled.div`
  display: flex;
  /* margin-bottom: 30px; */
  width: 100%;
  justify-content: center;

  button {
    width: 209px;
    height: 49px;
    background: #FDCC12;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 18px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(80%);
    }

    svg {
      color: #000;
      font-size: 20px;
      margin-left: 5px;
    }
  }
`