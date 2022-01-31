import React from 'react';
// import { useHistory } from "react-router-dom";

import { Form } from "@unform/web";

import * as S from './styles';

import { AiFillCheckCircle } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';

import InputText from "../../InputText";
import SelectInput from "../../SelectInput";
import InputCheckbox from "../../InputCheckbox";
import Button from "../../Button";

import {useHistory} from "react-router-dom"

// import { useUser } from "../../../hooks/user";

function  Payment ({pressed}) {
  // const user = localStorage.getItem('@user');
  const history = useHistory()

  // const history = useHistory;



  const handleSubmit = (formData) => {
  };

  const data = [
    { value: "15", label: "Todo dia 15 do mês" },
    { value: "30", label: "Todo dia 30 do mês" },
    { value: "10", label: "Todo dia 10 do mês" },
    { value: "05", label: "Todo dia 05 do mês" },
  ]; 
  

  return (
    <S.Container>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <div className="space">
            <SelectInput data={data} />
          </div>
          <div className="space">
            <InputText
              text="Nome:"
              type="text"
              name="nome"
              // value={user.name}
            />
          </div>
          {/* <div className="space">
              <InputText text="Sobrenome:" name="sobrenome" />
            </div> */}
          <div className="space">
            <InputText
              text="CPF:"
              type="number"
              placeholder="000.000.000-00"
              name="cpf"
              // value={user.cpf}
            />
          </div>
          <div className="space">
            <InputText
              text="Número do cartão:"
              type="number"
              placeholder="0000.0000.0000.0000"
              name="numeroCartao"
            />
          </div>
          <div className="space">
            <InputText
              text="Data de validade:"
              type="text"
              placeholder="00/00/00"
              name="dataValidade"
            />
          </div>
          <div className="spaceCVV">
            <InputText
              type="number"
              placeholder="código de segurança CVV"
              name="CodigoCVV"
            />
            <BsQuestion
              className="CVV"
              onClick={() => pressed({status: true, text: 'CVV'})}
            />
          </div>

          <div className="checkBox">
            <div className="credit">
              <p>Escolha sua forma de pagamento:</p>
              <InputCheckbox
                name="payment"
                options={[
                  { id: "crédito", label: "Crédito" },
                  { id: "débito", label: "Débito" },
                ]}
              />
            </div>
          </div>

          <S.Card>
            <div className="header">
              <h2>PREMIUN</h2>
              <h3>R$ 39,90/mês</h3>
              <h2>4k HDR</h2>
            </div>

            <div className="vantagens">
              <p>
                {" "}
                <AiFillCheckCircle />
                  Assistar quando quiser!
                </p>
              <p>
                {" "}
                <AiFillCheckCircle />A hora que quiser!
                </p>
              <p>
                <AiFillCheckCircle />
                  Onde for!
                </p>
              <p>
                <AiFillCheckCircle />
                  Interaja com outras pessoas!
                </p>
              <p>
                <AiFillCheckCircle />
                  Divirta-se!
                </p>
            </div>

            <div className="buttonCard">
              <Button
                text="ALTERAR PLANO"
                color="#000"
                textColor="#fff"
                type="submit"
              />
            </div>
          </S.Card>
        </Form>
        <div className="options">
          <p className="cancel" onClick={() => alert("cancelada")}>
            Cancelar assinatura{" "}
          </p>

          <p className="create" onClick={() => history.push("/channel/1234", "create")} >
            Criar canal
            </p>
        </div>
      </div>
    </S.Container>
  );
}

export default Payment;