import { api, saveToken } from "../../utils";

export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", token };
};

export const logout = () => {
  console.log("inside logout action");
  saveToken("");
  return { type: "LOGOUT" };
};

export const sendCredentials = (username, password, setAuthError) => (
  dispatch
) => {
  api
    .post("/login/", { username, password })
    .then((response) => {
      saveToken(response.data.token);
      dispatch(loginSuccess(response.data.token));
    })
    .catch((err) => {
      console.log(err);
      setAuthError(true);
    });
};
