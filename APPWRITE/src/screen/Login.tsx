import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppWriteContext } from '../authservice/AppwriteContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootAuthStack } from '../Routes/AuthStack'
import Snackbar from 'react-native-snackbar'

type Login=NativeStackScreenProps<RootAuthStack,'Login'>


const Login = ({navigation}:Login) => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const {isLoggedin,setisLoggedin,appWrite}=useContext(AppWriteContext)
   
   const submit=()=>{
     if(email&&password){       
     appWrite.login({email,password})
     .then(res=>{
       if(res){
         const data =setisLoggedin(true)
         console.log(data)
         Snackbar.show({
                    text: 'Login Succesfully.',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor:"#efefefff",
                    backgroundColor:"#0caa11ff"
                });
       }
     }).catch((e)=>
     console.log(e))
     }else{
       console.log("Emptty")
     }
   }
   return (
     <View style={styles.container}>
       <Text style={styles.heading}>Appwrite Auth</Text>
       {/* <TextInput
        placeholder='name'
        placeholderTextColor={'#000'}
        value={name}
        onChangeText={(e)=>setName(e)} 
        style={styles.input}
        /> */}
        <TextInput
        placeholder='Email'
        placeholderTextColor={'gray'}
        value={email}
        onChangeText={(e)=>setEmail(e)} 
        style={styles.input}        
        autoComplete="email"
        autoCapitalize="none"
        />
        <TextInput
        placeholder='password'
        placeholderTextColor={'gray'}
        value={password}
        onChangeText={(e)=>setPassword(e)} 
        style={styles.input}
        autoComplete="password"
        />
 
       <TouchableOpacity 
        style={styles.btn}
        onPress={submit}
        >
         <Text style={{fontWeight:"bold",fontSize:16}}>Login</Text>
       </TouchableOpacity>
        <TouchableOpacity 
              onPress={()=>navigation.push('SignIn')}
              style={styles.navigate}
              >
               <Text style={{fontWeight:"bold",fontSize:15}}>Don't have an account? </Text>
               <Text style={{fontWeight:"bold",fontSize:16,color:"#2289ffff"}}> Create an account </Text>
             </TouchableOpacity>
     </View>
   )
 }

export default Login

const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100%"
  },
  input:{
    margin:2,
    width:300,
    height:40,
    backgroundColor:"#fde0f2ff",
    borderRadius:5,
    padding:8,
    marginBottom:10
  },
  btn:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:15,
    marginTop:15,
    width:300,
    borderRadius:10,
    shadowColor:"black",
    shadowRadius:10,
    backgroundColor:"#fff"
        
  },
  heading:{
    fontSize:35,
    fontWeight:"bold",
    color:"#b00606ff",
    marginBottom:30   
  },
  navigate:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:100
  }
})