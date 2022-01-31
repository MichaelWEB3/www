import React from "react";

import * as S from "./styles";

function Ticket({ gold, remove, index,element, button, size }) {
  if (gold) {
    return (
      <>
        <S.ContainerGold size={size}>
          <S.TicketBackground2 size={size}>
            <h1>BACKSTAGE</h1>
            <p className="subTitle">com Cláudia Raia e Miguel Falabella</p>
            <p className="price">R$ 19,90</p>
          </S.TicketBackground2>
        </S.ContainerGold>

        {button ? (
          <p
            style={{ color: "#fff", fontSize: "12px", cursor: "pointer" }}
            onClick={() => {
              remove("gold",index,element);
            }}
          >
            X REMOVER
          </p>
        ) : (
          <></>
        )}
      </>
    );
  }

  return (
    <>
      <S.Container size={size}>
        <S.TicketBackground size={size}>
          <h1>Cabaret</h1>
          <h3>com Cláudia Raia</h3>
          <p className="price">R$ 39,90</p>
          <p className="boxAge">16</p>
          <p className="question">Horário:</p>
          <p className="date">20/05/2021</p>
          <p className="time">18:30h</p>
        </S.TicketBackground>
      </S.Container>
      {button ? (
        <p
          style={{ color: "#fff", fontSize: "12px", cursor: "pointer" }}
          onClick={() => {
            remove("tiket", index, element);
          }}
        >
          X REMOVER
        </p>
      ) : (
        <></>
      )}
    </>
  );
}

export default Ticket;
