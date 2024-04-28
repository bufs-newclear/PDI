import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
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
import Constants from 'expo-constants';
import { menus } from "../misc/Dummy";

import { generateAndSetUserToken, getAuthToken } from '../App.js'; // App.js에서 필요한 함수 import

// API URL 및 인증 토큰
const BACKEND_URL = 'http://pdi-backend.com/api';

// 임시 수정 ---> 주의

// export default function Meals() {
//   let lunch = menus.filter((menu) => {return menu.type === "student" ? true : false});
//   let morning = menus.filter((menu) => {return menu.type === "morning" ? true : false})[0];
//   let employee = menus.filter((menu) => {return menu.type === "employee" ? true : false})[0];
export default function Meals() {
  const [menus, setMenus] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    generateUserToken();
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
  // <---

  // useEffect(() => {
  //   const getCurrentDate = () => {
  //     const date = new Date();
  //     return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  //   };
  //   //

  //
  //   setCurrentDate(getCurrentDate());
  // }, []);

  //
  // 사용자 토큰 생성
  const generateUserToken = async () => {
    // 실제로 사용자 토큰을 생성하는 로직을 구현해야 합니다.
    // 여기서는 임시로 UUID를 사용하여 토큰을 생성합니다.
    const uniqueId = await Constants.deviceId;
    const token = 'token_based_on_' + uniqueId;
    setUserToken(token);
    fetchMenus(token);
  };
  //
  //
  // 사용자 토큰 생성 및 메뉴 가져오기
  const generateTokenAndFetchMenus = async () => {
    await generateAndSetUserToken(); // 사용자 토큰 생성 및 저장
    const userToken = await getAuthToken(); // 사용자 토큰 가져오기
    fetchMenus(userToken); // 토큰을 이용하여 메뉴 가져오기
  };

  // generateTokenAndFetchMenus 함수 호출
  generateTokenAndFetchMenus(); // 페이지 로드 시 사용자 토큰 생성 및 메뉴 가져오기
  //
  //
  // API를 통해 식단 데이터 가져오는 함수
  const fetchMenus = async (token) => {
    try {
      const response = await fetch(`${BACKEND_URL}/menus`, {
        headers: {
        Authorization: `Bearer ${token}`,
      }
    });
      if (response.ok) {
        const data = await response.json();
        setMenus(data);
      } else {
        console.error('Failed to fetch menus:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };
  //

  //
  // 필요한 식단을 필터링하여 변수에 저장
  const lunch = menus.filter((menu) => menu.type === "student");
  const morning = menus.find((menu) => menu.type === "morning");
  const employee = menus.find((menu) => menu.type === "employee");
  //

  return (
    <ScrollView>
      <View style={styles.starttitle}>
        <Text style={styles.titleText}>오늘의 식단</Text>
        <View style={styles.dateContainer}>
          <FontAwesome5 name="calendar-alt" size={20} color="black" />
          <Text style={styles.textfont}>{` ${currentDate}`}</Text>
        </View>
      </View>
      <MenuCard
        title="조식"
        image={undefined}
        dish={morning}
        description='학생증 필참 시 무료'
        timeText="08:00~09:00"
        themeColor="#c55a11"
        themeColorBackground="#fbe5d7"
        fallbackText={"MORNING\n학생식당"}
      />
      <MenuCardFolder
          title="학생식당"
          description={`${lunch.length}개의 메뉴가 있습니다`}
          themeColor="#2f5597"
          themeColorBackground="#dae3f3"
          fallbackText={"LUNCH\n학생식당"}
        >
          {lunch.map((dish) => {
            return (
              <MenuCardMini
                key={dish.id}
                title={dish.name}
                dish={lunch[0]}
                // description='학생증 필참 시 항상 무료'
                // timeText="08:00~09:00"
                style={{paddingBottom: 10}}
              />
            )
          })}
      </MenuCardFolder>
      <MenuCard
        title="교직원식당"
        image={undefined}
        dish={employee}
        morninginfo='학생 이용 가능'
        timeText="11:30~13:30"
        themeColor="#548235"
        themeColorBackground="#e2f0d9"
        fallbackText={"LUNCH\n교직원식당"}
      />
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
