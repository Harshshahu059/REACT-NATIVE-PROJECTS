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
      .then(res=>{
        setLoading(false)
        if(res){
          setisLoggedin(true)
        }
      })
      .catch(_=>{
        console.log("res--->",appWrite.getCurrentUser())
        setLoading(false)
        setisLoggedin(false)
      })
  }, [appWrite,setisLoggedin])

  if(loading){
    return(
     <Loading/>
    )
  }
  
  return (
    <NavigationContainer>
      {isLoggedin?<AppStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})