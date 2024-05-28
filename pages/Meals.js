import { React, useState, useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import MenuCard from "../components/MenuCard";
import MenuCardFolder from "../components/MenuCardFolder";
import MenuCardMini from "../components/MenuCardMini";
import { Meal } from "../entity/Meal.js";

export default function Meals() {
  const [loading, setLoading] = useState(true);
  const [morning, setMorning] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    fetchMenus();
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  // API를 통해 식단 데이터 가져오는 함수
  const fetchMenus = async () => {
    try {
      let dailyMeals = await Meal.fetchDaily();

      setLunch(dailyMeals.filter((meal) => meal.type === "lunch"));
      setMorning(dailyMeals.filter((meal) => meal.type === "morning"));
      setEmployee(dailyMeals.filter((meal) => meal.type === "employee"));

      setLoading(false);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.starttitle}>
      <Text style={styles.titleText}>오늘의 식단</Text>
      <View style={styles.dateContainer}>
        <FontAwesome5 name="calendar-alt" size={20} color="black" />
        <Text style={styles.textfont}>{` ${currentDate}`}</Text>
      </View>
    </View>
    {loading ? (
      <Text style={{
        textAlign: 'center',
        marginTop: 24,
        color: '#888888',
        ...styles.menuCards

      }}>
        식단 정보를 가져오고 있습니다...
      </Text>
    ) : (
      <>
        {morning.length > 0 && (
          <MenuCard
            title="조식"
            image={undefined}
            dish={morning[0]}
            description='학생증 지참 필수'
            timeText="08:00~09:00"
            themeColor="#c55a11"
            themeColorBackground="#fbe5d7"
            fallbackText={"MORNING\n학생식당"}
          />
        )}
        <MenuCardFolder
          title="학생식당"
          description={lunch.length === 0 ? "미운영" : `${lunch.length}개의 메뉴가 있습니다`}
          themeColor="#2f5597"
          themeColorBackground="#dae3f3"
          fallbackText={"LUNCH\n학생식당"}
        >
          {lunch.map((dish) => (
            <MenuCardMini
              key={dish.id}
              title={dish.name}
              dish={dish}
              style={{paddingBottom: 10}}
            />
          ))}
        </MenuCardFolder>
        {employee.length > 0 && (
          <MenuCard
            title="교직원식당"
            image={undefined}
            dish={employee[0]}
            morninginfo='학생 이용 가능'
            timeText="11:30~13:30"
            themeColor="#548235"
            themeColorBackground="#e2f0d9"
            fallbackText={"LUNCH\n교직원식당"}
          />
        )}
      </>
    )}
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //App의 최상위 컨테이너
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 40,
  },
  starttitle: {
    //"날짜 정보" 컨테이너
    alignSelf: "flex-start", // 왼쪽 정렬
    marginHorizontal: 25, // 좌측 여백
    marginTop: 40, // 상단 여백 추가
  },
  titleText: {
    fontSize: 35,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
