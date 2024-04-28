import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { FontAwesome5 } from "@expo/vector-icons";
import Meals from "./pages/Meals";
import Ranking from "./pages/Ranking";
import { ShikdanWidgetPreviewScreen } from "./widget/android_widget"; // Import the HelloWidgetPreviewScreen

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    const uniqueId = await Constants.deviceId;
    const userToken = 'token_based_on_' + uniqueId; // Token 생성 로직은 서버와 협의가 필요
    await AsyncStorage.setItem('userToken', userToken);
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  // if (loading) {
  //   return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" /></View>;
  // }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "orange",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'archive';
              if (route.name === "메뉴") {
                iconName = 'utensils';
              } else if (route.name === "역대 랭킹") {
                iconName = 'trophy';
              }
              return <FontAwesome5 name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="메뉴"
            component={Meals}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="역대 랭킹"
            component={Ranking}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="위젯 미리보기"
            component={ShikdanWidgetPreviewScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
