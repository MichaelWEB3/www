import React, { useState } from 'react';

import * as S from './styles';

import { Form } from "@unform/web";

import InputText from '../../InputText';

function Information() {
  const user = useState('')

  const handleSubmit = (formData) => {
  };

  return (
    <S.Container>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <div className="space">
            <InputText
              text="Nome:"
              type="text"
              name="nome"
              value={user.name}
            />
          </div>
          <div className="space">
            <InputText
              text="Email:"
              type="email"
              name="email"
              value={user.email}
            />
          </div>
          <div className="space">
            <InputText text="Senha:" type="password" name="senha" />
          </div>
          <div className="space">
            <InputText
              text="Telefone:"
              type="tel"
              name="telefone"
              value={user.telephone}
            />
          </div>
        </Form>
        </div>
    </S.Container>
  );
}

export default Information;