import React from "react";

import * as S from "./styles";
import Chart from "../Chart";

import { FaDownload } from "react-icons/fa";
import { MdAddAlert } from "react-icons/md";
import Card from "../Card";
import GiftCard from "../GiftCard";

function Statistics({ show, card, data, total }) {
  return (
    <S.Container>
      <div className="content">
        <div className="contentUp">
          <div className="contentUpLeft">
            {card ? <Card info={card} /> : <GiftCard/>}
            <div className="infos">
              {data.map((item, index) => {
                return (
                  <div key={`${index}`}>
                    <span>{item.icon}</span>
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="contentUpRight">
            <Chart size={400} />
          </div>
        </div>
        <div className="contentDown">
          <div className="contentDownLeft">
            {show ? (
              <div className="button">
                <MdAddAlert />
                <span>IMPULSIONAR</span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="contentDownCenter">
            {show ? (
              <h4>faturamento do espetáculo</h4>
            ) : (
              <h4>faturamento do produto</h4>
            )}
            <p>{total}</p>
          </div>
          <div className="contentDownRight">
            <FaDownload />
            <span>relatório (pdf)</span>
          </div>
        </div>
      </div>
    </S.Container>
  );
}

export default Statistics;
