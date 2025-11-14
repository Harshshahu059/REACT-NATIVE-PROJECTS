import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type card={
  id: string;
  ratting: number;
  originPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  moblieImg: string;

}

const PhoneCard = ({
    id,
    ratting,
    originPrice,
    discountedPrice,
    discountPercentage,
    moblieImg
}:card) => {
  return (
    <View style={styles.container} >
      <View>
        <Image 
        style={styles.img}
        source={{
            uri:moblieImg
        }}
        />
      </View>
      <View style={styles.pricing}>
        <View style={styles.rating}>
           <View style={styles.ratingScore}>
                <Text style={{color:"#ffffff",fontWeight:"bold"}}>{ratting} &#x2B50;</Text>
            </View>
                <Text style={{color:"#959595ff"}}>(8,794)</Text>             
        </View>
        <View style={styles.discount}>       
            <Text style={{color:"#7c7c7cff" ,textDecorationLine:"line-through",fontSize:17}}>&#8377;{originPrice}</Text> 
            <Text style={{color:"#000000ff" , fontWeight:"bold",fontSize:17}}>&#8377;{discountedPrice}</Text> 
            <Text style={{color:"#02932eff" , fontWeight:"bold",fontSize:16}}>%{discountPercentage} off</Text> 
        </View>
      </View>
    </View>
  )
}

export default PhoneCard

const styles = StyleSheet.create({
    container :{
        padding:10,
        display:"flex",
        flexDirection:"row",
        // justifyContent:"center",
        gap:8,
        width:"auto",
        borderBottomColor:"#d4d3d3ff",
        borderBottomWidth:2,
        margin:10
    },
    img:{
        width:100,
        height:130
    },
    pricing :{
        paddingTop:15,  
        paddingBottom:50   
        // backgroundColor:"#000"
    },
    rating :{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:110,
        height:20,
        gap:7,
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
        justifyContent:"center",
        alignItems:"center",
        gap:5
    },
})