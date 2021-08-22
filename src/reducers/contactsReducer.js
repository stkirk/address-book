const initialState = {
  contacts: [{ name: "Obi-Wan", phoneNumber: "123-123-1234" }],
  currentContact: { name: "", phoneNumber: "" },
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactsReducer;
