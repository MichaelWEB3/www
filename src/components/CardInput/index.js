import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import { useField } from '@unform/core';
import { Form } from '@unform/web'
import Input from '../Input';
import InputTextArea from '../InputTextArea';

function CardInput() {

  function handleSubmit (data){
  }

  return (
    <S.Container>
      <p className='Title'>Entre em contato conosco</p>

      <Form onSubmit={handleSubmit}>
        <div className='InputTop'>
          <Input className='Investidor' name='investidor' placeholder='investidor' />
          <Input className='Celular' name='celular' placeholder='celular' />
        </div>

        <Input className='Email' name='email' placeholder='e-mail' />
        <InputTextArea className='Mensagem' name='mensagem' placeholder='sua mensagem' />

        <button className='Button' type='submit' onClick={() => alert('Teste')} > Enviar </button>
      </Form>


    </S.Container>
  )
}

export default CardInput;