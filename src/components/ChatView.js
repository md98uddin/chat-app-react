import React, { useContext, useEffect, useState } from "react";
import { ContextWrapper } from "../App";

export const ChatView = ({ chatViewContact }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("text update", text);
  }, [text]);

  const handleText = (e) => {
    setText((prevState) => {
      console.log(e.target.value);
      return e.target.value;
    });
  };

  const ctx = useContext(ContextWrapper);

  console.log("chatViewContact", chatViewContact);
  return (
    <div
      style={{ width: "30%", background: "gray" }}
      data-testid="chatview-div"
    >
      <h3>{chatViewContact[0].name}</h3>
      <ul>
        {chatViewContact[0].messages.map((message, index) => (
          <span
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              backgroundColor: "red",
              textAlign: message.name !== "user" ? "left" : "right",
              padding: "1em 1em 1em 1em",
              listStyle: "none",
            }}
          >
            <h3>{message.name}</h3>
            {message.messages.map((m, index) => (
              <li key={m}>{m}</li>
            ))}
          </span>
        ))}
      </ul>
      <span>
        <input
          data-testid="text-input"
          type="text"
          onChange={(e) => handleText(e)}
        />
        <button
          data-testid="send-btn"
          onClick={() => ctx.addMessage(chatViewContact[0].name, text)}
        >
          Send
        </button>
      </span>
    </div>
  );
};
