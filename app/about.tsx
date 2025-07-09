import {StyleSheet, Text, View } from "react-native";

export default function about() {
  return (
    <View style={styles.container}>
      <Text>This is the about page !</Text>
    </View>
  );
}
// remote style that can be used wide 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
  
  },
});

