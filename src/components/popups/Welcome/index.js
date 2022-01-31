import React from 'react';
import ReactPlayer from 'react-player';

import * as S from './styles';
import PopUp from '../../../components/Popup';
import apresentation from '../../../assets/apresentation.mp4';

function Welcome({visible, changeVisible}) {
  return (
    <S.Container>
      <PopUp visible={visible} changeVisible={changeVisible}>
        <ReactPlayer url={apresentation} 
          width="100%"
          height="90%"
          loop='true'
          playing={true}
        />

      </PopUp>
    </S.Container>
    )
}

export default Welcome;