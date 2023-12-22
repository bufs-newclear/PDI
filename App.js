import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { FontAwesome5 } from "@expo/vector-icons";
import Meals from "./pages/Meals";
import Ranking from "./pages/Ranking";

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "orange",
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'archive';

              switch (route.name) {
                case "메뉴":
                  iconName = 'utensils';
                  break;

                case "주간 랭킹":
                  iconName = 'trophy';
                  break;
              
                default:
                  iconName = 'archive';
                  break;
              }

              return <FontAwesome5 name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="메뉴"
            component={Meals}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="주간 랭킹" 
            component={Ranking}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //App의 최상위 컨테이너
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
