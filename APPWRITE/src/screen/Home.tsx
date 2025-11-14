import { Image, Pressable, StyleSheet,FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppWriteContext } from '../authservice/AppwriteContext'
import Snackbar from 'react-native-snackbar'
import PhoneCard from '../components/PhoneCard'
import { phonesData } from '../components/data'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootAppStack } from '../Routes/AppStack'

type HomePage=NativeStackScreenProps<RootAppStack,"Home">

const Home = ({navigation}:HomePage) => {
  const { isLoggedin, setisLoggedin, appWrite } = useContext(AppWriteContext)
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (id:string) => {
    if (isNavigating) return; // 👈 prevent double navigation
    setIsNavigating(true);
    navigation.push('DetailsPage',{productId:id})

    // Optional: reset flag after a short delay
    setTimeout(() => setIsNavigating(false), 500);
  };


  return (
    <View style={styles.HomePage}>
      <FlatList
        numColumns={1}
        data={phonesData}
        keyExtractor={(phone) => phone.id}
        renderItem={({ item }) => (
          <Pressable onPress={() =>
            // navigation.push('DeatilsPage',{productId:item.id})
            handlePress(item.id)
          }>
            <PhoneCard
              id={item?.id}
              ratting={item?.ratting}
              originPrice={item?.originPrice}
              discountedPrice={item?.discountedPrice}
              discountPercentage={item?.discountPercentage}
              moblieImg={item?.moblieImg}
            />
          </Pressable>
        )
        }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: "#fff",
    height: "100%"
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 20,
    marginTop: 15
  },
  img: {
    width: 360,
    height: 150
  },

})