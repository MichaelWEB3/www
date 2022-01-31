import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import useDadosList from "../../dados/hooks/listaHok";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dados = useDadosList();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://stripeservermd.herokuapp.com/payment",
          {
            amount: 900,
            id,
          }
        );
        if (response.data.success) {
          history.push(`/ConfirmCompra`);
          setSuccess(true);
          dados.setPagou(true);
          alert("Pagamento feito com sucesso");
        }
      } catch (e) {
      }
    } else {
      alert(
        `Erro no pagamento. \nVerifique se você inseriu os dados corretamente ou se o seu cartão é um cartão válido! \nCódigo do erro: ${error.code}`
      );
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <center>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
          </center>
          <center>
            <button type="submit" className="buttonStrip btn btn-primary">
              Pagar
            </button>
          </center>
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of you're life
          </h2>
        </div>
      )}
    </>
  );
}
