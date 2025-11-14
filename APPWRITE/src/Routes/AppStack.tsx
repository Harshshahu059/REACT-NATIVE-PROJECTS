import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'
import DetailsPage from '../screen/Details'
import { AppWriteContext } from '../authservice/AppwriteContext'
import Snackbar from 'react-native-snackbar'

export type RootAppStack = {
  Home: undefined,
  DetailsPage: { productId: string }
}

const stack = createNativeStackNavigator<RootAppStack>()
const AppStack = () => {
  const { isLoggedin, setisLoggedin, appWrite } = useContext(AppWriteContext)  
  const [userName, setUserName] = useState<String>("");
  const logout = () => {
    appWrite.loginOut()
      .then((res) => {
        if (res) {
          setisLoggedin(false)
          Snackbar.show({
            text: 'LogOut !!',
            duration: Snackbar.LENGTH_SHORT,
            textColor: "#000000ff",
            backgroundColor: "#3ebd32ff"
          });
        }
      })
  }
  
  useEffect(()=>{
    appWrite.getCurrentUser().then((res)=>{
      setUserName(res?.name||"")
    })
  },[appWrite])

  return (
    <stack.Navigator initialRouteName="Home">
      <stack.Screen
        name="Home"
        component={Home}
        options={{
          title: `Welcome , ${userName}`,
          headerRight: (() => (
            <TouchableOpacity 
            style={styles.logoutbtn}
            onPress={logout}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          ))
        }}
      />
      <stack.Screen
        name="DetailsPage"
        component={DetailsPage}
        options={{
          animation: "slide_from_right"
        }}
      />
    </stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({
  logoutbtn:{
    backgroundColor:"#fff",
    borderColor:"#a6a5a5ff",
    borderWidth:1,
    width:80,
    height:30,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15

  },
  logout:{
    fontWeight:"bold"
  }
})