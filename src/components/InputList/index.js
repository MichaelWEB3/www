import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import * as S from './styles';
import theme from '../../theme';

function InputList({ width, name, placeholder, color }) {

  // const inputRef = useRef(null);
  // const { fieldName, defaultValue, registerField, error } = useField(name);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //   });
  // }, [fieldName, registerField]);

  const [data, setData] = useState([
    {
      id: 0,
      className: `input`,
      name: `${name}`,
      placeholder: `${placeholder}`
    },

  ]);

  function Push(value) {

    setData((old) => [...old, {
      id: value + 1,
      className: `input`,
      name: `${name}${value + 1}`
    }])

   
  }

  function Pop(id) {
    const newList = data.filter((item) => item.id !== id);

    setData(newList);
    
  }


  


  return (

   

      <S.Container width={width || 406} color={color || theme.palette.background.main}>
        <div className='Map'>
          {data.map((item, index) => {
            return (
              <div className='addItem'>
                <input key={`${item.id}`} className={item.className} name={item.name} placeholder={item.placeholder} />
                {data.length === index + 1 ? <button className='add' onClick={() => Push(index)}>+</button>
                  : <button className='remove' onClick={() => Pop(item.id)}>-</button>}
              </div>
            )
          })}
        </div>
      </S.Container>

   





  )

}

export default InputList;