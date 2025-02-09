import "./App.css";
import React, { useEffect, useState } from "react";
import { ChatList } from "./components/ChatList";
import { useDispatch, useSelector } from "react-redux";
import { updateContacts } from "./redux/actions";

export const ContextWrapper = React.createContext();

function App() {
  //  contact data
  //  contact = {
  //   name, string
  //   messages, [{name: string, messages: ['yea', 'we can']}]
  //  }
  const test_contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(test_contacts);
  const [chatViewContact, setChatViewContact] = useState([]);

  useEffect(() => {
    console.log("contacts fetched", contacts);
  }, [contacts]);

  const addMessage = (contact_name, text) => {
    console.log(contact_name, "curr state", contacts);
    dispatch(updateContacts(contacts, contact_name, text));
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
