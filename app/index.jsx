import { InputItem, Button } from "@ant-design/react-native";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { api } from "./utils";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    api.post("/login/", { username, password }).then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    const initializeApp = async () => {
      await loadFonts();
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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputItem
        style={{ fontFamily: "inter" }}
        value={username}
        placeholder="username"
        onChange={(value) => setUsername(value)}
        type="text"
      />
      <InputItem
        style={{ fontFamily: "inter" }}
        type="password"
        value={password}
        placeholder="password"
        onChange={(value) => setPassword(value)}
      />
      <Button style={{ margin: 12 }} onPress={() => submit()}>
        <Text style={{ fontFamily: "inter" }}>Submit</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
