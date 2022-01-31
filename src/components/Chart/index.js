import React from "react";

import * as S from "./styles";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { MdKeyboardArrowDown } from "react-icons/md";
import theme from "../../theme";

function Chart({ size, data }) {
  const data1 = [
    { x: "Page A", y: 400, z: 300 },
    { x: "Page B", y: 200, z: 500 },
    { x: "Page C", y: 1000, z: 1000 },
    { x: "Page D", y: 500, z: 600 },
    { x: "Page E", y: 5000, z: 900 },
  ];
  return (
    <S.Container size={size}>
      <div className="content">
        <div className="title">
          <p className="titleItem">
            histórico de vendas <MdKeyboardArrowDown size={20} />
          </p>
          <p className="titleItem">
            Período <MdKeyboardArrowDown size={20} />
          </p>
        </div>

        <LineChart
          width={size}
          height={size / 2}
          data={data || data1}
        //   margin={{
        //     top: size / 15,
        //     right: size / 10,
        //     bottom: size / 15,
        //     left: size / 10,
        //   }}
        >
          <Line
            type="monotone"
            dataKey="y"
            stroke={theme.palette.primary.main}
          />
          <Line type="monotone" dataKey="z" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="x" />
          <YAxis />
        </LineChart>

        <div className="bottom">
          <div className="bottomItem">
            <div className="circleColor1" />
            <p>metas</p>
          </div>

          <div className="bottomItem">
            <div className="circleColor2" />
            <p>vendas</p>
          </div>
        </div>
      </div>
    </S.Container>
  );
}

export default Chart;
