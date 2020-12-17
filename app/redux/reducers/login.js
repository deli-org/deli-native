const defaultState = {
  loggedIn: false,
  token: "",
};

const loginReducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loggedIn: true,
        token: action.token,
      };

    case "LOGOUT":
      return defaultState;

    default:
      return state;
  }
};

export default loginReducer;
