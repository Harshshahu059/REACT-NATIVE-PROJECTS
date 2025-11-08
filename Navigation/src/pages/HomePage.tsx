import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { phonesData } from "./data"
import PhoneCard from '../components/PhoneCard'
import DetailsPage from './DetailsPage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps=NativeStackScreenProps<RootStackParamList,"HomePage">
const HomePage = ({navigation}:HomeProps) => {
    
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = (id:string) => {
    if (isNavigating) return; // 👈 prevent double navigation
    setIsNavigating(true);
    navigation.push('DeatilsPage',{productId:id})

    // Optional: reset flag after a short delay
    setTimeout(() => setIsNavigating(false), 500);
  };

    console.log(phonesData)
    return (
        <View style={styles.HomePage}>
            <FlatList
                numColumns={1}
                data={phonesData}
                keyExtractor={(phone) => phone.id}
                renderItem={({ item }) => (
                  <Pressable onPress={()=>
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

export default HomePage

const styles = StyleSheet.create({
    HomePage: {
        backgroundColor: "#fff",
        height: "100%"
    }
})