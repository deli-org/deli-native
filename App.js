import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InputItem, Button, Provider } from '@ant-design/react-native'
import { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { api } from './app/utils'
import AppLoading from 'expo-app-loading'

const loadFonts = async () => {
  await Font.loadAsync(
    'antoutline',
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antoutline.ttf')
  );

  await Font.loadAsync(
    'antfill',
    // eslint-disable-next-line
    require('@ant-design/icons-react-native/fonts/antfill.ttf')
  );
}

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
    api.post('/login/', { username, password }).then(
      response => {
        console.log(response.data)
      }
    )
  }

  useEffect(() => {
    loadFonts()
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputItem
        value={username}
        placeholder="username"
        onChange={(value) => setUsername(value)}
        type="text">
      </InputItem>
      <InputItem
        type="password"
        value={password}
        placeholder="password"
        onChange={(value) => setPassword(value)}>
      </InputItem>
      <Button onPress={() => submit()}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
