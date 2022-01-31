import styled from 'styled-components';

import { SCREEN_SIZES } from '../../utils/screen';

export const Container = styled.div`
 
  width: 100vw;
  background: black;  
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #1d1d1d;

  /* @media (max-width: ${SCREEN_SIZES.md}) {
    flex-direction: column;
  } */

  @media (max-width: ${SCREEN_SIZES.md}) {
    width: 100vw;
    
    flex-direction: column;
  }

`;
///tudo


export const ButtonVoltar = styled.span`
font-size: 1.8rem;
color:#FDCC12;
cursor: pointer;
position: absolute;
top: 0;
right: 50px;
@media (max-width: ${SCREEN_SIZES.md}) {
    right: 20px;
  }
`

export const ContainerImg = styled.div`
  width: 65vw;
  height: 100%;
  position: absolute;
  @media (max-width: ${SCREEN_SIZES.md}) {
    width: 100vw;
    height: 80vw;
    position: relative;
  }

  iframe {
    margin-top: 0px; 
    padding: 0; 
    width: 65vw; 
    height: 100%;

    @media (max-width: ${SCREEN_SIZES.md}) {
    width: 100vw;
    
  }


  }

/* &:after{
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background:linear-gradient(0.25turn, rgba(0,0,0,.9), rgba(0,0,0,.2), rgba(0,0,0,.4));
} */
`;

export const Thumbnail = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
	 background-position: center center;
	 background-repeat: no-repeat;
	 background-size: cover;
   position: absolute;

  

  @media (max-width: ${SCREEN_SIZES.md}) {
  }
 
`;

export const Conteudo = styled.div`

  width: 40vw;
  height: 100%;
  padding: 40px;
  display: flex;
  margin-left: 65vw;
  flex-direction: column;
  align-items: center;
  background:black;
 
  

  /* @media (max-width: ${SCREEN_SIZES.md}) {
    width: 70%;
    padding: 30px;
  } */
  @media (max-width: ${SCREEN_SIZES.md}) {
    width: 100vw;
    padding: 20px;
    margin-left: 0;
  }
  
`;


export const HeaderConteudo = styled.div`
   display: flex; 
   flex-direction: row;
   align-items: center;
   width: 100%;

   
`;

export const Item = styled.div`
    gap: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
 
    padding: 2%;
`;

export const Coracao = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
color: white;
:hover{
 color: #FDCC12;
}
`
export const Card = styled.span`
width: 25px;
height: 20px;
color: black;
background-color: white;
padding: 0px;
border-radius: 5px;
font-size: 12px;
text-align: center;
justify-content: center;
align-items: center;
padding: 5px;
`


export const Compartilhar = styled.span`
width: 30px;
height: 30px;
color:white;
border-radius: 10px;

:hover{
  color: #FDCC12;
}
`

export const Span = styled.span`
    color: white;
    font-size: 0.7rem;
    text-align: justify;
    color: ${props => props.cor || 'white'};

    font-size:${props => props.size + "rem"};
    
`
export const Text = styled(Span)`
    color: white;
    font-size: 1rem;
    text-align: justify;
    
`
export const HeaderTitle = styled(Span)`
    color: white;
    font-size: 1.6rem;
    text-align: left;
    font-weight: bold;
    
`


export const Informacoes = styled.div`

  width: 100%;
  height: auto;

  padding-bottom: 10px;
  display: flex;
  flex-direction: column;

`;

export const ButtonHorario = styled.button`
background-color: #FDCC12;
color: black;
width: 200px;
height: 50px;
text-transform: uppercase;
font-weight: bold;
margin-top: 20px;
:hover{
    background-color: #FDCC12;
}

@media (max-width: ${SCREEN_SIZES.sm}) {
  width: 100%;
}
`

export const Classificacao = styled.span`
width: 25px;
height: 20px;
color: black;
background-color: white;
padding: 0px;
border-radius: 5px;
font-size: 0.8rem;
text-align: center;
justify-content: center;
align-items: center;
padding: 5px;
`



export const Img = styled.img`
  width: 400px;
  height: 400px;
  box-shadow: 5px 5px 5px  5px rgba(0,0,0,0.2);
`

export const Produtora = styled.div`
 width: 100%;
  height: 50%;
 padding: 100px;
  background: #1b1b1b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 color: white;

`

export const ImgProdutora = styled.img`
 width:200px;
 height: 200px;
  background-image: url(${props => props.urlimg});
  background-color: white;
  
  justify-content: center;
  align-items: center;
  border-radius: 50%;
   margin: 40px;
`

export const InfoCard = styled.div`
position: fixed;
width: 250px;
height: 400px;
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.5) ;
padding: 15px;
opacity: 0;
:hover{
 opacity: 1;
}
`



export const CardTest = styled.div`

 width:250px;
 height: 400px;
color: white;
@media (max-width: ${SCREEN_SIZES.sm}) {
  font-size: 0.9rem;
}


`

export const InfoCardConteudo = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;

  @media (max-width: ${SCREEN_SIZES.sm}) {
  font-size: 0.9rem;
}
  
`

export const ClassificacaoCard = styled.span`
width: 25px;
height: 20px;
background-color: white;
color:black;
padding: 0px;
border-radius: 5px;
margin:5px;
font-size: 0.8rem;

text-align: center;
justify-content: center;
align-items: center;
`



export const Titulo = styled.span`
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1.2rem;
`



export const ConteudoCard = styled.span`
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
`



export const Sinopsia = styled.span`
 margin: auto;
margin:10px;
font-size: 15px;
overflow: hidden;
height: 113px;
`


export const ButtonAcessar = styled.button`
  margin: 0 auto;
  color: black;
  font-size: 1rem;
  width: 150px;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 100;
:hover{
  background-color: white;
  color: black;
  border-color: white;

}
`
export const ButtonAssistir = styled.button`
  margin: 0;
  color: white;
  font-size: 1rem;
  width: 150px;
  text-transform: uppercase;
  font-weight: bold;
:hover{
  background-color: white;
  color: black;
  border-color: white;

}
`
export const SobrePosto = styled.div`
position: relative;
width: 250px;
height: 400px;
display: flex;

background-color: rgba(0, 0, 0, 1) ;
z-index: 1;
`



export const CardCanais = styled.div`
 width:250px;
 height: 250px;
  background-image: url(${props => props.urlimg});
  background-color: white;
  
  justify-content: center;
  align-items: center;
  border-radius: 50%;
   margin: 40px;
`




export const verMais = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
    cursor: pointer;
    :hover{
      color: #FDCC12;
    }
`
