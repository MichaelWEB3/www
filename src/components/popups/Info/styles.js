import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  position: absolute;
  top: 16px;
  right: 111px;
`;

export const Info = styled.div`
  position: absolute;
  color: #fff;
  top: 16px;
  left: 19px;
  display: flex;
  align-items: center;

  h2 {
    font-size: 18px;
  }

  
  svg{
    font-size: 25px;
    margin-right: 9px;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 300px;


`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 51px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Image = styled.div`
  margin-right: 72px;

  img {
    width: 91px;
    height: 91px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  justify-content: center;

  h2 {
    margin-bottom: 20px;
    
  }
  
  `;