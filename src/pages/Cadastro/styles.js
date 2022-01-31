import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  padding: 0px 20px;
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
  color: ${(props) => props.cor || "white"};
  font-size: 10px;
  font-size: ${(props) => props.size + "px"};
`;

export const Input = styled.input`
  width: 23%;
  padding: 8px;
  border: 1px solid white;
  border-radius: 5px;
  background: #1b1b1b;
  color: white;

  margin: 10px;
  ::placeholder {
    color: white;
  }
`;

export const Voltar = styled.button`
  color: black;
  text-transform: uppercase;
  padding: 0.8%;
`;

export const Cadastro = styled.button`
  background-color: #fdcc12;
  color: black;
  text-transform: uppercase;
  :hover {
    background-color: #fdcc12;
  }
`;

export const Facebook = styled.button`
  background-color: #3b6caf;
  color: white;
  text-transform: uppercase;
  border: none;
  padding: 10px;
  margin: 5px;
  width: 15%;
  border-radius: 5px;
`;
export const Google = styled.button`
  background-color: #fff;
  color: black;
  text-transform: uppercase;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;
