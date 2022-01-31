import React, { useState } from "react";
import * as S from "./styles";
import ListaHok from "../../dados/hooks/listaHok";
import { cpfMask, dataMask } from "../../utils/utils.js";
import Layout from "../../layout";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Pagamento() {
  const history = useHistory();
  const api = axios.create({
    baseURL: "https://pagseguroserver.herokuapp.com/",
  });
  const listaHok = ListaHok();
  const espetaculoUsuario = listaHok.listaEspetaculosDoUsuario;
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [cvv, setcvv] = useState("");
  const [data, setdata] = useState("");

  function sendCard(e) {
    e.preventDefault();
    const { nome, cvv, cardNumber, data, cpf } = e.target.elements;

    var cardDate = data.value;
    cardDate = cardDate.toString().split("/");
    var exp_month = cardDate[0];
    var exp_year = 20 + cardDate[1];
    // var value = espetaculoUsuario.valorPreco?.toString().replaceAll(".", "") || 0
    var cpfValue = cpf.value.toString().replaceAll(".", "");
    cpfValue = cpfValue.replaceAll("-", "");


    const payment = {
      name: nome.value,
      number: parseInt(cardNumber.value),
      exp_month: parseInt(exp_month),
      exp_year: parseInt(exp_year),
      securityCode: parseInt(cvv.value),
      value: parseInt(900),
      cpf: parseInt(cpfValue),
    };


    api.post("/payment", payment).then((response) => {
      alert("Compra feita com sucesso :)");
      history.push("/confirmcompra");
    });
  }

  function handleChangeNome(e) {
    setNome(e.target.value);
  }
  function handleChangeCpf(e) {
    const cpfMasked = cpfMask(e.target.value);
    setCpf(cpfMasked);
  }
  function handleChangeCVV(e) {
    const cvv = e.target.value;
    setcvv(cvv);
  }
  function handleChangeData(e) {
    const dataformat = dataMask(e.target.value);
    setdata(dataformat);
  }

  return (
    <Layout>
      <center>
        <S.Container>
          <S.Span size="40">Pagamento</S.Span> <br />
          <center>
            <h1>
              {" "}
              R$:{" "}
              {espetaculoUsuario.valorPreco
                ? espetaculoUsuario.valorPreco
                : listaHok.listaPlanos}
            </h1>

            <form onSubmit={(e) => sendCard(e)}>
              <S.InputCardNumber
                placeholder="CPF"
                required
                value={cpf}
                name="cpf"
                onChange={handleChangeCpf}
              />
              <S.InputCardNumber
                placeholder="Nome"
                required
                value={nome}
                name="nome"
                onChange={handleChangeNome}
              />
              <S.Doisinupt>
                <S.InputCVV
                  placeholder="Número do Cartão"
                  required
                  type="number"
                  name="cardNumber"
                ></S.InputCVV>
                <S.InputCVV
                  placeholder="CVV"
                  required
                  type="number"
                  name="cvv"
                  maxLength={4}
                  value={cvv}
                  onChange={handleChangeCVV}
                ></S.InputCVV>
                <S.InputCVV
                  type="data"
                  required
                  name="data"
                  placeholder="validade"
                  maxLength={5}
                  onChange={handleChangeData}
                  value={data}
                ></S.InputCVV>
              </S.Doisinupt>
              <S.Button>Pagar</S.Button>
            </form>
          </center>
        </S.Container>
      </center>
    </Layout>
  );
}

export default Pagamento;
