const defaultState = {
  loggedIn: false,
  token: "",
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        token: action.token,
      };

    default:
      return state;
  }
};

export default loginReducer;
