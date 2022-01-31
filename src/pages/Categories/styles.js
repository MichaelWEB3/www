import styled from 'styled-components';
import { SCREEN_SIZES } from '../../utils/screen';


export const Container = styled.div`
  
  color: white;
`;






export const Span = styled.span`
    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
`

export const EspaçoButtons = styled.div`
  width: 100%; 
  height: auto;
  display: flex;
  justify-content:space-between;
  padding: 25px;
  position: relative;

  
 
`

export const Filtrobtn = styled.button`
  border:none;
  width: 150px;
  height: 30px;
  background-color:black;
  opacity: 90%;
  color: #FFF;
  border-bottom: 1px solid #fff;
  position:relative;
  opacity: 0.9;
  color: #fff ;
  :hover{
    color: #FDCC12   
  }
   
`


export const Filtrodiv = styled.div`
  height: auto;
  background-color:black;
  opacity: 0.8;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  position:absolute;
  z-index:2;

  
`
export const FiltroItem = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items:center;
  justify-content: center;
  padding: 7px;
  font-size:0.7rem ;
  z-index:1;
  
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

export const Img = styled.img`
  width: 400px;
  height: 400px;
  box-shadow: 5px 5px 5px  5px rgba(0,0,0,0.2);
`
