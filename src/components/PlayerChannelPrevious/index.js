import React from 'react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import * as S from './styles';
import ReactPlayer from 'react-player';
import facebook from '../../assets/facebookYellow.png';
import twitter from '../../assets/twitterYellow.png';
import linkedin from '../../assets/linkedinYellow.png';

const PlayerChannelPrevious = ({ info , admin }) => {


  return (
    <S.Container>
      <S.ContentPlayer>
        <ReactPlayer
          className='reactPlayer'
          url={info ?  info.teaser ? info.teaser.url : null : null}
          width="100%"
          height="100%"
          controls={true}
          playing={false}
        />
        {admin === true ?
          <div className='absolute' >
            <div className='modeAdmin' onClick={() => alert('teaser alterado')} >
              <p>alterar teaser</p>
              <AiOutlineVideoCamera />
            </div>
          </div> :
          <> </>}

      </S.ContentPlayer>

      <S.CircularBanner>
        <img src={info ? info.thumbnail ? info.thumbnail.url : null : null} alt='logo chain' />

      </S.CircularBanner>

      <S.TextInformation >
        <p>{ info ? info.bio : null}</p>
      </S.TextInformation>

      <S.SocialButtons>
        <a target= "_blank" href={info ? info.facebook_url : ""}  >
          <img src={facebook} alt="logo do facebook" />
        </a>
        {/* <a href="https://www.instagram.com/" target='_blank' >
          <img src={instagram} alt="logo do facebook" />
        </a> */}
        <a target= "_blank" href={info ? info.twitter_url: ""}  >
          <img src={twitter} alt="logo do facebook" />
        </a>
        <a target= "_blank" href={info ? info.linkedin_url : ""}  >
          <img src={linkedin} alt="logo do facebook" />
        </a>
        {/* <a href="https://www.youtube.com/" >
          <img src={youtube} alt="logo do facebook" />
        </a> */}
      </S.SocialButtons>
    </S.Container>
  );
}

export default PlayerChannelPrevious;