import React from 'react';

import * as S from './styles';

import GridChannels from "../../../components/GridChannels";
import CardChannel from "../../../components/CardChannels";

import forFriends from "../../../assets/ForFriends.png";
import friendsCircular from "../../../assets/friends.png";
import bestWorlds from "../../../assets/melhoresDoMundo.png";
import treeFreendes from "../../../assets/treeFreendsLogo.png";
import turma from "../../../assets/turma.png";

function ChannelFavorites() {
  return (
    <S.Container>
      <div className="grid">
          <GridChannels>
            <CardChannel
              background={turma}
              title="Em cena"
              logoCircular={bestWorlds}
            />
            <CardChannel
              background={turma}
              title="Em cena"
              logoCircular={forFriends}
            />
            <CardChannel
              background={forFriends}
              title="Em cena"
              logoCircular={friendsCircular}
            />
            <CardChannel
              background={turma}
              title="Em cena"
              logoCircular={bestWorlds}
            />
            <CardChannel
              background={treeFreendes}
              title="Em cena"
              logoCircular={turma}
            />
            <CardChannel
              background={forFriends}
              title="Em cena"
              logoCircular={turma}
            />
            <CardChannel
              background={turma}
              title="Em cena"
              logoCircular={bestWorlds}
            />
            <CardChannel
              background={turma}
              title="Em cena"
              logoCircular={bestWorlds}
            />
          </GridChannels>
        </div>
    </S.Container>
  );
}

export default ChannelFavorites;