import "./App.css";
import React, { useState } from "react";
import { ChatList } from "./components/ChatList";
import { test_contacts } from "./test-contact";

export const ContextWrapper = React.createContext();

function App() {
  //  contact data
  //  contact = {
  //   name, string
  //   messages, [{name: string, messages: ['yea', 'we can']}]
  //  }
  const [contacts, setContacts] = useState(test_contacts);
  const [chatViewContact, setChatViewContact] = useState([]);

  const addMessage = (contact_name, text) => {
    let findContact = test_contacts.filter((c) => c.name === contact_name)[0];
    console.log(contact_name, "curr state", contacts);
    setContacts((prevState) => {
      console.log("prevState", prevState);
      let nextState = [...prevState];
      nextState.forEach((c) => {
        if (c.name === contact_name) {
          let timeStamp = findContact.messages.at(
            findContact.messages.length - 1
          ).timeStamp;

          const newMsgBlock = {
            name: "user",
            messages: [text],
            timeStamp: timeStamp + 1,
          };
          c.messages.push(newMsgBlock);
        }
      });

      console.log("next state", nextState);

      return [...nextState];
    });
  };

  const setChatView = (contactData) => {
    console.log("Chat data", contactData, chatViewContact);
    setChatViewContact((prevState) => [contactData]);
    console.log("prev state", chatViewContact);
  };
  return (
    <div className="app-entry">
      <ContextWrapper.Provider
        value={{ contacts, chatViewContact, addMessage, setChatView }}
      >
        <ChatList />
      </ContextWrapper.Provider>
    </div>
  );
}

export default App;
