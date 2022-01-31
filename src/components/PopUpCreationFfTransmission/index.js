import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import * as S from './styles';

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import clock from '../../assets/clock-white.png';
import calendar from '../../assets/calendar-white.png';

import PopupAdmin from '../../components/PopupAdmin';

function PopUpCreationFfTransmission({ changeVisible }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [artista, setArtista] = useState(['']);
  const [empresa, setEmpresa] = useState(['']);
  const [diretor, setDiretor] = useState(['']);
  const [escritor, setEscritor] = useState(['']);
  const classificacoes = ['L', '12', '14', '16', '18'];
  const [classificacao, setClassificacao] = useState('L');
  const [value, setValue] = useState('');
  const genres = ['Comédia', 'Fantasia', 'Remake', 'Romance', 'Musical', 'Stand-up', 'Drama', 'Monólogo', 'Sátira', 'Ação', 'Clássico', 'Infantil'];
  const [genreNames, setGenreNames] = useState([]);

  const changeGenre = (genre) => {
    if (genreNames.includes(genre)) {
      const allGenres = genreNames.filter(genreCurr => genreCurr !== genre && genreCurr);
      setGenreNames(allGenres);
    } else {
      setGenreNames([...genreNames, genre]);
    }
  };

  const newArtista = () => {
    const newArtista = '';
    setArtista((old) => [...old, newArtista]);
  };

  const changeValue = (e, index) => {
    const artistaCopy = artista.map((participante, indexNum) => {
      if (index === indexNum) {
        return participante = e.target.value;
      } else {
        return participante;
      }
    });
    setArtista(artistaCopy);
  };

  const newEmpresa = () => {
    const newEmpresa = '';
    setEmpresa((old) => [...old, newEmpresa]);
  }

  const changeEmpresa = (e, index) => {
    const empresaCopy = empresa.map((empresa, indexNum) => {
      if (index === indexNum) {
        return empresa = e.target.value;
      } else {
        return empresa;
      }
    });
    setEmpresa(empresaCopy);
  };

  const newDiretor = () => {
    const newDiretor = '';
    setDiretor((old) => [...old, newDiretor]);
  }

  const changeDiretor = (e, index) => {
    const diretorCopy = diretor.map((directo, indexNum) => {
      if (index === indexNum) {
        return directo = e.target.value;
      } else {
        return directo;
      }
    });
    setDiretor(diretorCopy);
  };

  const newEscritor = () => {
    const newEscritor = '';
    setEscritor((old) => [...old, newEscritor]);
  }

  const changeEscritor = (e, index) => {
    const escritorCopy = escritor.map((write, indexNum) => {
      if (index === indexNum) {
        return write = e.target.value;
      } else {
        return write;
      }
    });
    setEscritor(escritorCopy);
  };

  return (
    <PopupAdmin title='nova transmissão ao vivo' >
      <S.Container>

        <div className='card'>

        </div>

        <div className='inputs'>
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
          <S.Title>Elenco</S.Title>
          <S.InputPlus>
            {artista.map((artistas, index) => {
              if (Number(index) === artista.length - 1) {
                return (
                  <div className='inline'>
                    <input
                      type="text"
                      placeholder='Nome do(a) ator/atriz'
                      value={artistas}
                      onChange={(e) => changeValue(e, index)}
                    />
                    <button onClick={newArtista}>+</button>
                  </div>
                )
              } else {
                return (
                  <input
                    type="text"
                    placeholder='Nome do(a) ator/atriz'
                    value={artista[index]}
                    onChange={(e) => changeValue(e, index)}
                  />
                )
              }
            })}
          </S.InputPlus>
          <S.Title>produção</S.Title>
          <S.InputPlus>
            {empresa.map((empresas, index) => {
              if (Number(index) === empresa.length - 1) {
                return (
                  <div className='inline'>
                    <input
                      type="text"
                      placeholder='Empresa/produtor(a) indepedente'
                      value={empresas}
                      onChange={(e) => changeEmpresa(e, index)}
                    />
                    <button onClick={newEmpresa}>+</button>
                  </div>
                )
              } else {
                return (
                  <input
                    type="text"
                    placeholder='Empresa/produtor(a) indepedente'
                    value={empresa[index]}
                    onChange={(e) => changeEmpresa(e, index)}
                  />
                )
              }
            })}
          </S.InputPlus>
          <S.Title>direção</S.Title>
          <S.InputPlus>
            {diretor.map((diretores, index) => {
              if (Number(index) === diretor.length - 1) {
                return (
                  <div className='inline'>
                    <input
                      type="text"
                      placeholder='Nome do(a) diretor/diretora'
                      value={diretores}
                      onChange={(e) => changeDiretor(e, index)}
                    />
                    <button onClick={newDiretor}>+</button>
                  </div>
                )
              } else {
                return (
                  <input
                    type="text"
                    placeholder='Nome do(a) diretor/diretora'
                    value={diretor[index]}
                    onChange={(e) => changeDiretor(e, index)}
                  />
                )
              }
            })}
          </S.InputPlus>
          <S.Title>escritor</S.Title>
          <S.InputPlus>
            {escritor.map((escritores, index) => {
              if (Number(index) === escritor.length - 1) {
                return (
                  <div className='inline'>
                    <input
                      type="text"
                      placeholder='Nome do(a) escritor(a)'
                      value={escritores}
                      onChange={(e) => changeEscritor(e, index)}
                    />
                    <button onClick={newEscritor}>+</button>
                  </div>
                )
              } else {
                return (
                  <input
                    type="text"
                    placeholder='Nome do(a) escritor(a)'
                    value={escritor[index]}
                    onChange={(e) => changeEscritor(e, index)}
                  />
                )
              }
            })}
          </S.InputPlus>

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
          <div className="genre">
            <div className="genreText"> Gênero</div>
            <div className="genreBoxContainer">
              {genres.map((item, index) =>
                <S.GenreBox key={index}
                  onClick={() => changeGenre(item)}
                  color={genreNames.includes(item)}>
                  {item}
                </S.GenreBox>
              )}
            </div>
          </div>

          <S.InputValue>
            <input type="text" placeholder='R$ VALOR DE VENDA' value={value} onChange={(e) => setValue(e.target.value)} />
          </S.InputValue>

          <S.Button>
            <button>
              Finalizar
                <IoIosCheckmarkCircleOutline />
            </button>
          </S.Button>
        </div>

      </S.Container>
    </PopupAdmin >
  );
}

export default PopUpCreationFfTransmission;