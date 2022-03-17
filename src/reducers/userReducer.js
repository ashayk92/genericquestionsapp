const initialState = {
  userName: "",
};

const userReducer = (state = initialState, action) => {
  if (action.type === "setUser") {
    return { userName: action.value };
  }

  return state;
};

export default userReducer;
