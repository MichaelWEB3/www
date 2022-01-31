import React from 'react';

import {MdKeyboardBackspace} from 'react-icons/md';

import TransationList from '../../components/TransationList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RoundedImage from '../../components/RoundedImage';

import * as S from './styles';

function PurchaseDetails() {
  return (
    <>
      <Header />
      <S.Container>
        <div className="perfil">
          <RoundedImage name='Caio' text age={26} color='#000' editPhoto/>
        </div>
        <S.Title>detalhes de cobrança</S.Title>
        <TransationList />
        <S.Button>
          <MdKeyboardBackspace />
          Voltar
        </S.Button>
      </S.Container>
      <Footer />
    </>
  );
}

export default PurchaseDetails;