import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { loginSuccess } from "./redux/actions/login";
import Login from "./screens/login";
import SaleMenu from "./screens/sale-menu";
import { getToken } from "./utils";

const loadFonts = async () => {
  await Font.loadAsync(
    "antoutline",
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antoutline.ttf')
  );

  await Font.loadAsync(
    "antfill",
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antfill.ttf')
  );

  await Font.loadAsync(
    "inter",
    // eslint-disable-next-line
    require('../assets/fonts/Inter-Medium.ttf')
  );
};

export const App = () => {
  const [loading, setLoading] = useState(true);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("rendering index");

  console.log(store);

  useEffect(() => {
    const initializeApp = async () => {
      await loadFonts();
      try {
        const token = await getToken();
        if (token) {
          dispatch(loginSuccess(token));
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    initializeApp();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  if (!store.login.token) {
    return <Login />;
  }

  return <SaleMenu />;
};

export default App;
