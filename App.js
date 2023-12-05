
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
          title="조식"
          image={undefined}
          dish={dishes[0]}
          morninginfo='학생증 필참 시 항상 무료'
          timeText="08:00~09:00"
          themeColor="#c55a11"
          themeColorBackground="#fbe5d7"
          fallbackText={"MORNING\n꼬맹이만둣국"}
        />
        <MenuCardFolder
          title="학생식당"
          description="3개의 메뉴가 있습니다"
          themeColor="#2f5597"
          themeColorBackground="#dae3f3"
          fallbackText={"LUNCH\n학생식당"}
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
  container: { //App의 최상위 컨테이너
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", //수평배치
    // marginHorizontal: '5%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  starttitle: { //"날짜 정보" 컨터이너
    alignSelf: "flex-start", // 왼쪽 정렬
    marginHorizontal: 25, // 좌측 여백
  },
  titleText: {
    fontSize: 35, 
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
