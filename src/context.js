import axios from "axios";

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
  return (dispatch) => {
    axios
      .get("http://localhost:8000/data")
      .then((response) => {
        const users = response.data;
        console.log("getcontactsinit", response.data);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "Success",
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "Failure",
    payload: error,
  };
};
