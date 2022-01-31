import React from 'react';

import * as S from './styles';

function GridChannels({ children }) {
  return (
    <S.Container>
      <S.Grid>
        {children}
      </S.Grid>
    </S.Container>
  );
}

export default GridChannels;