export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_NUMBER = "UPDATE_NUMBER";
export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const deleteContactAction = (index) => {
  return {
    type: DELETE_CONTACT,
    payload: index,
  };
};

export const updateNameAction = (text) => {
  return {
    type: UPDATE_NAME,
    payload: text,
  };
};

export const updateNumberAction = (text) => {
  return {
    type: UPDATE_NUMBER,
    payload: text,
  };
};

export const addContactAction = () => {
  return {
    type: ADD_CONTACT,
  };
};

export const editContactAction = (index) => {
  return {
    type: EDIT_CONTACT,
    payload: index,
  };
};

export const updateContactAction = (index) => {
  return {
    type: UPDATE_CONTACT,
    payload: index,
  };
};
