import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.loading}>
        <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loading:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    }
})