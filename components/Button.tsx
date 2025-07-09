import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
};

export default function Button({ label, theme }: Props) {
  const isPrimary = theme === "primary";

  return (
    <View
      style={[
        styles.buttonContainer,
        isPrimary && {
          borderWidth: 4,
          borderColor: "#ffd",
          borderRadius: 18,
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          { backgroundColor: isPrimary ? "#fff" : "#333" },
        ]}
        onPress={() => alert("You actually pressed the button!")}
      >
        <FontAwesome
          name="picture-o"
          size={18}
          color={isPrimary ? "#25292e" : "#fff"}
          style={styles.buttonIcon}
        />
        <Text
          style={[
            styles.buttonLabel,
            { color: isPrimary ? "#25292e" : "#fff" },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
});
