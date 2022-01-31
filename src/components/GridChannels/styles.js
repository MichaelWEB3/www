import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 

  display: flex;
  justify-content: center;

  
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5em;
  grid-row-gap: 1.5em;
  align-self: center;
  padding: 35px;
  margin-bottom: 20px;
  overflow-y: scroll;
  
`;



