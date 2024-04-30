import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, Button } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import Meals from "./pages/Meals";
import Ranking from "./pages/Ranking";
import { getAuthToken } from './auth';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-root-toast';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <RootSiblingParent>
      <StatusBar />
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
          </Tab.Navigator>
        </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
