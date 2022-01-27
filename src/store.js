import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import axios from "axios";
// import data from "./data.json";

//state =[]
const contactsReducer = (state = [], action) => {
  console.log("store", action.payload);
  switch (action.type) {
    case "add":
      // console.log(action.payload);
      const newData = action.payload;
      return axios
        .post("http://localhost:8000/data", newData)
        .then((response) => response.json())
        .then((data) => {
          console.log(newData);
          console.log(data.data);
          return data.data;
        })

        .catch((error) => {
          console.log(error);
        });

    case "update":
      //   console.log(action.payload);
      const newContacts = state?.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      console.log(newContacts);
      return newContacts;
    case "delete":
      console.log(action.payload);
      return axios
        .delete(`http:localhost:8000/data/${action.payload}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    // return state?.filter((contact) => contact.id !== action.payload.id);
    case "Success":
      console.log("in success", action.payload);
      return [...action.payload];
    case "error":
      return action.payload; //or []

    default:
      return state;
  }
};

const addReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(addReducer, applyMiddleware(thunk));
export default store;
