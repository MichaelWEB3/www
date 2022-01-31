import styled from "styled-components";
import { SCREEN_SIZES } from "../../utils/screen";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  height: ${(props) => (props.noItem ? "100vh" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;
  padding: 40px;
  @media (max-width: ${SCREEN_SIZES.md}) {
    max-width: 1000px;
  }
  
  @media (max-width: ${SCREEN_SIZES.sm}) {
    max-width: 680px;
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3vh;
  margin-top: 10vh;
  justify-content:center;
  span {
    position: relative;
    justify-content: left;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    z-index: 1;
  }
`;

export const HeaderSpan = styled.div`
  width: 50vw;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3vh;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  z-index: 1;

`;

export const Div = styled.div`
  width: 40vw;
  left:10vh;
  position:relative;
  @media (max-width: ${SCREEN_SIZES.sm}) {
    left:0;
     }
`;


export const Im = styled.div`
  width: 40vw;
  @media (max-width: ${SCREEN_SIZES.sm}) {
     display:none;
     }
  .img {
    @media (max-width: ${SCREEN_SIZES.sm}) {
     display:none;
     }
    height: 25vw;
    width: 60vw;
    margin-left: -5vw;
    margin-top: -16vh;
   
  }
`;
//wrapper da lista de ingressos
export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

//Linha de dentro do CartContainer
export const CartLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: solid 1px #ddd;
`;

//
export const CartFilme = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const CartFilmeInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;

export const CardFilmeTitle = styled.span`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardFilmeSubTitle = styled.span`
  color: #fff;
  font-size: 0.9rem;
`;
export const Text = styled.span`
  color: #fff;
  font-size: 1rem;
`;
export const CardFilmeValue = styled.span`
  color: #fdcc12;
  font-size: 1.2rem;
  font-weight: 600;
  align-self: flex-end;
  justify-self: flex-end;
`;

export const CardFilmeValueHor = styled.span`
  color: #fdcc12;
  font-size: 1rem;
  font-weight: 500;
  justify-self: flex-end;
  cursor: pointer;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  span {
    font-size: 1rem;
    text-transform: uppercase;
    color: #fdcc12;
    align-self: flex-end;
  }
`;

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 30px;
  gap: 3vw;
  
 
  button {
    height: 35vh;
    background: linear-gradient(
      to bottom,
      black 0%,
      black 23.7%,
      #383428 23.8%,
      #383428 24%,
      black 24.5%,
      black 70%,
      #fdcc12 70%,
      #fdcc12 100%
    );
    color: black;
    border-radius: 8%;
    font-size: 1.5rem;
    text-transform: initial;
    cursor: default;
    display:flex;
    flex-direction:column;
    justify:center;
    align-items: center;
  }
 



   
  }
  .valorContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: default;
    margin-top:2rem;
    
    
  }
  .valorPlano {
    padding-top: 10px;
    width: 100%;
    height: 100%;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items: center;
    font-size: 1.5rem;
    color: #fff;
    cursor: default;
    padding-bottom:20px;
    @media (max-width: ${SCREEN_SIZES.sm}) {
  
      margin-top:25px
   }
    
  }
 
  .plano {
 
      position:relative;
      color: #fff;
      display:flex;
      justify-content:center;
      align-items:center;
       @media (max-width: ${SCREEN_SIZES.sm}) {
      font-size: 1rem;
}
  }
  button:hover {
    cursor: pointer;
    background: linear-gradient(
      to bottom,
      black 0%,
      black 23.7%,
      #383428 23.8%,
      #383428 24%,
      black 24.5%,
      black 70%,
      #d7ac02 70%,
      #d7ac02 100%
    );
    color: #212121;
  }

  @media (max-width: ${SCREEN_SIZES.sm}) {
    flex-direction:column;
    
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  span {
    display: flex;
    max-width: 300px;
    width: 100%;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    text-align: justify;
  }
`;

export const CartInfoText = styled.p`
  display: flex;
  font-size: 0.8rem;
  max-width: 500px;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  text-align: justify;
`;

export const CartActionsPlains = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

export const ButtonPlanos = styled.button`
  background-color: #fdcc12;
  color: black;
  text-transform: uppercase;
  width: 150px;
  height: 50px;
  transition: all 0.3s;
  border: none;
  margin: 0 !important;
  border-radius: 5px;
  cursor: default;
  
  &:hover {
    background-color: #d7ac02;
  }
`;

export const ButtonPagar = styled(ButtonPlanos)`
  width: 70%;
  font-weight: bolder;
  font-size:;
  
  position:relative;
  @media (max-width: ${SCREEN_SIZES.sm}) {
    font-size:0.8rem;
  }
`;

export const PagarDiv = styled(ButtonPlanos)`
  width: 40vw;
  position: relative;
  font-weight: bolder;
  z-index: 1;
  cursor: default;
`;

export const ButtonVoltar = styled.button`
  text-transform: uppercase;
  font-size: 1rem;
  border: none;
  color: #fff !important;
  transition: all 0.3s;
  background: transparent !important;
  &:hover {
    color: #d7ac02;
  }
`;

export const Img = styled.img`
  width: 125px;
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  justify-content: center;
  height: 220px;
`;
export const X = styled.div`
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
`;

export const Cart = styled.div`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  text-align: center;
`;

export const Span = styled.span`
  color: ${(props) => props.cor || "white"};
  font-size: 10px;
  font-size: ${(props) => props.size + "rem"};
`;

export const InDevelop = styled.img`
  width: auto;
  height: 55vh;
`;

export const Flexcol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
`;

export const Flexrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${SCREEN_SIZES.sm}) {
    flex-direction: column;
  }
`;


export const Spaan = styled.span`
color: white;
  font-size:0.7rem;
`
