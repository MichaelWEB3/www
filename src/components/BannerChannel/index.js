import React, { useState } from "react";

import * as S from "./styles";

import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

import { useParams } from "react-router-dom";

import Channel from "../../Connections/channel";

const BannerChannel = ({ ViewSocialButtons }) => {

  const channel = new Channel();
  const { id } = useParams();

  const [channelInfo, setChannelInfo] = useState(null);

  const getContent = async () => {
    try {
      const recieved = await channel.getContent(id);
      const infochannel = await channel.getChannel(recieved.data.channel.key);
      setChannelInfo(infochannel.data);
    } catch (e) {
    }
  };

    getContent();


  

  if (ViewSocialButtons === true) {
    return (
     <>
     {channelInfo ? <> 
      <S.Container>
        <S.Content>
          <S.TextStyles className="textCenter">
            <h1>{channelInfo.name}</h1>
          </S.TextStyles>
        </S.Content>
      </S.Container>
     
     </> : null}
     </>
    );
  }
  return (
    <S.Container>
      <S.Content>
        <S.TextStyles>
          {/* <h1>{content.item.channel === undefined ? null : content.item.channel.name}</h1>
          <h3>{content !== null ? content.item.genere : null}</h3> */}
        </S.TextStyles>
        <S.ContainerCentral>
          <S.TextInformation>
            {/* <p>
              Organização genuinamente nacional. Com 17 anos no mercado, a
              empresa conta com 50 colaboradores diretos. Realiza produção de
              grandes espetáculos.
            </p> */}
          </S.TextInformation>
        </S.ContainerCentral>

        <div className="end">
          <S.SocialButtons>
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="logo do facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="logo do facebook" />
            </a>
            <a href="https://twitter.com">
              <img src={twitter} alt="logo do facebook" />
            </a>
            <a href="https://www.linkedin.com//">
              <img src={linkedin} alt="logo do facebook" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtube} alt="logo do facebook" />
            </a>
          </S.SocialButtons>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default BannerChannel;
