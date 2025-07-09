import { Link } from "expo-router";
import {StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Link href={"/about"} style={styles.button}> Go to about screen </Link>
    </View>
  );
}
// remote style that can be used wide 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  
  },
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"black",

  },
  
});

