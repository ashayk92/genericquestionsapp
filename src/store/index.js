import { createStore } from "redux";

const initialState = {
  userArray: [],
};
const myReducer = (state = initialState.userArray, action) => {
  if (action.type === "saveData") {
    return {
      userArray: action.userArray,
    };
  }

  return state;
};
const store = createStore(myReducer);

export default store;
