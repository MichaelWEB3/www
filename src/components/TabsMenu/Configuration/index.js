import React, { useState } from "react";

import * as S from "./styles";

import { BsPencilSquare } from "react-icons/bs";

import User from "../../../Connections/user";

import { useHistory } from "react-router-dom";

function Configuration() {
  const user = new User();

  const history = useHistory();

  const [optionsPlay, setOptionsPlay] = useState({
    segundoPlano: false,
    legendas: false,
    auto: false,
  });

  const [qualidade, setQualidade] = useState("hd");

  const [downloads, setDownloads] = useState({
    autoUpdate: false,
    wifi: true,
    autoDownload: true,
    dadosMobile: false,
  });

  const [armazenamento, setArmazenamento] = useState("sd");
  const [armazenamentoPC, setArmazenamentoPC] = useState(
    "C:Este computador > Download"
  );

  return (
    <S.Container>
      <S.Config>
        <S.FormGroup>
          <p>opções de reprodução:</p>
          <S.CheckBox>
            <input
              type="radio"
              id="optionsPlaySegPlano"
              value={optionsPlay.segundoPlano}
              checked={optionsPlay.segundoPlano}
              readOnly
              onClick={() =>
                setOptionsPlay({
                  ...optionsPlay,
                  segundoPlano: !optionsPlay.segundoPlano,
                })
              }
            />
            <label htmlFor="optionsPlaySegPlano">
              Reproduzir áudio em segundo plano
            </label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="OptionsPlayLegendas"
              value={optionsPlay.legendas}
              checked={optionsPlay.legendas}
              onClick={() =>
                setOptionsPlay({
                  ...optionsPlay,
                  legendas: !optionsPlay.legendas,
                })
              }
            />
            <label htmlFor="OptionsPlayLegendas">
              Exibir legendas quando possível
            </label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="OptionsPlayAuto"
              value={optionsPlay.auto}
              checked={optionsPlay.auto}
              onClick={() =>
                setOptionsPlay({ ...optionsPlay, auto: !optionsPlay.auto })
              }
            />
            <label htmlFor="OptionsPlayAuto">
              Iniciar próximo capítulo automaticamente
            </label>
          </S.CheckBox>
          <S.Line />
        </S.FormGroup>

        <S.FormGroup>
          <p>qualidade de reprodução:</p>
          <S.CheckBox>
            <input
              type="radio"
              id="auto"
              name="qualidade"
              value="auto"
              checked={qualidade === "auto"}
              onClick={() => setQualidade("auto")}
            />
            <label htmlFor="auto">Automático (se adapta a conexão)</label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="hd"
              name="qualidade"
              value="hd"
              checked={qualidade === "hd"}
              onClick={() => setQualidade("hd")}
            />
            <label htmlFor="hd">Melhor qualidade (HD)</label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="media"
              name="qualidade"
              value="media"
              checked={qualidade === "media"}
              onClick={() => setQualidade("media")}
            />
            <label htmlFor="media">Qualidade média (720p)</label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="baixa"
              name="qualidade"
              value="baixa"
              checked={qualidade === "baixa"}
              onClick={() => setQualidade("baixa")}
            />
            <label htmlFor="baixa">Qualidade baixa (420p)</label>
          </S.CheckBox>
          <span className="smallText">
            (melhor performance em baixas conexões)
          </span>

          <S.Line />
        </S.FormGroup>

        <S.FormGroup>
          <p>downloads:</p>
          <S.CheckBox>
            <input
              type="radio"
              id="downloadsAutoUpdate"
              value={downloads.autoUpdate}
              checked={downloads.autoUpdate}
              onClick={() =>
                setDownloads({
                  ...downloads,
                  autoUpdate: !downloads.autoUpdate,
                })
              }
            />
            <label htmlFor="downloadsAutoUpdate">
              Reproduzir áudio em segundo plano
            </label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="downloadsWifi"
              value={downloads.wifi}
              checked={downloads.wifi}
              onClick={() =>
                setDownloads({ ...downloads, wifi: !downloads.wifi })
              }
            />
            <label htmlFor="downloadsWifi">
              Permitir download em conexão WIFI
            </label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="downloadsAutoDownloads"
              value={downloads.autoDownload}
              checked={downloads.autoDownload}
              onClick={() =>
                setDownloads({
                  ...downloads,
                  autoDownload: !downloads.autoDownload,
                })
              }
            />
            <label htmlFor="downloadsAutoDownloads">
              Continuar downloads automaticamente
            </label>
          </S.CheckBox>
          <S.CheckBox>
            <input
              type="radio"
              id="downloadsDadosMobile"
              value={downloads.dadosMobile}
              checked={downloads.dadosMobile}
              onClick={() =>
                setDownloads({
                  ...downloads,
                  dadosMobile: !downloads.dadosMobile,
                })
              }
            />
            <label htmlFor="downloadsDadosMobile">
              Permitir download em conexão por DADOS MÓVEIS
            </label>
          </S.CheckBox>

          <S.Line />
        </S.FormGroup>

        <S.FormGroup>
          <p className="noSpace">Local de armazenamento no computador:</p>
          <S.InputText>
            <input
              type="text"
              value={armazenamentoPC}
              onChange={(e) => setArmazenamentoPC(e.target.value)}
            />
            <BsPencilSquare />
          </S.InputText>
          <p className="noSpace">Local de armazenamento no celular:</p>
          <S.InlineCheckBox>
            <S.CheckBox>
              <input
                type="radio"
                id="sd"
                name="armazenamento"
                value="sd"
                checked={armazenamento === "sd"}
                onClick={() => setArmazenamento("sd")}
              />
              <label htmlFor="auto">Cartão SD</label>
            </S.CheckBox>
            <S.CheckBox>
              <input
                type="radio"
                id="aparelho"
                name="armazenamento"
                value="aparelho"
                checked={armazenamento === "aparelho"}
                onClick={() => setArmazenamento("aparelho")}
              />
              <label htmlFor="aparelho">memória do aparelho</label>
            </S.CheckBox>
          </S.InlineCheckBox>

          <S.Line />
        </S.FormGroup>
        <a href="http://">Ajuda</a>
        <a href="http://">Ver Termos de uso</a>
        <a href="http://">Ver Termos de política e privacidade</a>

        <S.Button
          onClick={() => {
            user.signOut();
            history.push("/");
          }}
        >
          Encerrar Sessão em todos os aparelhos
          <BsPencilSquare />
        </S.Button>
      </S.Config>
    </S.Container>
  );
}

export default Configuration;
