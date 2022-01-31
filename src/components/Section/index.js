import React, { useState } from "react";

import * as S from "./styles";
import FilterDrop from "../FilterDrop";

function Section({ children, title, filter }) {
  const [appears, setAppears] = useState(true);

  return (
    <>
      {!filter ? (
        <S.Container >
          <S.Text>{title}</S.Text>
          {children}
        </S.Container>
      ) : (
        <S.Container>
          <S.Title>
            <S.Text>{title}</S.Text>
            <S.Filter>
              <FilterDrop visible={appears} setVisible={setAppears} />
            </S.Filter>
          </S.Title>

          {children}
        </S.Container>
      )}
    </>
  );
}

export default Section;
