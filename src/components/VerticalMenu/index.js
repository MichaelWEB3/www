import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Button from "../Button";

import { BsHeartFill, BsFillGearFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { IoIosInformation } from "react-icons/io";
import { AiFillCreditCard } from "react-icons/ai";

import { useHistory } from "react-router-dom";

import User from "../../Connections/user";


function VerticalMenu({ pressed , poupup, status}) {
  const history = useHistory();
  const [visible, setVisible] = useState({ isAble: false, hasChannel: false });
  const [channelId, setChannelId] = useState();
  const [ refresh , setRefresh] = useState(false)
 

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    userInfo();
  }, [status, refresh]);

  const userInfo = async () => {
    const user = new User();
    const isAble = await user.ableToCreateChannel();
    const hasChannel = await user.userHasChannel();

    setChannelId(isAble.channel);

    setVisible({
      isAble: isAble.status,
      hasChannel: hasChannel,
    });
  };

  const deleteChannel = async () => {
    try {
      setRefresh(!refresh)
    } catch (e) {
    }
  };

  return (
    <S.Menu>
      <S.MenuItem onClick={() => pressed({ status: true, text: "favoritos" })}>
        <BsHeartFill className="Heart" />
        <p className="MenuText">Canais Favoritos</p>
      </S.MenuItem>

      <S.MenuItem onClick={() => pressed({ status: true, text: "compras" })}>
        <div className="IconBackground">
          <MdShoppingCart className="MenuIcon" />
        </div>

        <p className="MenuText">Minhas Compras</p>
      </S.MenuItem>

      <S.MenuItem
        onClick={() => pressed({ status: true, text: "informacoes" })}
      >
        <div className="IconBackground">
          <IoIosInformation className="MenuIconInfo" />
        </div>

        <p className="MenuText">Informações Pessoais</p>
      </S.MenuItem>

      <S.MenuItem onClick={() => pressed({ status: true, text: "pagamento" })}>
        <div className="IconBackground">
          <AiFillCreditCard className="MenuIcon" />
        </div>

        <p className="MenuText">Assinatura e pagamento</p>
      </S.MenuItem>

      <S.MenuItem onClick={() => pressed({ status: true, text: "config" })}>
        <div className="IconBackground">
          <BsFillGearFill className="MenuIcon" />
        </div>

        <p className="MenuText"> Outras configurações</p>
      </S.MenuItem>

      <div className={"Button"}>
        <Button text={"Torne-se membro"} onClick={() => alert("teste")} />
      </div>

      {visible.isAble ? (
        <>
          {visible.hasChannel ? (
            <>
            <div className={"Button"}>
              <Button
                text={"Meu canal"}
                onClick={() => history.push(`/channel/${channelId}`)}
              />
            </div>
             <div className={"Button"}>
             <Button
               text={"Excluir Canal"}
               onClick={() => deleteChannel()}
               color="#ff414d"
             />
           </div>
           </>
          ) : (
            <div className={"Button"}>
              <Button
                text={"Criar canal"}
                onClick={() => poupup(true)}
              />
            </div>
          )}
        </>
      ) : (
        <> </>
      )}
    </S.Menu>
  );
}

export default VerticalMenu;
