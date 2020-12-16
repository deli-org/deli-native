import { api } from "../../utils";

export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", token };
};

export const sendCredentials = (username, password) => (dispatch) => {
  api.post("/login", { username, password }).then((response) => {
    dispatch(loginSuccess(resonse.data.token)).catch((err) => console.log(err));
  });
};
