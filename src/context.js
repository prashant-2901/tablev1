export const addContact = (payload) => {
  return {
    type: "add",
    payload,
  };
};

export const deleteContact = (payload) => {
  return {
    type: "delete",
    payload,
  };
};

export const updateContact = (payload) => {
  return {
    type: "update",
    payload,
  };
};

export const getContactsInit = () => {
  return {
    type: "InitContact",
  };
  //Todo implement thunk
};

// getContactsSuccess;
// getContactsError;
