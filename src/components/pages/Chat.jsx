import React, { useRef, useState, useEffect } from "react";
import style from "./Chat.module.css";
import io from "socket.io-client";
import Navbar from "../layout/Navbar";
import {SlArrowRightCircle} from "react-icons/sl";

export default function Chat() {
  const bottomRef = useRef();
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);
  const [socket, setSocket] = useState(null);
  const username = localStorage.getItem("name");

  useEffect(() => {
    const initializeSocket = async () => {
      const newSocket = await io.connect("https://chat-backend-production-052f.up.railway.app");
      newSocket.emit("set_username", username);
      setSocket(newSocket);
    };

    initializeSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket) {

        socket.on("receive_message", (data) => {
            setMessageList((current) => [...current, data]);
        });

        return () => {
            socket.off("receive_message");
        };
    }
}, [socket]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit("message", message);
    clearInput();
    focusInput();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  const getEnterKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style["chat_page"]}>
      <Navbar />
      <div className={style["chat_box"]}>
        <div className={style["chat_container"]}>
          <div className={style["chat_body"]}>
            {messageList.map((message, index) => (
              <div
                className={`${style["message-container"]} ${
                  message.authorId === socket.id && style["message-mine"]
                }`}
                key={index}
              >
                <div className="message-author">
                  <strong>{message.author}</strong>
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className={style["chat-footer"]}>
            <input
              ref={messageRef}
              placeholder="Message"
              onKeyDown={(e) => getEnterKey(e)}
            />
            <button onClick={() => handleSubmit()}><SlArrowRightCircle size={30}/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
