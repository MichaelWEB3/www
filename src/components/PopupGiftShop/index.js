/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegCheckCircle, FaPlusCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

import * as S from './styles';

import PopupAdmin from '../PopupAdmin';

import vestuario from '../../assets/vestuario.png';
import acessorios from '../../assets/acessorios.png';
import decoracao from '../../assets/decoracao.png';
import livros from '../../assets/livros.png';

function PopupGiftShop({ changeModal }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [tamanho, setTamanho] = useState([]);
  const [color, setColor] = useState([]);
  const [photos, setPhotos] = useState([
    { img: '', status: false },
    { img: '', status: false },
    { img: '', status: false },
    { img: '', status: false }]);

  const [number, setNumber] = useState();
  const [refresh, setRefresh] = useState();

  const [first, setFirst] = useState(true);
  const [categoria, setCategoria] = useState('');


  const tamanhosAdultos = ['PP', 'P', 'M', 'G', 'GG', 'G2', 'G4', '34', '36', '38', '40', '42', '44', '46', '48', '50', '52', '54', '56', '58', '60', 'U'];
  const tamanhosInfantis = ['PP', 'P', 'M', 'G', 'GG', 'U', '2', '4', '6', '8', '10', '12', '14', '16'];
  const tamanhosBebe = ['0', '02', '03', '04', '06', '08', '10', '1', 'U'];
  const colors = ['#FF0000', '#EA4A8D', '#FFD2E5', '#B200F0', '#EDBAFF', '#113988', '#95D3FF', '#32736F', '#7EE9E2', '#2AB230', '#00FF0A', '#CCFF00', '#FFF500', '#FDCC12', '#C18D28', '#644B1B', '#FF8A00', '#A51212', '#000000', '#D2D2D2', '#FFFFFF'];

  const changeInputText = (name, e) => {
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'value':
        setValue(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };

  const selectTamanho = (tipo, tamanhoSelect) => {
    const haveTam = tamanho.filter((tam, index) => {
      if (tam.tipo === tipo && tam.tamanho === tamanhoSelect) {
        return tam;
      }
    });

    if (haveTam.length === 0) {
      setTamanho([...tamanho, { tipo, tamanho: tamanhoSelect }]);
    } else {
      const allTamanhos = tamanho.filter((tam, index) => {
        if (!(tam.tipo === haveTam[0].tipo && tam.tamanho === haveTam[0].tamanho)) {
          return tam;
        }
      });
      setTamanho(allTamanhos);
    }
  };

  const checkTamanho = (tipo, tamanhoSelect) => {
    const haveTam = tamanho.filter((tam, index) => {
      if (tam.tipo === tipo && tam.tamanho === tamanhoSelect) {
        return tam;
      }
    });

    if (haveTam.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const selectColor = (colorCurr) => {
    if (color.includes(colorCurr)) {
      const allColors = color.filter((c) => c !== colorCurr);
      setColor(allColors);
    } else {
      setColor([...color, colorCurr]);
    }
  };

  const checkColor = (colorCurr) => {
    if (color.includes(colorCurr)) {
      return true;
    } else {
      return false;
    }
  }

  const getFile = async (value) => {
    let file = value.target.files[0];
    const data = new FormData();
    data.append("file", file, file.name);
    const toRead = URL.createObjectURL(file);

    const newArray = photos

    newArray.splice(number, 1, { name: toRead, status: true })
    setPhotos(newArray)
    setRefresh(!refresh)
  }

  const sendProduct = () => {    
    setFirst(true)
    changeModal()
  }





  return (
    <PopupAdmin
      title='novo produto (giftshop)'
      changeVisible={changeModal}
    >
      {first ? (
        <>
          <S.Photos>
            <S.Photo
              define
              onClick={() => setCategoria('vestuario')}
              color={categoria === 'vestuario' ? true : false}
            >
              <img src={vestuario} alt="vestuário" />
              vestuário
            </S.Photo>
            <S.Photo
              define
              onClick={() => setCategoria('acessorios')}
              color={categoria === 'acessorios' ? true : false}
            >
              <img src={acessorios} alt="acessorios" className='acessorios' />
              acessórios
            </S.Photo>
            <S.Photo
              define
              onClick={() => setCategoria('decoracao')}
              color={categoria === 'decoracao' ? true : false}
            >
              <img src={decoracao} alt="decoracao" />
              decoração
            </S.Photo>
            <S.Photo
              define
              onClick={() => setCategoria('livros')}
              color={categoria === 'livros' ? true : false}
            >
              <img src={livros} alt="livros"
                className='books' />
              livros
            </S.Photo>
          </S.Photos>
          <S.Button>
            <button onClick={() => setFirst(false)}>
              Prosseguir
              <BsArrowRight />
            </button>
          </S.Button>
        </>
      ) :
        (
          <S.Container>
            <S.Photos>
              {photos.map((photo, index) => {
                if (!photo.status) {
                  return (
                    <S.Photo key={String(index)}>
                      <input
                        onChange={(e) => getFile(e, 'onChange')}
                        name="imgProduct"
                        type="file"
                        accept=".png, .jpeg"
                        id="input"
                        style={{ display: "none" }}

                      />
                      <label htmlFor="input"
                        onClick={() => setNumber(index)} >
                        <FaPlusCircle />
                      </label>
                  Adicionar Foto
                    </S.Photo>
                  )} else {
                    return (                      
                      <div className='imgUpload' key={String(index)}>
                        <img className='contain' src={photo.name} alt=''/>
                      </div>                      
                    )
                  }
              })}
            </S.Photos>
            <S.InputText>
              <input
                type="text"
                value={name}
                onChange={(e) => changeInputText('name', e)}
                placeholder='Nome do produto'
              />
            </S.InputText>
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
            <S.InputText color>
              <input
                type="text"
                value={value}
                onChange={(e) => changeInputText('value', e)}
                placeholder='R$ VALOR DO PRODUTO'
                className="valor"
              />
            </S.InputText>
            <S.InputText>
              <textarea
                value={description}
                onChange={(e) => changeInputText('description', e)}
                placeholder="Descrição do produto. Aproveite para adicionar informações de modelagem, medidas, material e outras especificações importantes."
              />
            </S.InputText>
            <S.Tamanhos>
              <h3>Tamanhos disponíveis</h3>
              <S.Options>
                <S.LineOptions>
                  {tamanhosAdultos.map((tamanho, index) =>
                    <S.ButtonOption
                      key={String(index)}
                      onClick={() => selectTamanho('adulto', tamanho)}
                      color={checkTamanho('adulto', tamanho)}
                    >
                      {tamanho}
                    </S.ButtonOption>
                  )}
                </S.LineOptions>
                <S.Title>Infantil</S.Title>
                <S.LineOptions>
                  {tamanhosInfantis.map((tamanho, index) =>
                    <S.ButtonOption
                      key={String(index)}
                      onClick={() => selectTamanho('infantil', tamanho)}
                      color={checkTamanho('infantil', tamanho)}
                    >
                      {tamanho}
                    </S.ButtonOption>
                  )}
                </S.LineOptions>
                <S.Title>Bebê</S.Title>
                <S.LineOptions>
                  {tamanhosBebe.map((tamanho, index) =>
                    <S.ButtonOption
                      key={String(index)}
                      onClick={() => selectTamanho('bebe', tamanho)}
                      color={checkTamanho('bebe', tamanho)}
                    >
                      {tamanho}
                    </S.ButtonOption>
                  )}
                </S.LineOptions>
              </S.Options>
            </S.Tamanhos>

            <S.Colors>
              <h3>Cores disponíveis</h3>
              <S.ColorOptions>
                {colors.map((color, index) =>
                  <S.Color
                    key={String(index)}
                    cor={color}
                    select={checkColor(color)}
                    onClick={() => selectColor(color)}
                  />)}
              </S.ColorOptions>
            </S.Colors>

            <S.Button>
              <button onClick={sendProduct}>
                FINALIZAR
                <FaRegCheckCircle />
              </button>
            </S.Button>
          </S.Container>
        )
      }
    </PopupAdmin>
  );
}

export default PopupGiftShop;