import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import * as S from './styles';
import appStore from '../../assets/apple-logo.png';
import googlePlay from '../../assets/android-logo.png';
import instagram from '../../assets/instagram-yellow.png';
import facebook from '../../assets/facebook-yellow.png';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import elo from '../../assets/elo.png';
import hipercard from '../../assets/hipercard.png';

import { useHistory } from 'react-router';
import LogoRetiro from "../../assets/logoretiro.png";
function Footer() {
 
  const history = new useHistory()
  return (
    <S.Container>
      <S.Content>
        <S.Info>
          {/* */}
          <S.Box>
          <h3>Formas de pagamento disponíveis:</h3>
            <S.Line>
              <img src={visa} alt="logo visa" />
              <img src={mastercard} alt="logo mastercard" />
              <img src={elo} alt="logo elo" />
              <img src={hipercard} alt="logo hipercard" />

            </S.Line> 
          </S.Box>

          <S.Box>
            <h3>Siga-nos nas redes sociais:</h3>
            <S.Social>
              {/* <img styles='height:15px' src={facebook} alt="logo do facebook" /></a>
               <img src={instagram} alt="logo do instagram" /></a> */}
              <a href="https://www.facebook.com/palcowebbrasil" target='blank'> <img styles='height:15px' src={facebook} alt="logo do facebook" /></a>
              <a href="https://www.instagram.com/palco.web/" target='blank'> <img src={instagram} alt="logo do instagram" /></a>
              {/** 
               * 
               * 
                <img src={twitter} alt="logo do twitter" />
                <img src={tiktok} alt="logo do tiktok" />
                <img src={linkedin} alt="logo do linkedin" />
                <img src={youtube} alt="logo do youtube" />
               * 
              */}

            </S.Social>


           <span className="mt-3"> <S.Span cor="black" bg="#FFC107" className="p-1"><i className="bi bi-envelope"></i></S.Span> Ouvidoria@mercadata.com.br</span>
           
          </S.Box>

          <S.Box >
           
            <S.SpanDoe cor="#FFF" onClick={()=> history.push('/colaboracao')}>Doe para retiro dos artistas <S.imglogo style={{width:'100px'}} src={LogoRetiro}></S.imglogo> </S.SpanDoe>

            {/* <S.Line>
              <img src={pagseguro} alt="logo pagseguro" />
              <img src={applepay} alt="logo applepay" />
              <img src={gpay} alt="logo gpay" />
            </S.Line> */}

            {/* <S.Line>
              <img src={boleto} alt="logo boleto" />
            </S.Line> */}
          </S.Box>
        </S.Info>

        <S.Mercadata>
          <span className="rodape">Copyright
            <FaRegCopyright />
            2020. Criado por Mercadata Digital. Todos os direitos reservados.</span>
        </S.Mercadata>
      </S.Content>
    </S.Container>
  );
}

export default Footer;