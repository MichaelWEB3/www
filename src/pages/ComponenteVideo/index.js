import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import Share from "../../components/CardCompartilhar/index";
import firebase from "firebase"
import axios from "axios";

export default function ComponenteVideo() {
  const history = useHistory();
  const [visualicacao, setvisualicacao] = useState(0);
  const [compartilhar, setcompartilhar] = useState(false);
  const params = useParams("/playespetaculo/:id/:id2/:id3");
  const { id, id2, id3 } = params;

  const [um, setUm] = useState(null);
  const [dois, setDois] = useState(null);
  const [tres, setTres] = useState(null);
  const [quatro, setQuatro] = useState(null);
  const [cinco, setCinco] = useState(null);

  const [validacao, setValidacao] = useState(null);
  const [avaliacaoTotal, setAvaliacaoTotal] = useState(null);

  const userId = firebase.auth().currentUser.uid;

  
  setTimeout(function () {


    let currentTotal = firebase.database().ref('video/' + id + '/totalAvaliacoes')
    let currentAvaliacao = firebase.database().ref('video/' + id + '/nota')

    currentTotal.on('value', (snapshot) => {
        setAvaliacaoTotal(snapshot.val());
    })

    currentAvaliacao.on('value', (snapshot) => {
        setValidacao(snapshot.val());
    })


  })

  const sendAvalliacao = (total) => {
    // etValidacao({
    //   nota: total,
    //   pecaId: id
    // })
    axios.post("https://json-serverepw.herokuapp.com/lista?videoID=" + id,
    {
      nota: validacao ? validacao + total : total,
      pecaId: id,
      totalAvaliacoes: avaliacaoTotal ? avaliacaoTotal + 1 : 1,
      mediaNota: validacao && avaliacaoTotal ? ((validacao + total)  / (avaliacaoTotal + 1)) : total
    }
    )
    .then(response => console.log(response))

    // firebase.database().ref('video/' + id).update({
    //   nota: validacao ? validacao + total : total,
    //   pecaId: id,
    //   totalAvaliacoes: avaliacaoTotal ? avaliacaoTotal + 1 : 1,
    //   mediaNota: validacao && avaliacaoTotal ? ((validacao + total)  / (avaliacaoTotal + 1)) : total
    // })

    
  }


  function feedback(um, dois, tres, quatro, cinco) {
    if (um) {
      setUm(true);
      setDois(false);
      setTres(false);
      setQuatro(false);
      setCinco(false);
      sendAvalliacao(um)
    }

    if (dois) {
      setUm(true);
      setDois(true);
      setTres(false);
      setQuatro(false);
      setCinco(false);
      sendAvalliacao(dois)
    }
    if (tres) {
      setUm(true);
      setDois(true);
      setTres(true);
      setQuatro(false);
      setCinco(false);
      sendAvalliacao(tres)
    }
    if (quatro) {
      setUm(true);
      setDois(true);
      setTres(true);
      setQuatro(true);
      setCinco(false);
      sendAvalliacao(quatro)
    }

    if (cinco) {
      setUm(true);
      setDois(true);
      setTres(true);
      setQuatro(true);
      setCinco(true);
      sendAvalliacao(cinco)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setvisualicacao(1);
    }, 10000);
  }, []);

  

  const logado = localStorage.getItem("logado");

  if (logado !== "true") {
    history.push("/login");
  }

  return (
    <div style={{ width: "100vw", display: "flex", padding: 0 }}>
      <S.div>
        <S.Span
          size="35"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          <i className="bi bi-arrow-left"></i>
        </S.Span>
        <S.Span>Visualizaçoes: {visualicacao}</S.Span>
        <S.Span size="30" style={{ cursor: "pointer" }}>
          <i
            onClick={() =>
              compartilhar ? setcompartilhar(false) : setcompartilhar(true)
            }
            className="bi bi-share"
          ></i>{" "}
          {compartilhar && (
            <Share link={`https://palcoweb.com.br/#/cardezao/${id3}`}></Share>
          )}
        </S.Span>

        <div>
          <S.Span size="15" className="m-2">
            Gostou? de sua nota
          </S.Span>
          <S.Estrelinhas seleacionado={um ? "#FDCC12" : false}>
            <i
              className="bi bi-star-fill"
              onClick={() => feedback(20, null, null, null)}
            ></i>
          </S.Estrelinhas>

          <S.Estrelinhas
            seleacionado={dois ? "#FDCC12" : false}
            onClick={() => feedback(null, 40, null, null)}
          >
            <i className="bi bi-star-fill"></i>
          </S.Estrelinhas>

          <S.Estrelinhas
            seleacionado={tres ? "#FDCC12" : false}
            onClick={() => feedback(null, null, 60, null)}
          >
            <i className="bi bi-star-fill"></i>
          </S.Estrelinhas>
          <S.Estrelinhas
            seleacionado={quatro ? "#FDCC12" : false}
            onClick={() => feedback(null, null, null, 80)}
          >
            <i className="bi bi-star-fill"></i>
          </S.Estrelinhas>
          <S.Estrelinhas
            seleacionado={cinco ? "#FDCC12" : false}
            onClick={() => feedback(null, null, null, null, 100)}
          >
            <i className="bi bi-star-fill"></i>
          </S.Estrelinhas>
        </div>
      </S.div>

      <iframe
        src={`https://player.vimeo.com/video/${id}?h=${id2}`}
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="Cad&amp;ecirc;.mp4"
        style={{
          position: "absolute",
          marginTop: "0px",
          padding: 0,
          width: "100vw",
          height: "100vh",
        }}
      ></iframe>

      {/* <iframe id="myvideo"
                src={`https://iframe.dacast.com/vod/${id}/${id2}`}
                style={{ position: "absolute", marginTop: '0px', padding: 0, width: '100%' , height: '800px' }}
                allow="autoplay"
                onClick={()=>alert("oi")}

            >


            </iframe>


            
                
                <ReactNetflixPlayer src="https://www.c-span.org/video/standalone/?c4944572/house-impeachment-managers-video-compilation-january-6-attack-us-capitol" /> */}
    </div>
  );
}
