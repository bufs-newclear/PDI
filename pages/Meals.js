
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
import { SafeAreaView } from "react-native-safe-area-context";
import MenuCard from "../components/MenuCard";
import MenuCardFolder from "../components/MenuCardFolder";
import MenuTextcard from "../components/MenuTextcard";
import MenuCardMini from "../components/MenuCardMini";
import { dishes, morningDish, employeeDishes } from "../misc/Dummy";

export default function Meals() {
  return (
      <ScrollView>
        <View style={styles.starttitle}>
          <Text style={styles.titleText}>오늘의 식단</Text>
          <Text style={styles.textfont}>xx월xx일</Text>
          { /* TODO: 날짜 동적으로 바꾸기 */ }
        </View>
        <MenuCard
          title="조식"
          image={undefined}
          dish={morningDish}
          morninginfo='학생증 필참 시 항상 무료'
          timeText="08:00~09:00"
          themeColor="#c55a11"
          themeColorBackground="#fbe5d7"
          fallbackText={"MORNING\n학생식당"}
        />
        <MenuCardFolder
          title="학생식당"
          description={`${dishes.length}개의 메뉴가 있습니다`}
          themeColor="#2f5597"
          themeColorBackground="#dae3f3"
          fallbackText={"LUNCH\n학생식당"}
        >
          {dishes.map((dish) => {
            return (
              <MenuCardMini
                key={dish.id}
                title={dish.name}
                dish={dishes[0]}
                // morninginfo='학생증 필참 시 항상 무료'
                // timeText="08:00~09:00"
                style={{paddingBottom: 10}}
              />
            )
          })}
        </MenuCardFolder>
        <MenuCard
          title="교직원식당"
          image={undefined}
          dish={employeeDishes}
          morninginfo='학생증 필참 시 항상 무료'
          timeText="08:00~09:00"
          themeColor="#548235"
          themeColorBackground="#e2f0d9"
          fallbackText={"LUNCH\n교직원식당"}
        />
      </ScrollView>
      // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  container: { //App의 최상위 컨테이너
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 40,
  },
  starttitle: { //"날짜 정보" 컨테이너
    alignSelf: "flex-start", // 왼쪽 정렬
    marginHorizontal: 25, // 좌측 여백
    marginTop: 40, // 상단 여백 추가
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
