import React from 'react';

import * as S from './styles';

function TransationList() {
  return (
    <S.Container>
      <S.List>
        <S.Header>
          <h4>Data</h4>
          <h4>Descrição</h4>
          <h4>Período</h4>
          <h4>Forma de Pagamento</h4>
          <h4>Subtotal</h4>
          <h4>Total</h4>
        </S.Header>

        <S.Line>
          <S.Tile className='yellow'>
            15/07/2020 
          </S.Tile>
          <S.Tile>
            Serviço de Transmissão Online
          </S.Tile>
          <S.Tile>
            15/07/2020 <br/>
            14/08/2020
          </S.Tile>
          <S.Tile className='card'>
            **** **** **** 5435 <S.Bandeira />
          </S.Tile>
          <S.Tile>
            R$ 29,90
          </S.Tile>
          <S.Tile>
            R$ 32,90
          </S.Tile>
        </S.Line>
        
        <S.Line>
          <S.Tile className='yellow'>
            15/07/2020
          </S.Tile>
          <S.Tile>
            Serviço de Transmissão Online
          </S.Tile>
          <S.Tile>
            15/07/2020 <br/>
            14/08/2020
          </S.Tile>
          <S.Tile className='card'>
            **** **** **** 5435 <S.Bandeira />
          </S.Tile>
          <S.Tile>
            R$ 29,90
          </S.Tile>
          <S.Tile>
            R$ 32,90
          </S.Tile>
        </S.Line>
      </S.List>
    </S.Container>
  );
}

export default TransationList;