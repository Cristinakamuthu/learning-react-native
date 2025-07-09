import { Link } from "expo-router";
import {StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require("../../assets/images/home.avif")
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
      <Image source={PlaceholderImage}style={styles.image} />
      </View>
      <Text>Hello world!</Text>
      {/* <Link href={"/about"} style={styles.button}> Go to about screen </Link> */}
    </View>
  );
}
// remote style that can be used wide 

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  
  },
  // button:{
  //   fontSize:20,
  //   textDecorationLine:"underline",
  //   color:"black",

  // },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imagecontainer:{
    flex: 1,
  }
  
});

