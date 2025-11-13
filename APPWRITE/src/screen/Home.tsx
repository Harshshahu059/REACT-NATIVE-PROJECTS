import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AppWriteContext } from '../authservice/AppwriteContext'

const Home = () => {
  const {isLoggedin,setisLoggedin,appWrite}=useContext(AppWriteContext)  
    const logout=()=>{
      appWrite.loginOut()
              .then((res)=>{
                if(res){
                  setisLoggedin(false)
                }
            })      
    }
  return (
    <View>
      <Text>Home</Text>
            <TouchableOpacity
             style={styles.btn}
             onPress={logout}
             >
              <Text>Logout</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  btn:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#000",
    paddingVertical:20,
    marginTop:15    
  }
})