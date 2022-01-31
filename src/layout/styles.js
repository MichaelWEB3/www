import styled from "styled-components";

import { SCREEN_SIZES } from '../utils/screen';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.div`
    display: flex;
    margin-top: 90px;
    flex: 1;
    flex-direction: column;
    padding-bottom: 50px;

    @media (max-width: ${SCREEN_SIZES.lg}) {
	    margin-top: 90px;
	}

    @media (max-width: ${SCREEN_SIZES.md}) {
	    margin-top: 90px;
	}

    @media (max-width: ${SCREEN_SIZES.md}) {
	    margin-top: 90px;
	}

	@media (max-width: ${SCREEN_SIZES.sm}) {
	    margin-top: 90px;

	  }
`;

export const OverlayTermosUso = styled.div`
  position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: rgba(78, 89, 131, 0.5);
    backdrop-filter: blur(5px);

    z-index: 999;
`;

export const ModalTermosUso = styled.div`
  position: absolute;
  width: 50vw;
  max-height: 70vh;
  margin: auto;
  background-color: white;
  z-index: 999;
  left: 25vw;
  top: 10vw;
  padding: 30px;
  overflow-y: auto;
  border-radius: 10px;


  button {
    margin: 15px;
    padding: 5px;
    width: 80%;
    margin-left: 10%;
  }

  div {
    margin-top: 15px;
    width: 100%;
    
  }

  img {
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    margin-top: 15px;
    margin-bottom: 15px;

    
    -moz-transform: scale(1.2, 1.12);
    -webkit-transform: scale(1.2, 1.12);
    transform: scale(1.2, 1.12);
    
  }

  p {
    color: red;
  }

  span {
    color: "#1bbbbb";
    font-weight: bold; 
    cursor: pointer;
  }

  input {
    width: 20px;
    height: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  position: relative;
 
  overflow: hidden;
  width: 100%;
  
`;
export const Coracao = styled.span`
width: 30px;
height: 30px;
cursor: pointer;
border-radius: 10px;
margin:5px;
:hover{
 color: #FDCC12;
}
`