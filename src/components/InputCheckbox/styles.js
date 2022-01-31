import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;

  label {
    color: #fff;
    cursor: pointer;    
  }

  span {
    /* color: ${({item}) => item ? 'blue' : 'red' }; */
    margin-right: 60px;
  }
`;

export const Content = styled.div`
  span {
    margin-left: 5px;
  }
`;

export const Checkbox = styled.input`
  
`;