import React, { useState, useEffect } from "react";

import * as S from "./styles";

function AnimetedInfo({ toShow, info }) {
  const [data, setData] = useState(info);
  const [toRender, setToRender] = useState([]);

  const pressed = (value) => {
    let newArr = info;

    const setted = newArr.filter((e) => {
      return e.title !== value;
    });

    setData(setted);

    return value;
  };

  // const imgToShow = (value, text) => {
  //   return <img className={text} src={value} alt="toshow" />;
  // };

  useEffect(() => {
    let newArr = info;

    const setted = newArr.filter((e) => {
      return e.title !== toShow;
    });

    setData(setted);

    const toSet = info.filter((e) => {
      return e.title === toShow;
    });
    const obj = toSet.pop();
    setToRender([
      {
        text: obj.title,
        content: obj.text,
        src: obj.src,
      },
    ]);
  }, [info, toShow]);

  return (
    <S.Container>
      <div className="firstSection">
        {data.map((item, index) => {
          return (
            <div
              className="roundContent"
              key={`${index}`}
              onClick={() => {
                setToRender([
                  {
                    text: item.title,
                    content: item.text,
                    src: item.src,
                  },
                ]);
                pressed(item.title);
              }}
            >
              <S.Img src={item.src} alt="fotos" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      {toRender.map((item, index) => {
        return (
          <div className="secondSection" key={`${index}`}>
            <div className="left">
              <img className={item.text} src={item.src} alt="toshow" />
            </div>
            <div className="right">
              <strong>{item.text}</strong>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </S.Container>
  );
}

export default AnimetedInfo;
