import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { createContext,FC } from 'react'
import AuthService from './authservice'

const app=new AuthService()
type AppContextType={
    isLoggedin:boolean,
    appWrite:AuthService,
    setisLoggedin:(isLoggedin:boolean)=>void
}
export const AppWriteContext=createContext<AppContextType>(
    {
    appWrite:new AuthService(), 
    isLoggedin:false,
    setisLoggedin:()=>{}
    }
)
const  AppWriteProvider : FC<PropsWithChildren>=({children}) => {
    const [isLoggedin,setisLoggedin] = useState(false)
    const defaultValue={
    appWrite:new AuthService(),
    isLoggedin,
    setisLoggedin
    }
  return (
    <AppWriteContext.Provider value={defaultValue}>
        {children}
    </AppWriteContext.Provider>
  )
}

export default AppWriteProvider

const styles = StyleSheet.create({})