import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ranking } from "../misc/Dummy";


const Item = ({ rank, name, hearts }) => (
  <View style={styles.item}>
    {/* 순위에 따른 메달 색상을 표시합니다. */}
    <Icon name="trophy" size={24} color={getMedalColor(rank)} />
    <Text style={styles.name}>{name}</Text>
    <Icon name="heart" size={24} color="red" />
    <Text style={styles.hearts}>{hearts}</Text>
  </View>
);
const getMedalColor = (rank) => {
  switch(rank) {
    case 1: return 'gold';
    case 2: return 'silver';
    case 3: return 'bronze';
    default: return 'grey';
  }
};


export default function Ranking() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Icon name="crown" size={30} color="orange" />
      <Text style={styles.headerText}>주간 랭킹</Text>
      <Text style={styles.subtitle}>10월 3주차</Text>
    </View>
    <FlatList
      data={ranking['data']}
      renderItem={({ item, index }) => (
        <Item rank={index + 1} name={item.name} hearts={item.hearts} />
      )}
      keyExtractor={item => item.key}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16, // 좌우 여백 추가
    borderBottomWidth: 1, // 리스트 아이템 간 구분선 추가
    borderColor: 'lightgrey',
  },
  name: {
    flex: 1,
    marginLeft: 8,
    fontSize: 18,
  },
  hearts: {
    fontSize: 18,
    color: 'red',
    marginLeft: 4,
  },
});
