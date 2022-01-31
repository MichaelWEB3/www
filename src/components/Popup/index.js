import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

import * as S from './styles';


function Popup({children, changeVisible}) {
  return (
  <S.Container>
    <AiOutlineClose className='close' onClick={()=> changeVisible("off")}/>
    {children}
  </S.Container>
);
}

export default Popup;