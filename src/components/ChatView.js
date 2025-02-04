import React, { useContext, useState } from "react";
import { ContextWrapper } from "../App";

export const ChatView = ({ chatViewContact }) => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    console.log("text", text);
    setText(e.target.value);
  };

  const ctx = useContext(ContextWrapper);

  console.log("chatViewContact", chatViewContact);
  return (
    <div style={{ width: "30%", background: "gray" }}>
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
        <input type="text" onChange={handleText} />
        <button onClick={() => ctx.addMessage(chatViewContact[0].name, text)}>
          Send
        </button>
      </span>
    </div>
  );
};
