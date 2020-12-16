import { api } from "../../utils";

export const loginSuccess = (token) => {
  return { type: "LOGIN_SUCCESS", token };
};

export const sendCredentials = (username, password, setAuthError) => (
  dispatch
) => {
  api
    .post("/login/", { username, password })
    .then((response) => {
      console.log(response.data.token);
      dispatch(loginSuccess(response.data.token));
    })
    .catch((err) => {
      console.log(err);
      setAuthError(true);
    });
};
