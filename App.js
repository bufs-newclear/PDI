import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MenuCard from "./components/MenuCard";
import { dishes } from "./misc/Dummy";

export default function App() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View > */}
      <View style={styles.starttitle}>
        <Text style={styles.titleText}>오늘의 식단</Text>
        <Text>2023년xx월xx일</Text>
        {/* TODO: 날짜 동적으로 바꾸기 */}
      </View>
      <SafeAreaView>
        <FlatList />
        <TouchableOpacity onPress={toggleDetailVisibility}>
          <View style={styles.menuCards}>
            <MenuCard dish={dishes[0]} />
            {isDetailVisible && (
            <View style={styles.detailContainer}>
              <Text>상세정보 내용</Text>
              {/* 여기에 자세한내용추가 */}
            </View>
          )}
          </View>
        </TouchableOpacity>
      </SafeAreaView>
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
    marginHorizontal: "5%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  starttitle: {
    alignSelf: "flex-start", // 왼쪽 정렬
    marginHorizontal: 25, // 좌측 여백
  },
  titleText: {
    fontSize: 35, //Text 폰트크기 조절
  },
  menuCards: {
    width: "100%",
    flexGrow: 1,
    alignSelf: "center",
  },
  detailContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});
