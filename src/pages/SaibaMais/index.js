import React from "react";
import * as S from "./styles";
import Layout from "../../layout";

function SaibaMais() {
  return (
    <Layout>
      <S.Container>
        <S.Espaco>
          <iframe
            src="https://mercadata2020.wixsite.com/palcoweb"
            width="80%"
            height="80%"
            frameborder="0"
            title="Responsive iframe example"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </S.Espaco>
        <S.Espaco>
          <iframe
            src="https://player.vimeo.com/video/670828129?h=6365394702&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="VID-20220112-WA0072 (1)"
          ></iframe>
        </S.Espaco>
      </S.Container>
    </Layout>
  );
}

export default SaibaMais;
