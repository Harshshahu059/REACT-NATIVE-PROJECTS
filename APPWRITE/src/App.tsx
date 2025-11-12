import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppWriteProvider from './authservice/AppwriteContext'
import Route from './Routes/Route'

import Config from "react-native-config";

const App = () => {
  return (
    // <View>
    //   <Text style={styles.text}>App {Config?.APPWRITE_ENDPOINT}</Text>
    // </View>
    <AppWriteProvider>
      <Route />
    </AppWriteProvider>
  )

}

export default App

const styles=StyleSheet.create({
  text:{
    color:"#fff",
    fontSize:25
  }
})