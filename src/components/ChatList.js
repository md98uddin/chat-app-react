import React, { useContext } from "react";
import { ContactItem } from "./ContactItem";
import { ContextWrapper } from "../App";
import { ChatView } from "./ChatView";

export const ChatList = () => {
  const ctx = useContext(ContextWrapper);
  if (ctx.chatViewContact.length) {
    return <ChatView chatViewContact={ctx.chatViewContact} />;
  } else {
    return (
      <div className="chat-main">
        <input placeholder="search a contact" />
        <div className="chat-list">
          {ctx.contacts.map((c) => (
            <React.Fragment key={c.id}>
              <ContactItem contactData={c} />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
};
