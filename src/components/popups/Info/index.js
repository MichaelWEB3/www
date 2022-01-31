import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import Popup from '../../../components/Popup';

import * as S from './styles';

import logo from '../../../assets/logoPalcoweb.png';
import keyBord from '../../../assets/tecladoSemFio.png';
import pc from '../../../assets/pc.png';
import cableUSB from '../../../assets/cableUsb.png';

function Info({visible, changeVisible}) {
  return (
    <S.Container>
      <Popup visible={visible} changeVisible={changeVisible}>
      <S.Info>
        <AiOutlineInfoCircle /> <h2>Como acessar o Palcoweb na SmartTV</h2>

      </S.Info>
      <S.Logo>
        <img src={logo} alt="Logo PalcoWeb"/>
      </S.Logo>

      <S.Content>
        <S.Item>
          
          <S.Image>
            <img src={keyBord} alt='KeyBord' />
          </S.Image>
          <S.Text>
            <h2>Teclado sem fio</h2>
            <p>Para ter mais facilidade no acesso do Palcoweb em
            sua SmartTV recomendamos utilizar um teclado sem fio 
            (Touchpad Wireless) com melhor manuseio da ferramenta.</p>
          </S.Text>
        </S.Item>
        <S.Item>
          <S.Image>
            <img src={pc} alt='KeyBord' />
          </S.Image>
          <S.Text>
            <h2>Transmissão Wireless</h2>
            <p>É possivel também espelhar a tela do seu computador ou 
            smartfone na sua SmartTV, só é peciso clicar no icone durante 
            a trasmissão de video dentro da ferramenta.</p>
          </S.Text>
        </S.Item>
        <S.Item>
          <S.Image>
            <img src={cableUSB} alt='KeyBord' />
          </S.Image>
          <S.Text>
            <h2>Cabo USB</h2>
            <p>Você pode também se conectar pelo 
            computador, e ou telefone, e 
            vinculá-lo por um cabo USB.</p>
          </S.Text>
        </S.Item>

      </S.Content>

      </Popup>
    </S.Container>
  );
}

export default Info;