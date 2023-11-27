
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
import MenuCardFolder from "./components/MenuCardFolder";
import { dishes } from "./misc/Dummy";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View > */}
        <View style={styles.starttitle}>
          <Text style={styles.titleText}>오늘의 식단</Text>
          <Text style={styles.textfont}>xx월xx일</Text>
          { /* TODO: 날짜 동적으로 바꾸기 */ }
        </View>
        <MenuCard
          title="므아아아"
          dish={dishes[0]}
          themeColor="#c55a11"
          themeColorBackground="#fbe5d7"
          fallbackText={"MORNING\n꼬맹이만둣국"}
        />
        <MenuCardFolder
          title="조식"
          description="3개의 메뉴가 있습니다"
          image={undefined}
          themeColor="#c55a11"
          themeColorBackground="#fbe5d7"
          fallbackText={"MORNING\n꼬맹이만둣국"}
        />
        {/* <FlatList
          data={dishes}
          renderItem={({item}) => <MenuCard dish={item} />}
          keyExtractor={item => item.id}
          style={styles.menuCards}
        /> */}
        {/* <View style={styles.menuCards}>
          <MenuCard dish={dishes[0]} />
        </View> */}
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
    // marginHorizontal: '5%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  starttitle: {
    alignSelf: "flex-start", // 왼쪽 정렬
    marginHorizontal: 25, // 좌측 여백
  },
  titleText: {
    fontSize: 35, //Text 폰트크기 조절
  },
  textfont: {
    fontSize: 20,
  },
  menuCards: {
    width: "100%",
    flexGrow: 1,
    alignSelf: "center",
  },
});
