import { HeaderTitle } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function tabsLayout() {
  return <Tabs screenOptions={{
    tabBarActiveTintColor:"black",
  }} >
    <Tabs.Screen name="index" options={{headerTitle:"Hello World", tabBarIcon: ({focused, color}) => <Ionicons name={focused ? "home-sharp": "home-outline"} color={color} size={30}/> }}
    />
    <Tabs.Screen name="about" options={{headerTitle:"about", tabBarIcon: ({focused, color}) => <Ionicons  name={focused ? "information-circle": "information-circle-outline"} color={color} size={30}/>
}}/>
    <Tabs.Screen name="+not-found" options={{headerShown:false,}} />
  </Tabs>;
}
