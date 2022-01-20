import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import axios from "axios";
import data from "./data.json";
//state =[]
const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      //   console.log(action.payload);
      return [...state, action.payload];
    case "update":
      //   console.log(action.payload);
      const newContacts = state?.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return newContacts;
    case "delete":
      return state?.filter((contact) => contact.id !== action.payload.id);
    case "success":
      return action.payload;
    case "error":
      return [];
    case "InitContact":
      //   const getContactInit = () => {
      //   const getData = () => {
      //     fetch("http://localhost:8000/data")
      //       .then((response) => response.json())
      //       .then((data) => console.log("hekki", data[0]));
      //     state = response.data;
      //   };

      //   getData();

      // console.log("loaded");
      //   console.log("data", data);
      axios
        .get("http://localhost:8000/data/")
        .then((res) => {
          console.log("loaded", res);
          state = res;
          console.log("state.data", state);
        })
        .catch((err) => {
          console.log(err);
        }, []);
      //   };
      return state.data;
    default:
      return state;
  }
};

const addReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(addReducer, applyMiddleware(thunk));
export default store;
