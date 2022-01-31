import React, { useState } from "react";

import * as S from "./styles";

import { MdFilterList } from "react-icons/md";

function FilterDrop({ visible, setVisible, setFiltered , arrayToFilter}) {
  const [refresh, setRefresh] = useState(true);
  const [recieved, setRecieved] = useState([
    { item: "Camisas", status: false },
    { item: "Familia", status: false },
    { item: "Drama", status: false },
    { item: "Terror", status: false },
    { item: "Romance", status: false },
    { item: "Musical", status: false },
    { item: "Infantil", status: false },
    { item: "Palestras", status: false },
    { item: "Batata", status: false },
  ]);

//   useEffect(()=>{
//     setRecieved(arrayToFilter)
//   },[])

//   const sendToFilter = () => {
//     setFiltered(recieved);

//   };

  const isSelected = (value, index) => {
    let setted = "";
    if (!value.status) {
      setted = { item: value.item, status: true }; 
    } else {
      setted = { item: value.item, status: false };
    }

    let newArr = recieved;

    newArr.splice(index, 1, setted);

    setRecieved(newArr);
    setRefresh(!refresh);
  };


  return (
    <>
      {visible ? (
        <S.Container>
          <S.Content visible={visible}>
            <button onClick={() => setVisible(!visible)}>
              filtrar por<p>/</p>
              <MdFilterList size={20} color={"white"} />
            </button>
          </S.Content>
        </S.Container>
      ) : (
        <S.Container>
          <S.Content visible={visible}>
            <button
              onClick={() => {
                setVisible(!visible);
                // sendToFilter();
              }}
            >
              filtrar por <p>/</p>
              <MdFilterList size={20} color={"white"} />
            </button>
            {recieved.map((ele, index) => {
              return (
                <S.FilterItem
                  key={`${index}`}
                  onClick={() => isSelected(ele, index)}
                >
                  <S.VerifyCircle selected={ele.status} />
                  <S.TextFilter selected={ele.status}>{ele.item}</S.TextFilter>
                </S.FilterItem>
              );
            })}
          </S.Content>
        </S.Container>
      )}
    </>
  );
}

export default FilterDrop;
