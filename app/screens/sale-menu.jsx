import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";

import { logout } from "../redux/actions/login";

const SaleMenu = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SaleMenu</Text>
      <Button
        onPress={() => {
          dispatch(logout());
        }}
        title="Reset Token"
      />
    </View>
  );
};

export default SaleMenu;
