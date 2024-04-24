import React from "react";
import {Text,View ,Image,Button, StyleSheet} from "react-native"
import { addToCart } from "./Action";
import { useDispatch } from "react-redux";
export default function Products(meri){
    const item=meri.item
    const Dispatch=useDispatch();
    const handleAddToCart=(item)=>{
      console.warn('aa gya',item);
      
      Dispatch(addToCart(item))
    }
    return(
        <View style={Styles.container}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <Text>{item.color}</Text>
        <Image style={{width:200,height:250}} source={{uri:item.image}}/>
        <Button title='Adder' onPress={()=>handleAddToCart(item)}/>
      </View>
    )
}
const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:5,borderColor:"#e53a32",
      borderRadius:10,
      padding:10,
      marginBottom:10,

    },
    text: {
      color: "white",
      fontSize: 36,
      fontWeight: "bold",
    },
  });