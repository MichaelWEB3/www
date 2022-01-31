import React, { useState, createContext } from "react";

const EspetaculoSelecionado = createContext({});

export function ListaEspetaculosProvider(props) {
  const [listaEspetaculosDoUsuario, setlistaEspetaculosDoUsuario] = useState({});
  const [listaPlanos, setListaPlanos] = useState({});
  const [pagou, setPagou] = useState(null);

  async function AdicionarPlanos(objeto) {
    if (objeto) {
      await setListaPlanos(objeto);
    }
  }

  async function AdicionarEspetaculos(objeto) {
    if (objeto.key) {
      await setlistaEspetaculosDoUsuario(objeto);
    } else {
    }
  }

  return (
    <EspetaculoSelecionado.Provider
      value={{
        AdicionarEspetaculos,
        listaEspetaculosDoUsuario,
        pagou,
        setPagou,
        AdicionarPlanos,
        listaPlanos,
      }}
    >
      {props.children}
    </EspetaculoSelecionado.Provider>
  );
}

export default EspetaculoSelecionado;
