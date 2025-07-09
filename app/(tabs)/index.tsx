import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("/home/cristina/Development/code/learning-languages/learning-expo-react-native/assets/images/home .avif");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="choose a photo" theme="primary" />
        <View style={styles.spacer} />
        <Button label="use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 0.33,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  spacer: {
    height: 20,
  },
});
