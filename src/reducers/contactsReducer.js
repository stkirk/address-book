import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
  UPDATE_NAME,
  UPDATE_NUMBER,
} from "../actions/contactsActions";

const initialState = {
  contacts: [{ name: "Obi-Wan", phoneNumber: "123-123-1234" }],
  currentContact: {
    name: "",
    phoneNumber: "",
    isEditing: false,
    contactIndex: -1,
  },
};

//action handlers
const deleteContact = (state, action) => {
  const contacts = [...state.contacts];
  contacts.splice(action.payload, 1);
  return {
    ...state,
    contacts: contacts,
  };
};

const updateContact = (state, action) => {
  const contacts = [...state.contacts];
  contacts[action.payload] = { ...state.currentContact };
  return {
    ...state,
    contacts: contacts,
    currentContact: initialState.currentContact,
  };
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      return deleteContact(state, action);
    case UPDATE_NAME:
      return {
        ...state,
        currentContact: { ...state.currentContact, name: action.payload },
      };
    case UPDATE_NUMBER:
      return {
        ...state,
        currentContact: {
          ...state.currentContact,
          phoneNumber: action.payload,
        },
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, state.currentContact],
        currentContact: initialState.currentContact,
      };
    case EDIT_CONTACT:
      return {
        ...state,
        currentContact: {
          ...state.contacts[action.payload],
          isEditing: true,
          contactIndex: action.payload,
        },
      };
    case UPDATE_CONTACT:
      return updateContact(state, action);
    default:
      return state;
  }
};

export default contactsReducer;
