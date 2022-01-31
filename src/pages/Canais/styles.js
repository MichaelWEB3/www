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
export const Espaco = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
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

export const verMais = styled.span`

    color: ${props => props.cor || 'white'};
    font-size: 10px;
    font-size:${props => props.size + "px"};
    cursor: pointer;
    :hover{
      color: #FDCC12;
    }

`

export const GridContainer = styled.div`

  display: grid;
  width: 100vw;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
  padding: 50px;

  @media only screen and (min-width: 2500px) {
		grid-template-columns: auto auto auto auto auto auto;
	}

  @media only screen and (max-width: 1100px) {
		grid-template-columns: auto auto auto;
	}

  @media only screen and (max-width: 1000px) {
		grid-template-columns: auto auto;
	}

  @media only screen and (max-width: 600px) {
		grid-template-columns: auto;
	}

`;

export const CardCanais = styled.div`

  width:250px;
  height: 250px;
  background-image: url(${props => props.urlimg});
  background-color: white;
  border-radius: 50%;
  display: grid;

 
	margin: auto;
	
  
`

export const Img = styled.img`
  
  width: 250px;
  height: 250px;
  
`

export const InfoCard = styled.div`
  width:250px;
  height: 250px;
  display: flex;
  border-radius: 121px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  z-index: 10;
 
 
 
  background-color: rgba(0, 0, 0, 0.5) ;
  opacity: 0;
  :hover{
  opacity: 1;
  }
`

export const Coracao = styled.span`
width: 30px;
height: 30px;
cursor: pointer;
border-radius: 10px;

:hover{
 color: #FDCC12;
}
`