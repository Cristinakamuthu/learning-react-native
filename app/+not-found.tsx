import { Link, Stack } from "expo-router";
import {StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title:"Oops! Not Found"}} />
    <View style={styles.container}>
     
      <Link href= "/" style={styles.button}> Go to back to home screen</Link>
    </View>
    </>
  );
}
// remote style that can be used wide 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#25292e',
    alignItems:'center',
    justifyContent:'center',
  
  },
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color:"black",

  },
  
});

