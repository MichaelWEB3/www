import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import * as S from "./styles";
import relogio from "../../assets/relogio.png";
import checkmark from "../../assets/checkmark.png";
// import mastercard from "../../assets/mastercard.png";
import Ticket from "../Ticket";
// import Card from "../Card";

function Processing() {
  // const history = useHistory();
  const [TransAprov] = useState(true);

  /* setTimeout(function () {
        setTransAprov(!TransAprov)
    }, 5000);  */

  /*  setTimeout(function () {
         if (TransAprov) history.push('./home')
     }, 5000); */

  return TransAprov ? (
    <S.Container>
      <div className="ContainerText">
        <div className="Text">
          <h1 className="Title">Compra efetuada com sucesso </h1>
        </div>

        <div className="Img">
          <img src={checkmark} alt=""/>
        </div>
      </div>

      <S.Content>
        <div className="TextCard">
          <p>
            Titulo: <strong>Hermanoteu na Terra de Godah</strong>
          </p>
          <p>
            Grupo: <strong>Melhores do Mundo</strong>
          </p>
          <p>
            Data de Compra: <strong>29/06/2020</strong>{" "}
          </p>
          <p>
            Meio de pagamento: <strong>**** **** **** 5435</strong>{" "}
            <p className="CardIcon" />
          </p>
          <p>
            Valor: <strong>R$ 25,50</strong>
          </p>
        </div>
       
        <div className="TicketCard">
          <Ticket size={11} />
          <Ticket size={11} gold />
          <div className="ImageCard" />
        </div>

      
      </S.Content>
     
    </S.Container>
  ) : (
    <S.Container>
      <div className="ContainerText">
        <div className="Text">
          <h1>Aguarde enquanto o servidor processa sua compra </h1>
        </div>

        <div className="Img">
          <img src={relogio} alt=""/>
        </div>
      </div>
    </S.Container>
  );
}

export default Processing;
