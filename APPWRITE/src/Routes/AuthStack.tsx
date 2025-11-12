import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screen/Login'
import SignIn from '../screen/SignIn'



export type RootAuthStack = {
    SignIn: undefined,
    Login: undefined
}

const AuthStack = () => {

    const stack = createNativeStackNavigator<RootAuthStack>()
    return (
        <stack.Navigator initialRouteName="Login">
            <stack.Screen
                name="Login"
                component={Login}
            />
            <stack.Screen
                name="SignIn"
                component={SignIn}
            />
        </stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})