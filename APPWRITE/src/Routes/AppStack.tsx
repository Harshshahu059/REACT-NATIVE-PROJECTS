import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'

export type RootAuthStack={
  Home:undefined
}

const stack=createNativeStackNavigator<RootAuthStack>()
const AppStack = () => {
  return (
   <stack.Navigator initialRouteName="Home">
        <stack.Screen 
        name="Home"
        component={Home}
         />
    </stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})