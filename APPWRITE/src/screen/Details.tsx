import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootAppStack } from '../Routes/AppStack'
import { phonesData } from '../components/data'
import { Phone } from '../components/data'

type DetailsPage=NativeStackScreenProps<RootAppStack,"DetailsPage">

const DetailsPage = ({navigation,route}:DetailsPage) => {
    const {productId}=route.params
    const [details,setDetails]=useState<Phone>()
    useEffect(()=>{
        setDetails(phonesData.filter((item)=>item.id===productId)[0])
    },[productId])
  return (
    <View style={styles.container}>
     <View style={styles.imgarea}>
             <Image 
             style={styles.img}
             source={{
                 uri:details?.moblieImg
             }}
             />
           </View>
            <View style={styles.pricing}>
                   <View style={styles.rating}>
                      <View style={styles.ratingScore}>
                           <Text style={{color:"#ffffff",fontWeight:"bold"}}>{details?.ratting} &#x2B50;</Text>
                       </View>
                           <Text style={{color:"#959595ff"}}>(8,794) rating</Text>             
                   </View>
                   <View style={styles.discount}>       
                       <Text style={{color:"#7c7c7cff" ,textDecorationLine:"line-through",fontSize:17}}>&#8377;{details?.originPrice}</Text> 
                       <Text style={{color:"#000000ff" , fontWeight:"bold",fontSize:17}}>&#8377;{details?.discountedPrice}</Text> 
                       <Text style={{color:"#02932eff" , fontWeight:"bold",fontSize:16}}>%{details?.discountPercentage} off</Text> 
                   </View>
                   <View style={styles.details}><Text>{details?.details?.Frontcamera} </Text></View>
                   <View style={styles.details}><Text>{details?.details?.rearcamera} </Text></View>
                   <View style={styles.details}><Text>{details?.details?.display} </Text></View>
            </View>
    </View>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
    container :{
    },
    img:{
        width:330,
        height:430
    },
    imgarea:{
        padding:10
    },
    pricing :{
        padding:10,
        gap:10,
        height:230
    },
    rating :{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:150,
        height:20,
        gap:7
    },
    ratingScore :{
        backgroundColor:"#02ba27ff",
        color:"#fff",
        width:20,
        height:25,
        borderRadius:5,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    discount :{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#b0ffbbff",
        alignItems:"center",
        gap:7,
        padding:8,
        borderRadius:5,
    },
    details:{
        borderWidth:2,
        borderRadius:5,
        borderColor:"#b1b1b1ff",
        textAlign:"center",
        // width:150,
        paddingVertical:3,
        paddingHorizontal:5,
    }
})