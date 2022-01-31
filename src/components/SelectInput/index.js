import React from 'react';

import {MdKeyboardArrowDown} from 'react-icons/md';

import * as S from './styles';

function SelectInput({data}) {
  return(
    <S.Container>
      <select name="selectInput" id="selectInput">
        {data.map(optionName => {
          return <option key={optionName} value={optionName.value}>{optionName.label}</option>
        })}
      </select>
      <MdKeyboardArrowDown />
    </S.Container>
  );
}

export default SelectInput;