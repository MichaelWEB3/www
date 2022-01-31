import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 90px;
  flex-direction: column;
  color: white;
`;

//em contrucaoo
export const Espaco = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  color: white;
  padding: 1px;
  iframe {
    margin-top: -22vh;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.cor || "white"};
  font-size: 10px;
  font-size: ${(props) => props.size + "px"};
`;

export const Img = styled.img`
  width: auto;
  height: 60%;
`;
