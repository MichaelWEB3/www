import React from "react";

import * as S from "./styles";

function Button({ onClick, type, color, textColor, text }) {
  return (
    <S.Container>
      <S.Button
        onClick={onClick}
        type={type}
        color={color}
        textColor={textColor}
      >
        <p>{text}</p>
      </S.Button>
    </S.Container>
  );
}

export default Button;
