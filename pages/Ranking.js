import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
//
import React, { useState, useEffect } from "react";
//
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from 'react-native';
// import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
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

const localIcons = {
  1: require('../assets/icons/number_1.png'),
  2: require('../assets/icons/number_2.png'),
  3: require('../assets/icons/number_3.png'),
  4: require('../assets/icons/number_4.png'),
  5: require('../assets/icons/number_5.png'),
  6: require('../assets/icons/number_6.png'),
  7: require('../assets/icons/number_7.png'),
  8: require('../assets/icons/number_8.png'),
  9: require('../assets/icons/number_9.png'),
  10: require('../assets/icons/number_10.png'),
  // ... 숫자 10까지의 이미지를 맵핑합니다.
};

const IconForRank = ({ rank }) => {
  // Map the ranks to appropriate FontAwesome icons
  const iconSource = localIcons[rank]; // 순위에 맞는 로컬 이미지를 가져옵니다.
  return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
};

const Item = ({ rank, name, hearts }) => {
if (!name) return null;
  return(
    <View style={styles.item}>
      <IconForRank rank={rank} />
      <Text style={styles.name}>{name}</Text>
      <View style={{minWidth: 60, flexDirection: 'row',}}>
        <FontAwesome5 name="heart" size={24} color="red" solid/>
        <Text style={styles.hearts}>{hearts}</Text>
      </View>
    </View>
  );
}

const getMedalColor = (rank) => {
  switch(rank) {
    case 1: return 'gold';
    case 2: return 'silver';
    case 3: return '#815353';
    default: return 'grey';
  }
};


// export default function Ranking() {
//   const sortedData = ranking['data'].sort((a, b) => b.likes - a.likes);
//
export default function Ranking() {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (sortedData.length === 0) {
      sortData();
    }
  }, [sortedData]);

  const sortData = () => {
    // const sorted = ranking['data'].sort((a, b) => b.likes - a.likes);
    //
    const sorted = ranking.data.sort((a, b) => b.likes - a.likes);
    //
    setSortedData(sorted);
  };

  const handleLikePress = (index) => {
    const newData = [...sortedData];
    newData[index].likes += 1;
    setSortedData(newData);
    // Here you would update the like count in your backend as well
    // This is just a frontend demonstration
  };
//

  return (
    <View style={styles.container}>
    <View style={styles.title}>
      <View style={{flexDirection: 'row',}}>
      <FontAwesome5 name="crown" size={30} color="orange"  />
      <Text style={styles.titleText}>역대 랭킹</Text>
      </View>
      <Text style={styles.subtitle}>10월 3주차</Text>
    </View>
    <View style={styles.header}>
      <Text style={styles.header._rank}>순위</Text>
      <Text style={styles.header._name}>메뉴</Text>
      <Text style={styles.header._likes}>좋아요 수</Text>
    </View>
    <FlatList //트로피 이미지 순위
      data={sortedData}
      renderItem={({ item, index }) => (
        <Item rank={index + 1} name={item.name} hearts={item.likes} />
      )}
      keyExtractor={(item, index) => String(index)}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    padding: 15,
  },
  title: {
    alignItems: 'left', // 세로축에서 중앙 정렬
    marginBottom: 16,
    paddingHorizontal:10,
    paddingTop:15,

  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    paddingLeft:15,
  },
  header:{
    flexDirection: 'row',
    justifyContent:"space-around",
    _rank: {
      fontSize:20,
      textAlign: "center",
      backgroundColor:"#f2f2f2",
      minWidth: 40,
      paddingHorizontal:10,
      borderRadius: 5,
    },
    _name: {
      flex: 1,
      fontSize: 20,
      textAlign: "center",
      backgroundColor:"#f2f2f2",
      paddingHorizontal: 10,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    _likes: {
      fontSize: 20,
      textAlign: "center",
      backgroundColor: "#f2f2f2",
      minWidth: 60,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
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
    paddingLeft: 10,
    fontSize: 22,
  },
  hearts: {
    fontSize: 18,
    color: 'red',
    marginLeft: 4,
  },
});
