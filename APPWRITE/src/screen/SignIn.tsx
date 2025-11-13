import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppWriteContext } from '../authservice/AppwriteContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootAuthStack } from '../Routes/AuthStack'
import Snackbar from 'react-native-snackbar';

type SignIn = NativeStackScreenProps<RootAuthStack, 'SignIn'>

const SignIn = ({ navigation }: SignIn) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repassword, setRePassword] = useState("")
  const { isLoggedin, setisLoggedin, appWrite } = useContext(AppWriteContext)

  const submit = () => {
    if (password !== repassword) {
      Snackbar.show({
        text: 'Password not match with Repeat Password',
        duration:Snackbar.LENGTH_SHORT,
      });
    } else if (name && email && password) {
      appWrite.createNewUser({ name, email, password })
        .then(res => {
          if (res) {
            setisLoggedin(true)
          }
        }).catch((e) =>
          console.log(e))
    } else {
      Snackbar.show({
        text: 'All fiels required',
        duration:Snackbar.LENGTH_SHORT,
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Appwrite Auth</Text>
      <TextInput
        placeholder='Name'
        placeholderTextColor={'gray'}
        value={name}
        onChangeText={(e) => setName(e)}
        style={styles.input}
      />
      <TextInput
        placeholder='Email'
        placeholderTextColor={'gray'}
        value={email}
        onChangeText={(e) => setEmail(e)}
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        placeholderTextColor={'gray'}
        value={password}
        onChangeText={(e) => setPassword(e)}
        style={styles.input}
      />
      <TextInput
        placeholder='Repeat password'
        placeholderTextColor={'gray'}
        value={repassword}
        onChangeText={(e) => setRePassword(e)}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={submit}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.popToTop()}
        style={styles.navigate}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Already have an account? </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#2289ffff" }}> Login </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  input: {
    margin: 2,
    width: 300,
    height: 40,
    backgroundColor: "#fde0f2ff",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 15,
    width: 300,
    borderRadius: 10,
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "#fff"

  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#b00606ff",
    marginBottom: 30
  },
  navigate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  }
})