import React from 'react';

import * as S from './styles';

import { BsQuestion } from 'react-icons/bs';

import credCard from '../../assets/credCardVerson1.png';
import credCardVerso from '../../assets/credCardVerso.png';

function CVV() {
  return (
    <S.Container>
      <S.Texts>
        <BsQuestion />
        <h2>Código de Segurança (CVV):</h2>

        <p>O código de segurança de seu cartão (CVV) é o número
        de 3 ou 4 dígitos localizado no verso da maioria dos cartões.</p>
      </S.Texts>
      <S.CredCard>
        <img src={credCard} alt='credCard'/>

        <img src={credCardVerso} alt='credCard'/>
      </S.CredCard>

    </S.Container>
  );
}

export default CVV;