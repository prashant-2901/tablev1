import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import axios from "axios";
// import data from "./data.json";

//state =[]
const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      //   console.log(action.payload);
      return axios.post("http://localhost:8000/data", [
        ...state,
        action.payload,
      ]);
    case "update":
      //   console.log(action.payload);
      const newContacts = state?.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      console.log(newContacts);
      return newContacts;
    case "delete":
      return state?.filter((contact) => contact.id !== action.payload.id);
    case "Success":
      console.log("in success", action.payload);
      return [action.payload];
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
