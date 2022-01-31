import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';

function InputCheckbox({ name, options }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find(ref => ref.checked);
        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find(ref => ref.value === value);

        

        if (item) {
          item.checked = true;
        }
      }
    })
  }, [fieldName, registerField]);



  return (

    <S.Container>
      {options.map((option, index) => (
        <label key={option.id}>
          <S.Content>
            <S.Checkbox 
              type='radio'
              ref={elRef => (inputRefs.current[index] = elRef)} 
              name={fieldName}
              value={option.id}
              defaultChecked={defaultValue === option.index}
              />
              <span>{option.label} </span>
          </S.Content>
        </label>
      ))}
    </S.Container>
  );
}

export default InputCheckbox;

