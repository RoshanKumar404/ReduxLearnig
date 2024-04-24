import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerss from './ReduxFiles/Header';
import Products from './ReduxFiles/Product';

export default function ReduxLearnings() {

  const productss = [{
    name: "nothingphone",
    color: "pink",
    price: 4954,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/h/i/x/-original-imagyr3vfpqrpkbv.jpeg?q=90&crop=false"
  },
  {
    name: "iphone",
    color: "green",
    price: 49542,
    image: "https://m.media-amazon.com/images/I/61KzWvYvUoL.jpg"
  },{
    name: "1+ phone",
    color: "red",
    price: 495,
    image: "https://i5.walmartimages.com/asr/c367be99-ecb6-49e5-988b-807145f9f7ab.66500265bdd5a4c8140585fda64716f0.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
  },



]
  return (
    <View>
      <Headerss />
      <ScrollView>
      
      <Text style={Styles.text}>Bolo Jai Sri Ram</Text>
      
      {
        productss.map((item)=> <Products item={item} />)
      }

      
      
      </ScrollView>
    </View>

  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "#e53a32",
    fontSize: 36,
    fontWeight: "bold",
  },
});
