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
import Icon from "react-native-vector-icons/FontAwesome";
import Meals from "./pages/Meals";
import Ranking from "./pages/Ranking";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = 'archive';

              switch (route.name) {
                case "Meals":
                  iconName = 'home';
                  break;

                case "Ranking":
                  iconName = 'bar-chart';
                  break;
              
                default:
                  iconName = 'archive';
                  break;
              }

              return <Icon name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen name="Meals" component={Meals} />
          <Tab.Screen name="Ranking" component={Ranking} />
        </Tab.Navigator>
      </NavigationContainer>
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
