import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform } from "react-native";

import MenuCard from "./components/MenuCard";
import { dishes } from "./misc/Dummy";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View > */}
        <View style={styles.starttitle}>
          <Text style={styles.titleText}>오늘의 식단</Text>
          <Text>2023년xx월xx일</Text>
          { /* TODO: 날짜 동적으로 바꾸기 */ }
        </View>
        {/* <SafeAreaView>
          <FlatList />
        </SafeAreaView> */}
        <View style={styles.menuCards}>
          <MenuCard dish={dishes[0]} />
        </View>
        <StatusBar style="auto" />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: '5%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  starttitle: {
    alignSelf: "flex-start", // 왼쪽 정렬
    marginHorizontal: 25, // 좌측 여백
  },
  titleText: {
    fontSize: 35, //Text 폰트크기 조절
  },
  menuCards: {
    width: '100%',
    flexGrow: 1,
    alignSelf: 'center',
  }
});
