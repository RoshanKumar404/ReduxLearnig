import React, { useEffect, useState } from "react";
import {Text,View,} from "react-native"
import {  useSelector } from "react-redux";

export default function Headerss(){

    const cartData=useSelector((state)=>state.root);
    const [cartitem,setcartitem]=useState(0)
    // useEffect(()=>{
    //   //setcartitem(cartData.length)
    // },[cartData])
    //console.warn(cartData);
    
    return(
        <View style={{margin:10,justifyContent:'space-between',flexDirection:"row"}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Apni Dukan</Text>
            <Text style={{flexDirection:"row",marginHorizontal:20}}>{cartitem}</Text>
        </View>
    )
}