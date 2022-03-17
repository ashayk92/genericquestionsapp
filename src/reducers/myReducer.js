const initialState = {
  userArray: [],
};
const myReducer = (state = initialState.userArray, action) => {
  if (action.type === "saveData") {
    return {
      userArray: action.userArray,
    };
  } else if (action.type === "resetData") {
    return {
      userArray: action.value,
    };
  }

  return state;
};

export default myReducer;
