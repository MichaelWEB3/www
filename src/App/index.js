import React from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import theme from "../theme";
import { AuthProvider } from "../auth/AuthContext";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import Categories from "../pages/Categories";
import GiftShop from "../pages/GiftShop";
import GiftShopAdmin from "../pages/GiftShopAdmin";
import Favorites from "../pages/Favorites";
import Signature from "../pages/Signature";
import PurchaseDetails from "../pages/PurchaseDetails";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import * as S from "./styles";
import Watch from "../pages/Watch";
import AdmLive from "../pages/AdmLive";
import ContentMangement from "../pages/ContentManagement";
import Stats from "../pages/Stats";
import ScrollToTop from "../components/ScrollToTop";
import Cardezao from "../pages/Cardezao";
import Cardezaoassinatura from "../pages/Cardezaoassinatura";
import Login from "../pages/Login/index";
import LoginCart from "../pages/LoginCart/index";
import Cadastro from "../pages/Cadastro/index";
import Pagamento from "../pages/Pagamento/index";
import CadastroCart from "../pages/CadastroCart/index";
import ConfirmCompra from "../pages/ConfirmCompra/index";
import MeuPerfil from "../pages/MeuPerfil/index";
import Espetaculos from "../pages/Espetaculos/index";
import Loja from "../pages/Loja";
import SaibaMais from "../pages/SaibaMais";
import EsqueciSenha from "../pages/EsqueciSenha/index";
import Assinatura from "../pages/Assinatura/index";
import Canais from "../pages/Canais";
import FichaCanal from "../pages/FichaCanal";
import ComponenteVideo from "../pages/ComponenteVideo/index";
import { ListaEspetaculosProvider } from "../dados/context/listaEspetaculosContext";
import Player from "../components/ReactPlayer"
import AssinaturaConteudo from "../pages/AssinaturaConteudo";
import LoginAssinatura from "../pages/LoginAssinatura";
import ProcessaPagamento from "../pages/processaPagamento";
import Colaboracao from "../pages/Colaboracao";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <ListaEspetaculosProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path="/videoplayer">
                <Player></Player>  
              </Route>
              <Route path="/stats/:id">
                <Stats />
              </Route>
              <Route path="/content/management/:id">
                <ContentMangement />
              </Route>
              <Route path="/playespetaculo/:id/:id2">
                <ComponenteVideo />
              </Route>
              <Route path="/SaibaMais">
                <SaibaMais />
              </Route>
              <Route path="/Canais">
                <Canais />
              </Route>
              <Route path="/Assinatura">
                <Assinatura />
              </Route>
              <Route path="/EsqueciSenha">
                <EsqueciSenha />
              </Route>
              <Route path="/admin/live">
                <AdmLive />
              </Route>
              <Route path="/watch/:id">
                <Watch />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/signature">
                <Signature />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/LoginCart/:id">
                <LoginCart />
              </Route>
              <Route path="/LoginAssinatura">
                <LoginAssinatura />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/espetaculos" exact>
                <Espetaculos />
              </Route>
              <Route path="/espetaculos/assinante" exact>
                <AssinaturaConteudo />
              </Route>
              <Route path="/QsvuTjF4CyX5vbGwxWG6HK9qyPY8Ag7Ym5pCYMsJdwVXe3yqfnMdW8vAHDVQysQebd9N4LkvB9M6ktphchCZ7KmEZwy" exact>
                <ProcessaPagamento />
              </Route>
              <Route path="/perfil">
                <MeuPerfil />
              </Route>
              <Route path="/Cadastro/:id">
                <CadastroCart />
              </Route>
              <Route path="/Cadastro">
                <Cadastro />
              </Route>
              <Route path="/ConfirmCompra">
                <ConfirmCompra />
              </Route>
              <Route path="/pagamento">
                <Pagamento />
              </Route>
              <Route path="/auth">
                <Authentication />
              </Route>
              <Route path="/giftshop">
                <GiftShop />
              </Route>
              <Route path="/admin/giftshop">
                <GiftShopAdmin />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/Loja">
                <Loja />
              </Route>
              <Route path="/categorias">
                <Categories />
              </Route>
              <Route path="/purchases/details">
                <PurchaseDetails />
              </Route>
              <Route path="/FichaCanal/:id">
                <FichaCanal />
              </Route>
              <Route path="/cardezao/:id">
                <Cardezao />
              </Route>
              <Route path="/cardassinantes/:id">
                <Cardezaoassinatura />
              </Route>
              <Route path="/colaboracao">
                <Colaboracao></Colaboracao>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
        </ListaEspetaculosProvider>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
