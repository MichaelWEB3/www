import React, { useState, useRef, useEffect } from "react";

import * as S from "./styles";
import { MdSend } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Angry from "../../assets/emoji/angry.png";
import Happy from "../../assets/emoji/happy.png";
import HappyPlus from "../../assets/emoji/happy+.png";
import Cry from "../../assets/emoji/cry.png";
import Excited from "../../assets/emoji/excited.png";
import Love from "../../assets/emoji/in-love.png";
import Laugh from "../../assets/emoji/laugh.png";
import LaughPLus from "../../assets/emoji/laugh+.png";
import Sleepy from "../../assets/emoji/sleepy.png";
import Tear from "../../assets/emoji/tear.png";

import User from "../../Connections/user";

function Chat({ like, color}) {
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  const [user,setUser] = useState();

  const ref = useRef();
  const inputRef = useRef();

  const userInfo = new User()

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
    inputRef.current.focus();
  }, [messages]);


  useEffect(()=> {
    userInfo.me().then((res)=> {
      setUser(res.data)
    }).catch((err)=>{
    })
  },[userInfo])

  return (
    <S.Container color={color}>
      <div className="messages" ref={ref}>
        {messages.map((item, index) => {
          return (
            <div className="msgItem" key={`${index}`}>
              <div className="avatarContainer">
                <div className="avatar">
                  {" "}
                  <FaUser size={18} color="black" />{" "}
                </div>
              </div>
              <div className="textContainer">
                <p className="text">
                  <strong>{item.user}</strong>: {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="emoji">
        <img src={Love} onClick={() => like(Love)} alt="emoji" />
        <img src={Happy} onClick={() => like(Happy)} alt="emoji" />
        <img src={HappyPlus} onClick={() => like(HappyPlus)} alt="emoji" />
        <img src={Cry} onClick={() => like(Cry)} alt="emoji" />
        <img src={Tear} onClick={() => like(Tear)} alt="emoji" />
        <img src={Angry} onClick={() => like(Angry)} alt="emoji" />
        <img src={Laugh} onClick={() => like(Laugh)} alt="emoji" />
        <img src={LaughPLus} onClick={() => like(LaughPLus)} alt="emoji" />
        <img src={Sleepy} onClick={() => like(Sleepy)} alt="emoji" />
        <img src={Excited} onClick={() => like(Excited)} alt="emoji" />
      </div>
      <div className="control">
        <div className="msgPhoto">
          <FaUser size={18} color="black" />
        </div>
        <input
          ref={inputRef}
          className="inputMsg"
          type="text"
          placeholder="Menssagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              let arr = [];

              for (let i = 0, l = messages.length; i < l; i++) {
                arr.push(messages[i]);
              }

              const ids = arr.pop().id;

              setMessages((old) => [
                ...old,
                {
                  id: ids + 1,
                  text: message,
                  user: "Cicero",
                },
              ]);
              setMessage("");
            }
          }}
        />
        <p
          className="sendMsg"
          onClick={(e) => {
            e.preventDefault();
            setMessages((old) => [
              ...old,
              {
                text: message,
                user: user.name
              },
            ]);
            setMessage("");
          }}
        >
          <MdSend size={18} color="black" />
        </p>
      </div>
    </S.Container>
  );
}

export default Chat;
