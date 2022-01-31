import React, { useState, useEffect } from "react";

import * as S from "./styles";
import Ticket from "../Ticket";

import { MdShoppingCart } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import Store from "../../Connections/store";

import { useHistory } from "react-router-dom";

function CheckoutCard({ setCheckout, items }) {
  const [refresh, setRefresh] = useState(true);
  const [arrTiket, setArrTiket] = useState([]);

  const store = new Store();

  const history = useHistory();

  useEffect(() => {
    const store = new Store();
    async function getItems() {
      const recieved = await store.getFromKart();
      if (recieved) {
        let newArr = [];
        for (let i = 0; recieved.length > i; i++) {
          const newObject = { item: recieved[i], tiket: true, gold: true };
          newArr.push(newObject);
        }
        setArrTiket(newArr);
      }
    }

    getItems();
  }, []);

  const remove = (value, index, element) => {
    if (value === "gold") {
      const newArr = arrTiket;
      newArr.splice(index, 1, { item: element.item, tiket: true, gold: false });
      setArrTiket(newArr);
      setRefresh(!refresh);
    }

    if (value === "tiket") {
      const newArr = arrTiket;
      newArr.splice(index, 1);
      store.removeFromKart(element.item);
      setArrTiket(newArr);
      setRefresh(!refresh);
    }
  };

  return (
    <S.Container>
    
        {arrTiket.length === 0 ? (
          <p className="no-products">Não há produtos no carrinho.</p>
        ) : (
          <S.Element>
            {" "}
            {arrTiket.map((element, index) => {
              return (
                <S.Content key={`${index}`}>
                  <div className="inside">
                    <div className="ImageCard" />
                    <div className="Tikets">
                      {element.tiket ? (
                        <>
                          {" "}
                          <Ticket
                            size={30}
                            remove={remove}
                            index={index}
                            element={element}
                            button
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {element.gold ? (
                        <>
                          {" "}
                          <Ticket
                            size={30}
                            remove={remove}
                            index={index}
                            element={element}
                            button
                            gold
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </S.Content>
              );
            })}{" "}
           </S.Element>
        )}
     
      <div className="ButtonContainer">
        <button
          className="firstButton"
          onClick={() => {
            setCheckout(true);
          }}
        >
          <MdShoppingCart size={20} className="icon" /> COMPRAR R$0,00
        </button>
        <button className="secondButton" onClick={() => history.push("/")}>
          continuar comprando <FaArrowRight className="icon2" size={20} />{" "}
        </button>
      </div>
    </S.Container>
  );
}

export default CheckoutCard;
