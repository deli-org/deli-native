import AsyncStorage from "@react-native-community/async-storage";

TOKEN_KEY = "token";

export const saveToken = async (value) => {
  console.log("inside saveToken");
  try {
    await AsyncStorage.setItem(TOKEN_KEY, value);
  } catch (e) {
    console.log(e);
  }
};

export const getToken = async () => {
  const value = await AsyncStorage.getItem(TOKEN_KEY);
  if (value !== null) {
    return value;
  }
};
