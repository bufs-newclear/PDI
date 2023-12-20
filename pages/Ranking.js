import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Ranking() {
  return (
      <Text>Not yet implemented</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    //App의 최상위 컨테이너
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    // marginHorizontal: '5%',
    paddingTop: 20, // TODO: 하드코딩보다 더 괜찮은 방법 찾아야할듯
  },
});
