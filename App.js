import React from "react";
import { Provider } from "react-redux";

import App from "./app/index";
import store from "./app/redux/store";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
