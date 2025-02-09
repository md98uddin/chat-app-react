export const fetchMessages = () => {
  return {
    type: "FETCH_MESSAGES",
  };
};

export const updateContacts = (oldState, contact_name, text) => {
  let findContact = oldState.filter((c) => c.name === contact_name)[0];

  oldState.forEach((c) => {
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

  return {
    type: "ADD_MESSAGE",
    payload: oldState,
  };
};
