import React, { useState } from "react";

import * as S from "./styles";

function Switch({ size, handlePress, id }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.Container
        opened={open}
        size={size}
        onClick={() => {
          handlePress(id, open);
          setOpen(!open);
        }}
      >
        <div className="circle" />
      </S.Container>
    </>
  );
}

export default Switch;
