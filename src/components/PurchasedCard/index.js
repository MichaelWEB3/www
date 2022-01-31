import React from 'react';
import * as S from "./styles";
import Ticket from '../Ticket';
// import image from '../../assets/hermanoteu.png';
// import mastercard from "../../assets/mastercard.png";


function PurchasedCard({image}) {

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // // useEffect{
  // //   () => {
  // //     window.addEventListener('resize', () => {
  // //       setWindowWidth(window.innerWidth) )
  // //     return () => {
  // //       window.removeEventListener('resize')
  // //     }
  // //   }, []
  // // } }

  // useEffect(() => {
  //   window.addEventListener('resize', () =>{
  //     setWindowWidth(window.innerWidth)
  //   })
  //   return () => {
  //     window.removeEventListener('resize')
  //   }
  // }, [])






  return (
    <S.Container>

      <S.Content>
        <S.Image image={image} />

        <S.Text>
        
          <p>
            Titulo: <strong>Hermanoteu na Terra de Godah</strong>
          </p>
          <p>
            Grupo: <strong>Melhores do Mundo</strong>
          </p>
          <p>
            Data de Compra: <strong>29/06/2020</strong>{" "}
          </p>
          <p className={'Payment'}>
            Meio de pagamento: <strong>**** **** **** 5435 </strong>{" "}
            <S.CardIcon />
          </p>
          
          <p>
            Valor: <strong>R$ 25,50</strong>
          </p>

          <S.ButtonContainer>
            <div className='Button'>+ver mais</div>           
          </S.ButtonContainer>

        </S.Text>


        



        <S.TicketContainer>
          <Ticket className='Ticket' gold size={15} />
        </S.TicketContainer>
      </S.Content>


    </S.Container>
  )
}

export default PurchasedCard;