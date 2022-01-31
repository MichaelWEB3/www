import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #0008;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  color: #fff;
`;

export const Box = styled.div`
  width: 640px;
  max-height: 610px;
  border-radius: 10px;
  background: #343434;
  display: flex;
  flex-direction: column;
  align-items: center; 

    div.scroll {
      display: flex;
      justify-content: center;
      width: 100%;
      overflow-y: scroll;
      
      ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.palette.primary.main};
      }
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 15px 0;
  background: #515151;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h5 {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0.1em;
    text-transform: lowercase;
  }

  svg {
    position: absolute;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(75%);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  input {
    ::-webkit-input-placeholder {
      color: white;
    }
  }
`;