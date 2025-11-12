import { StyleSheet, Text, View } from 'react-native'
import React, { JSX, useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import AppWriteProvider, { AppWriteContext } from '../authservice/AppwriteContext'
import Loading from '../components/Loading'

const Route = ():JSX.Element => {
  const {isLoggedin,setisLoggedin,appWrite}=useContext(AppWriteContext)
  const [loading,setLoading]=useState<boolean>(false)

  useEffect(() => {
      setLoading(true)
      appWrite.getCurrentUser()
      .then(()=>{
        setLoading(false)
        setisLoggedin(true)
      })
      .catch(()=>{
        setLoading(false)
        setisLoggedin(false)
      })
  }, [appWrite])

  if(loading){
    return(
     <Loading/>
    )
  }
  
  return (
    <NavigationContainer>
      {isLoggedin?<AppStack/>:<AuthStack/>}
      {/* <AppStack/> */}
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})