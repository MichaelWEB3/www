import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top:100px;
  flex-direction: column;
  color: white;
`;




//em contrucaoo
export const  Espaco =styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  margin-top: 20px;
  margin-bottom: 60px;
  flex-direction: column;
  color: white;

`

export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`

export const Img = styled.img`
width: 50%;
height: 80%;
`