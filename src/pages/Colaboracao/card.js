import React from 'react'
import './style.css'
import * as S from "./styles";
import { PIX } from "gpix/dist"
import QRCode from "qrcode.react";
import { useState, useEffect } from "react"

export default (props) => {
    useEffect(() => {
      document.getElementById("qrcode").style.display = "none"
    },[])
    const [barcode, setBarcode] = useState("")
    function generatePix(amount) {
      
     

      let pix = PIX.static(amount);

      pix.setReceiverName("Casa Dos Artistas");
      pix.setReceiverCity("Rio de Janeiro");
      pix.setKey("5521998058690");
      pix.setAmount(amount);
      setBarcode(pix.getBRCode())
      document.getElementById("qrcode").style.display = "inline"
    }
    return (
      <>
        <S.CardPix>
          <S.CardPixItem justify="end">
            <S.Span cor="white" className="p-5">
              <button
                onClick={() => props.setabrirpix(false)}
                className="btn btn-warning"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </S.Span>
          </S.CardPixItem>
          <S.CardPixItem justify="center">
            {" "}
            <S.Span size="1.2">Faça um pix para o Retiro dos artistas</S.Span>
          </S.CardPixItem>
          <S.CardPixItem justify="center" id="button-pix">
            <div>
              <S.Span size="1">Valores Sugeridos:</S.Span>
              <button
                className="btn btn-warning"
                onClick={() => generatePix(5.0)}
              >
                PIX 5 REAIS
              </button>

              <button
                className="btn btn-warning"
                onClick={() => generatePix(10.0)}
              >
                PIX 10 REAIS
              </button>

              <button
                className="btn btn-warning"
                onClick={() => generatePix(15.0)}
              >
                PIX 15 REAIS
              </button>
            </div>
          </S.CardPixItem>
          <S.CardPixItem justify="center">
            <center>
              <div id="qrcode">
                <div id="bg-qrcode">

                  <QRCode value={barcode} size="250" />
                </div>
              </div>
            </center>
          </S.CardPixItem>
        </S.CardPix>
      </>
    );
}