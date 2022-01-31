import { useContext } from "react";
import EspetaculoSelecionado from "../context/listaEspetaculosContext";

const useDadosList = ()=> useContext(EspetaculoSelecionado)


export default useDadosList