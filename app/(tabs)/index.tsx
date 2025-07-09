
import {StyleSheet, Text, View } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("/home/cristina/Development/code/learning-languages/learning-expo-react-native/assets/images/home .avif")
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
      <ImageViewer imgSource={PlaceholderImage} />
      {/* <ImageViewer imgSource={PlaceholderImage} /> */}
      </View>
      <View style={styles.footerContainer}>
      <Button  label="choose a photo" theme= "primary"/>
      <Button label="use this photo" /> 
</View>
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
  
  imagecontainer:{
    flex: 1,
  },
  footerContainer:{
    flex:0.33,
    alignItems:'center',
  },
  
});

