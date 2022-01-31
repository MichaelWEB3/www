import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';

import { BsPencilSquare } from 'react-icons/bs';

function InputText({ text, width, height, type, placeholder, name, ...rest  }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
        <p>{text}</p>
      <S.content  width={width} height={height}>
        <input type={type} placeholder={placeholder} ref={inputRef} defaultValue={defaultValue} {...rest} />
        <BsPencilSquare />
      </S.content>

    </S.Container>
  );
}

export default InputText;