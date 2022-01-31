import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-height:100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  height:calc(80vh - 90px);
  color: white;
`

export const CampForm = styled.form`
display: flex;
flex-direction: none;
align-items: center;
justify-content: center;
width: 40%;
height: 400px;
margin: 20px;
background-color: white;
border-radius:10px;
box-shadow: 5px 5px 5px 5px rgba(127,255,212,0.1);
`


export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`

export const InputCardNumber = styled.input`
  width: 80vw;
  height: 5vh;
  margin-top:0;
  padding-left: 30px;
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.3);
  input-placeholder: black;
  font-weight: 500;
  fontSize: 16px;
  border-radius:4px;
  &::-webkit-input-placeholder {
    color: #aaa;
  }
`;
export const InputTitular = styled.input`
  width: 80%;
  height: 50px;
  background-color: white;
  color: black;
  border: 1px solid rgba(0,0,0,0.3);
`
export const CampoTexto = styled.div`
  width: 80%;
`

export const CampoData = styled.div`
  width: 80%;
  
`
export const Select = styled.select`
  width: 20%;
  height: 40px;
  margin: 5px;
  padding: 5px;
  
  
`
export const InputCVV = styled.input`
   width: 20vw;
  height: 5vh;
  margin-top:0;
  padding-left: 30px;
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.3);
  input-placeholder: black;
  font-weight: 500;
  fontSize: 16px;
  border-radius:4px;
  &::-webkit-input-placeholder {
    color: #aaa;
  }

`

export const Button = styled.button`
width: 80vw;
  height: 5vh;
  margin-top:0;
  padding-left: 30px;
  margin: auto;
  background-color: #fdcc12;
  color: black;
  font: bold;
  border: none;
  :hover{
   background-color:
   #fccf2d ;
  }
`

export const Doisinupt= styled.div`
  display: flex; 
  margin-left: 9%;
`