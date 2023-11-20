import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import MenuCard from "./components/MenuCard";
import { dishes } from "./misc/Dummy";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.starttitle}>
        <Text style={styles.titleText}>오늘의 식단</Text>
        <Text>2023년xx월xx일</Text>
        { /* TODO: 날짜 동적으로 바꾸기 */ }
      </View>
      {/* <SafeAreaView>
        <FlatList />
      </SafeAreaView> */}
      <View style="menuCards">
        <MenuCard dish={dishes[0]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  starttitle: {
    alignSelf: "flex-start", // 왼쪽 정렬
    marginLeft: 10, // 좌측 여백
  },
  titleText: {
    fontSize: 35, //Text 폰트크기 조절
  },
  menuCards: {
    width: '95%',
  }
});
