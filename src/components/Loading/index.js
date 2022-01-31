import React from "react";
import { MdSync } from "react-icons/md";
import theme from "../../theme";

import * as S from "./styles";

function Loading({size}) {
  return (
    <S.Container>
      <div className="icon">
        <MdSync size={size} color={theme.palette.primary.main} />
      </div>
    </S.Container>
  );
}

export default Loading;
