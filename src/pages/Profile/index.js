import React, { useState, useEffect } from "react";

import * as S from "./styles";
import BaseScreen from "../../components/BaseScreen";
import CVV from "../../components/CVV";
import Button from "../../components/Button";
import VerticalMenu from "../../components/VerticalMenu";
import RoundedImage from "../../components/RoundedImage";

import person from "../../assets/placeholder-profile-male.jpg";

import { useHistory } from "react-router-dom";
import { useUser, useIsLogged } from "../../hooks/user";

import Payment from "../../components/TabsMenu/payment";
import ChannelFavorites from "../../components/TabsMenu/ChannelFavorites";
import Shopping from "../../components/TabsMenu/Shopping";
import Information from "../../components/TabsMenu/Information";
import Configuration from "../../components/TabsMenu/Configuration";

import CreateChannel from "../../components/CreateChannel";

import PopupAdmin from "../../components/PopupAdmin";

function Profile() {
  const [user, loadingUser] = useUser(true);
  const isLogged = useIsLogged();
  const [poupUp, setpoupUp] = useState(false);

  const history = useHistory();

  const [pressed, setPressed] = useState({
    status: true,
    text: "config",
  });

  const calculateBirthday = () => {
    const splited = user.birthday.split("/");

    const birthday = new Date(`${splited[1]}/${splited[0]}/${splited[2]}`);
    const ageDif = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDif);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    if (!isLogged || (!user && !loadingUser)) {
      history.replace("/");
    }
  }, [history, isLogged, loadingUser, user]);

  const handlePage = (value) => {
    if (value === "pagamento") {
      return <Payment pressed={setPressed} />;
    }

    if (value === "CVV") {
      return (
        <div className="containerCVV">
          <CVV />
          <div className="button">
            <Button
              text="Voltar"
              onClick={() => setPressed({ status: true, text: "pagamento" })}
            />
          </div>
        </div>
      );
    }

    if (value === "favoritos") {
      return <ChannelFavorites />;
    }

    if (value === "compras") {
      return <Shopping />;
    }

    if (value === "informacoes") {
      return <Information />;
    }

    if (value === "config") {
      return <Configuration />;
    }
  };

  const createChanel = () => {
    setpoupUp(!poupUp);
  };

  return (
    <BaseScreen>
      {poupUp && (
        <PopupAdmin title={"novo canal"} changeVisible={createChanel}>
          <CreateChannel changeVisible={createChanel} />
        </PopupAdmin>
      )}
      <S.Container>
        {user && (
          <>
            <div className="menu">
              <div className="roundedImage">
                <RoundedImage
                  photo={person}
                  name={user.name.split(" ")[0]}
                  age={calculateBirthday()}
                  text
                  className="roudedImage"
                />
              </div>
              <VerticalMenu
                pressed={setPressed}
                poupup={setpoupUp}
                status={poupUp}
              />
            </div>
            {pressed.status ? <>{handlePage(pressed.text)}</> : <></>}
          </>
        )}
      </S.Container>
    </BaseScreen>
  );
}

export default Profile;
