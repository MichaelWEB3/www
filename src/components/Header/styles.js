import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.header`
  position: absolute;
  width:100%;
  height: 90px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:51;
  top: 0;
  h1{
    color: #fff;
  }
  .search{
    position: relative;
    right:0.8vw;
    }
`;

export const Content = styled.div`
  position:relative;
  width: 90%;
  display: flex;

  align-items: center;

  img{
    cursor: pointer;
    transition: opacity 0.3s;
    :hover{
      opacity: 0.8;
    }
  }

  @media (max-width: ${SCREEN_SIZES.md}) {
    width: 90%;
    display: flex;
    justify-content: space-between;

    svg{
      font-size: 25px;
      color: ${({ color, theme }) => color ? `${theme.palette.primary.main}` : '#fff'};
      margin-right: 20px;
     
      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`

export const Pages = styled.div`
  display: flex;
  height: 100%;
  margin-left: 50px;
  @media (max-width: ${SCREEN_SIZES.md}) {
    display: none;
  }
  width: 90%;
`

export const PagesToggle = styled.div`
  display: flex;
  height: 100%;
  margin-left: 50px;
  width: 90%;
`

export const Page = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-right: 44px;

  a {
    color: ${({ select, theme }) => select ? `${theme.palette.primary.main}` : '#fff'};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;

    &:last-child{
      margin-right: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const PageToggle = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 22px;

  a {
    color: ${({ select, theme }) => select ? `${theme.palette.primary.main}` : '#fff'};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;

    &:last-child{
      margin-right: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`



export const Icons = styled.div`
  display: flex;
  gap:0.5vw;

  @media (max-width: ${SCREEN_SIZES.md}) {
    svg {
      display: none;
    }
    display: none;
  }

  input {
    margin-right: -30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    background: transparent;
    border: 1px white solid;
    outline: none;
    color: white;
    border-radius: 5px;
    margin-left: 60px;
   
    ::-webkit-input-placeholder {
     color:white;
    }
  }

  svg {
    font-size: 25px;
    color: ${({ color, theme }) => color ? `${theme.palette.primary.main}` : '#fff'};
    margin-right: 20px;
    margin: auto;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    
  }

  svg.search {
    margin: auto;
    color: white;
    margin-right: 20px;
  }  

`;

export const IconsPerfil = styled(Icons)`
display: flex;
gap:0.5vw;

input {
  margin-right: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  background: transparent;
  border: 1px white solid;
  outline: none;
  color: white;
  border-radius: 5px;
  margin-left: 60px;
 
 
}

svg {
  font-size: 25px;
  color: ${({ color, theme }) => color ? `${theme.palette.primary.main}` : '#fff'};
  margin-right: 20px;
  margin: auto;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  
  }

  svg.search {
    margin: auto;
    color: white;
    margin-right: 20px;
  }  
`;

export const Collapse = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  color: #fff;
  z-index: 11;


  @media (min-width: ${SCREEN_SIZES.md}) {  
    display: none;
    color: #fff;

    svg {
      font-size: 25px;
      color: ${({ color, theme }) => color ? `${theme.palette.primary.main}` : '#fff'};
      margin-right: 20px;
  
      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const ModalMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 88px;
  right: 0;
  height: 100vh;
  width: 60vw;
  z-index: 10;
  background: #222;
`;

export const InputBuscar = styled.input`
  position:relative;
  height: 6vh;
  width: 20vw;
  top: 1.2vh;
  background-color: black;
  border: 1px solid white;
  color: white;
`

export const DoisBotons = styled.div`
display: flex ;
flex-direction: row;
width: 200px;
justify-content: space-around;
`

export const Perfil = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius:12px;
  padding: 20px;
  margin-right: 1rem;
  background-color: white;
  border: none;
  color: black;



`

export const Foto = styled.span`
  display: flex;
  width: 50px;
  height: 50px;
 justify-content:center;
 align-items:center;
  

`

export const PerfilButton = styled.div`
  
  position: absolute;
  background-color: white;
  top: 75px;
  height: 300px;
  width: 30vw;

  @media (min-width: ${SCREEN_SIZES.md}) {  
    width: 10vw

  }

`

export const Button = styled.button`

 width: 100%;
 height: 25%;
 border:none; 
 background-color: #1B1B1B;
 color: white;
 
`

export const NomeLogado = styled.button`
  font-size:small;
  color:#fff;
  background:none;
  border:none;
  pointer-events:visible;
`