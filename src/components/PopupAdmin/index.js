import React from 'react';

import { MdClose } from 'react-icons/md';

import * as S from './styles';

function PopupAdmin({ title, changeVisible, children }) {
  return (
    <S.Container>
      <S.Box>
        <S.Header>
          <h5>{title}</h5>
          <MdClose onClick={changeVisible} />
        </S.Header>

        <div className="scroll">
          <S.Content>
            {children}
          </S.Content>
        </div>
      </ S.Box>
    </ S.Container >
  );
}

export default PopupAdmin;