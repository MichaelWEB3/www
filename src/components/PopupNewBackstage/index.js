import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import clock from '../../assets/clock-white.png';
import calendar from '../../assets/calendar-white.png';

import PopupAdmin from '../PopupAdmin';

import * as S from './styles';

function PopupNewBackstage({ changeVisible }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [participantes, setParticipantes] = useState(['']);
  const [classificacao, setClassificacao] = useState('L');
  const [value, setValue] = useState('');
  const classificacoes = ['L', '12', '14', '16', '18'];

  const newParticipant = () => {
    const newParticipant = '';
    setParticipantes((old) => [...old, newParticipant]);
  };

  const changeValue = (e, index) => {
    const participantesCopy = participantes.map((participante, indexNum) => {
      if (index === indexNum) {
        return participante = e.target.value;
      } else {
        return participante;
      }
    });
    setParticipantes(participantesCopy);
  };

  return (
    <PopupAdmin title='modal backstage'>
      <S.Select>
        <select name="selectInput" id="selectInput" required>
          <option disabled selected hidden className='gray' value="">Vincular a conteúdo</option>
          <option value='1'>opção 1</option>
          <option value='2'>opção 2</option>
          <option value='3'>opção 3</option>
          <option value='4'>opção 4</option>
          <option value='5'>opção 5</option>
          <option value='6'>opção 6</option>
        </select>
        <MdKeyboardArrowDown />
      </S.Select>
      <S.Input>
        <input placeholder='Título da transmissão' type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </S.Input>
      <S.InputLongText>
        <textarea placeholder='Descrição' value={description} onChange={e => setDescription(e.target.value)} />
      </S.InputLongText>
      <S.DateTime>
        <S.InputDate>
          <InputMask type='text' value={date} onChange={(e) => setDate(e.target.value)} mask='99/99/9999' maskChar=' ' placeholder='Data de lançamento' />
          <img src={calendar} alt="calendário" />
        </S.InputDate>

        <S.InputTime>
          <InputMask type='text' value={time} onChange={(e) => setTime(e.target.value)} mask='99:99' maskChar=' ' placeholder='Horário' />
          <img src={clock} alt="relógio" />
        </S.InputTime>
      </S.DateTime>
      <S.Title>streamer</S.Title>
      <S.InputParticipantes>
        {participantes.map((participante, index) => {
          if (Number(index) === participantes.length - 1) {
            return (
              <div className='inline'>
                <input
                  type="text"
                  placeholder='Nome do(a) participante'
                  value={participante}
                  onChange={(e) => changeValue(e, index)}
                />
                <button onClick={newParticipant}>+</button>
              </div>
            )
          } else {
            return (
              <input
                type="text"
                placeholder='Nome do(a) participante'
                value={participantes[index]}
                onChange={(e) => changeValue(e, index)}
              />
            )
          }
        }
        )}
      </S.InputParticipantes>


      <S.Classificacao>
        <S.Title>Classificação indicativa</S.Title>
        {classificacoes.map((classi) =>
          <S.ButtonClass
            key={classi}
            onClick={() => setClassificacao(classi)}
            color={classificacao === classi ? true : false}
          >
            {classi}
          </S.ButtonClass>
        )}
      </S.Classificacao>

      <S.InputValue>
        <input type="text" placeholder='R$ VALOR DE VENDA' value={value} onChange={(e) => setValue(e.target.value)} />
      </S.InputValue>

      <S.Button>
        <button>
          Finalizar
                <IoIosCheckmarkCircleOutline />
        </button>
      </S.Button>
    </PopupAdmin>
  );
}

export default PopupNewBackstage;