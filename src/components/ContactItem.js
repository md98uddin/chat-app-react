import React, { useContext } from "react";
import { ContextWrapper } from "../App";

export const ContactItem = ({ contactData }) => {
  console.log("contact data", contactData);

  let ctx = useContext(ContextWrapper);

  const getLastText = (messages) => {
    let texts = messages[messages.length - 1];
    return texts.messages[texts.messages.length - 1];
  };

  return (
    <div className="contact-item-main">
      <span
        onClick={() => ctx.setChatView(contactData)}
        style={{ backgroundColor: "grey" }}
      >
        <h2>{contactData.name}</h2>
        <p>{getLastText(contactData.messages)}</p>
        <button onClick={() => ctx.addMessage(contactData.name)}>
          Add a message
        </button>
      </span>
    </div>
  );
};
