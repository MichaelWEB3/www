import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top:100px ;
  align-items: center;
  padding-bottom: 100px;
`;

export const ContainerItem = styled.div`
  width: 100%;
  background: #1b1b1b;
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 0px;
 
`;

export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`

export const Input = styled.input`
    width: 23%;
    padding: 8px;
    border:1px solid white;
    border-radius: 5px;
    background: #1b1b1b;
    color: white;
   
    margin: 10px;
   ::placeholder {
  color: white;
}
`



export const Entrar = styled.button`
background-color: white;
color: black;
text-transform: uppercase;
padding: 0.8%;
:hover{
    background-color: #FDCC12;
}`

export const Cadastro = styled.button`
background-color: #FDCC12;
color: black;
text-transform: uppercase;
:hover{
    background-color: #FDCC12;
}
`


export const Facebook = styled.button`
background-color: #3B6CAF;
color: white;
text-transform: uppercase;
border: none;
padding: 10px;
margin: 5px;
width: 15%;
border-radius: 5px;

`
export const Google = styled.button`
background-color: #FFF;
color: black;
text-transform: uppercase;
border: none;
padding: 5px;
margin: 5px;
border-radius: 5px;

`