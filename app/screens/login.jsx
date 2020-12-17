import { InputItem, Button } from "@ant-design/react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { sendCredentials } from "../redux/actions/login";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(sendCredentials(username, password, setAuthError));
  };

  const renderLoginError = () => {
    if (!authError) {
      return;
    }

    return (
      <Text style={{ fontFamily: "inter", fontSize: 16, color: "red" }}>
        Login Failed
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputItem
        error={authError}
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
      {renderLoginError()}
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

export default Login;
